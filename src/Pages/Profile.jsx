
import { useContext, useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaReceipt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import Api from "../config/Api";

const Profile = () => {
  const { user } = useContext(authContext);
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  const getOrder = async () => {
    try {
      const response = await Api.get("/api/order/view");
      setOrder(response.data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) getOrder();
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg">Please login first.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Profile Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-[#0C6967] text-white flex items-center justify-center text-2xl shrink-0">
              <FaUser />
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-xl font-semibold text-gray-900">
                {user.fullName}
              </h1>
              <p className="text-sm text-gray-500 capitalize mt-0.5">
                {user.role || "Customer"}
              </p>

              <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2 justify-center sm:justify-start">
                  <FaEnvelope className="text-[#0C6967] shrink-0" />
                  {user.email}
                </span>
                <span className="inline-flex items-center gap-2 justify-center sm:justify-start">
                  <FaPhone className="text-[#0C6967] shrink-0" />
                  {user.contact || "Not provided"}
                </span>
              </div>
            </div>

            {/* Admin action */}
            
          </div>
        </div>

        {/* Orders Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaReceipt className="text-[#0C6967]" />
            <h2 className="text-lg font-semibold text-gray-900">
              Order History
            </h2>
          </div>

          {order.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-14 text-center">
              <p className="text-gray-400">No orders found.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {order.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        Order #{item._id.slice(-6)}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {new Date(item.createdAt).toLocaleString("en-NP", {
                          timeZone: "Asia/Kathmandu",
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 capitalize">
                       payment: {item.paymentStatus || "Pending"}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 capitalize">
                        delivary:{item.delevaryStatus || "Processing"}
                      </span>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="border-t border-gray-100 pt-3 space-y-2">
                    {item.orderItem?.map((product, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-start gap-4"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {product.p_name}
                          </p>
                          <p className="text-xs text-gray-400">
                            Qty: {product.qty}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-gray-800 whitespace-nowrap">
                          Rs. {product.p_price}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="border-t border-gray-100 mt-3 pt-3 flex justify-between items-center">
                    <span className="text-sm text-gray-500">Total</span>
                    <span className="font-semibold text-[#0C6967]">
                      Rs. {item.totalAmount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;