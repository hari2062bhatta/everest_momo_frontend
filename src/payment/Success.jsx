import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import Api from "../config/Api";
import { cartContext } from "../context/CartProvider";

const Success = () => {
  const { getCart } = useContext(cartContext);
  const [search] = useSearchParams();
  const navigate = useNavigate();

  const data = search.get("data");
  const response = data ? JSON.parse(atob(data)) : null;

  const removeCart = async () => {
    const responses = await Api.delete("/api/cart/removeall");
    console.log(responses.data);
  };

  const changeStatus = async () => {
    const responses = await Api.put(
      `/api/order/updatestatus/${response.transaction_uuid}`
    );

    console.log(responses.data);
    return responses.data;
  };

  useEffect(() => {
    const processPayment = async () => {
      try {
        if (!response) return;

        const result = await changeStatus();

        if (result.success) {
          await removeCart();
          getCart();
        }
      } catch (error) {
        console.log(error);
      }
    };

    processPayment();
  }, []);

  if (!response) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Invalid payment information.</p>
      </div>
    );
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
          <p className="text-sm text-gray-500">
            Total Amount
          </p>

          <h2 className="text-3xl font-bold text-[#0C6967] mt-1">
            Rs. {response.total_amount}
          </h2>
        </div>

        {/* Payment Details */}
        <div className="text-left mt-5 space-y-3">

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">
              Transaction ID
            </span>

            <span className="font-medium text-sm">
              {response.transaction_uuid}
            </span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">
              Payment Status
            </span>

            <span className="text-green-600 font-medium capitalize">
              {response.status || "Success"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              Payment Method
            </span>

            <span className="font-medium">
              eSewa
            </span>
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