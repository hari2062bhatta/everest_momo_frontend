
import { useEffect, useState } from "react";
import Api from "../config/Api";

const ManageOrder = () => {
  const [order, setOrder] = useState([]);

  const getOrder = async () => {
    try {
      const response = await Api.get("/api/order/viewall");
      console.log(response);
      setOrder(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  const changeOrderStatus = async (id, status) => {
    try {
      const response = await Api.put(`/api/order/updatedelivary/${id}`, {
        delevaryStatus: status,
      });
      getOrder();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 bg-gray-50 min-h-screen w-full">
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-gray-800">
          Manage Orders
        </h1>

        <p className="text-sm text-gray-500">
          Manage all customer orders
        </p>
      </div>

      {console.log(order)}

      {order?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {order.map((item) => (
            <div
              key={item._id}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              {/* Order Header */}
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  
                  <div>
                    <p className="text-xs text-gray-400">
                      Customer Name
                    </p>

                    <p className="text-sm font-semibold text-gray-700">
                      {item.user.fullName}
                    </p>
                  </div>

              
                </div>

                {/* Date */}
                <div className="mt-2 bg-gray-50 rounded-lg px-3 py-2">
                  <p className="text-xs text-gray-400">
                   Order Date: {new Date(item.createdAt).toLocaleString("en-NP", {
                      timeZone: "Asia/Kathmandu",
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>

                {/* Payment */}
                <div className="mt-3">
                  <span className="text-xs text-gray-500">
                    Payment:{" "}
                  </span>

                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs">
                    {item.paymentStatus}
                  </span>
                </div>
              </div>

              {/* Amount + Quantity */}
              <div className="flex justify-between bg-gray-50 rounded-lg p-2.5 mb-3">
                <div>
                  <p className="text-[11px] text-gray-400">
                    Amount
                  </p>

                  <p className="text-sm font-bold text-gray-700">
                    Rs. {item.totalAmount}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] text-gray-400">
                    Items
                  </p>

                  <p className="text-sm font-bold text-gray-700">
                    {item.totalQty}
                  </p>
                </div>
              </div>

              {/* Products */}
              <div className="mb-3">
                <p className="text-xs font-semibold text-gray-600 mb-2">
                  Products
                </p>

                <div className="space-y-1.5">
                  {item?.orderItem?.map((product) => (
                    <div
                      key={product._id}
                      className="flex justify-between items-center text-xs border-b pb-1"
                    >
                      <p className="text-gray-600 truncate pr-2">
                        {product.p_name}
                      </p>

                      <p className="text-gray-600 truncate pr-2">
                        qty: {product.qty}
                      </p>

                      <p className="font-medium whitespace-nowrap">
                        Rs. {product.p_price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery */}
              <div>
                <p className="text-xs text-gray-500 mb-1">
                  Delivery Status
                </p>

                <select
                  onChange={(e) =>
                    changeOrderStatus(item._id, e.target.value)
                  }
                  defaultValue={
                    item.delevaryStatus || "inprogress"
                  }
                  className="w-full text-xs border border-gray-300 rounded-md px-2 py-2 outline-none focus:border-[#0C6967]"
                >
                  <option value="inprogress">
                    In Progress
                  </option>

                  <option value="very soon">
                    Very Soon
                  </option>

                  <option value="done">
                    Done
                  </option>
                </select>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border p-10 text-center">
          <p className="text-gray-500">
            No orders yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default ManageOrder;

