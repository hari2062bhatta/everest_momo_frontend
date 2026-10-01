import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import Api from "../config/Api";
import { cartContext } from "../context/CartProvider";

const Success = () => {
  const { getCart } = useContext(cartContext);
  const [search] = useSearchParams();
  const navigate = useNavigate();
  
  const [response, setResponse] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null);

  useEffect(() => {
    const dataParam = search.get("data");

    if (!dataParam) {
      setErrorStatus("unsuccessful");
      return;
    }

    try {
      // 1. Decode and parse eSewa data
      const decodedData = JSON.parse(atob(dataParam));
      setResponse(decodedData);

      // 2. Perform async actions using the raw decoded data directly 
      // (This avoids waiting for the asynchronous setResponse state update)
      const handleBackendUpdate = async () => {
        try {
          const result = await Api.put(`/api/order/updatestatus/${decodedData.transaction_uuid}`);
          
          // Assuming your API returns standard success tracking
          await Api.delete("/api/cart/removeall");
          getCart();
        } catch (error) {
          console.error("Failed to update backend status:", error);
        }
      };

      handleBackendUpdate();

    } catch (error) {
      console.error("Parsing error:", error);
      setErrorStatus("invalid_character");
    }
  }, [search, getCart]); // Correct dependencies

  // Render Error UI if applicable
  if (errorStatus === "invalid_character") {
    return <div className="text-center mt-10 text-red-500"><h1>Invalid Character Error</h1></div>;
  }

  if (errorStatus === "unsuccessful") {
    return (
      <div className="text-center mt-10 text-red-500">
        <h1>Payment Unsuccessful</h1>
      </div>
    );
  }

  // Prevent accessing properties of null while waiting for data
  if (!response) {
    return <div className="text-center mt-10">Processing payment details...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-md rounded-xl shadow-md p-6 text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-3xl text-green-600">✓</span>
        </div>

        {/* Message */}
        <h1 className="text-2xl font-bold text-green-600 mt-4">
          Payment Successful
        </h1>

        <p className="text-gray-500 mt-2">
          Thank you for ordering from Everest Momo.
        </p>

        {/* Amount */}
        <div className="bg-gray-50 rounded-lg p-4 mt-6">
          <p className="text-sm text-gray-500">Total Amount</p>
          <h2 className="text-3xl font-bold text-[#0C6967] mt-1">
            Rs. {response.total_amount}
          </h2>
        </div>

        {/* Payment Details */}
        <div className="text-left mt-5 space-y-3">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Transaction ID</span>
            <span className="font-medium text-sm truncate max-w-[200px]">
              {response.transaction_uuid}
            </span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Payment Status</span>
            <span className="text-green-600 font-medium capitalize">
              {response.status || "COMPLETE"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Payment Method</span>
            <span className="font-medium">eSewa</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-7">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-[#0C6967] text-white py-2 rounded-lg hover:bg-[#095653]"
          >
            Continue Shopping
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="w-full border border-[#0C6967] text-[#0C6967] py-2 rounded-lg hover:bg-gray-50"
          >
            My Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
