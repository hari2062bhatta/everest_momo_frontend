import Api from "../config/Api";
import { useState, useEffect } from "react";
import { FaUsers, FaBox, FaShoppingBag } from "react-icons/fa";
import { GiDumpling } from "react-icons/gi";
import { FaMoneyCheck } from "react-icons/fa6";
import { MdPendingActions } from "react-icons/md";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  const getUser = async () => {
    const response = await Api.get("/api/user/view");
    setUsers(response.data.data);
  };

  const getProduct = async () => {
    const response = await Api.get("/api/product/view");
    setProducts(response.data.data);
  };

  const getOrder = async () => {
    try {
      const response = await Api.get("/api/order/viewall");
      setOrders(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
    getOrder();
    getProduct();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <h1 className="mb-1 text-xl sm:text-2xl font-bold text-gray-800">
        Dashboard
      </h1>

      <p className="mb-5 sm:mb-6 text-sm text-gray-500">
        Overview of your restaurant
      </p>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <div className="rounded-xl bg-white p-5 sm:p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <h2 className="text-sm sm:text-base text-gray-500">Total Users</h2>
            <FaUsers className="text-xl sm:text-2xl text-blue-500" />
          </div>
          <p className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold text-blue-600">
            {users?.length}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 sm:p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <h2 className="text-sm sm:text-base text-gray-500">Total Products</h2>
            <FaBox className="text-xl sm:text-2xl text-orange-500" />
          </div>
          <p className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold text-orange-600">
            {products?.length}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 sm:p-6 shadow-sm border sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <h2 className="text-sm sm:text-base text-gray-500">Total Orders</h2>
            <FaShoppingBag className="text-xl sm:text-2xl text-green-500" />
          </div>
          <p className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold text-green-600">
            {orders?.length}
          </p>
        </div>
      </div>

      {/* Product Categories */}
      <div className="mt-6 sm:mt-8 rounded-xl border bg-white p-4 sm:p-6 shadow-sm">
        <h2 className="mb-4 sm:mb-5 text-base sm:text-lg font-bold text-gray-800">
          Product Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="rounded-lg bg-green-50 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-gray-600">Veg Items</h3>
              <GiDumpling className="text-xl sm:text-2xl text-green-600" />
            </div>
            <p className="mt-2 text-xl sm:text-2xl font-bold text-green-600">
              {products?.filter((item) => item.p_category === "veg").length}
            </p>
          </div>

          <div className="rounded-lg bg-orange-50 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-gray-600">Buff Items</h3>
              <GiDumpling className="text-xl sm:text-2xl text-orange-600" />
            </div>
            <p className="mt-2 text-xl sm:text-2xl font-bold text-orange-600">
              {products?.filter((item) => item.p_category === "buff").length}
            </p>
          </div>

          <div className="rounded-lg bg-red-50 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-gray-600">Chicken Items</h3>
              <GiDumpling className="text-xl sm:text-2xl text-red-600" />
            </div>
            <p className="mt-2 text-xl sm:text-2xl font-bold text-red-600">
              {products?.filter((item) => item.p_category === "chicken").length}
            </p>
          </div>
        </div>
      </div>

      {/* Order Section */}
      <div className="mt-6 sm:mt-8 rounded-xl border bg-white p-4 sm:p-6 shadow-sm">
        <h2 className="mb-4 text-base sm:text-lg font-bold text-gray-800">
          Order Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <div className="rounded-lg bg-green-50 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-gray-600">Successful Payments</h3>
              <FaMoneyCheck className="text-lg sm:text-xl text-green-600" />
            </div>
            <p className="mt-2 text-xl sm:text-2xl font-bold text-green-600">
              {orders?.filter((item) => item.paymentStatus === "success").length}
            </p>
          </div>

          <div className="rounded-lg bg-yellow-50 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-gray-600">Orders In Progress</h3>
              <MdPendingActions className="text-xl sm:text-2xl text-yellow-600" />
            </div>
            <p className="mt-2 text-xl sm:text-2xl font-bold text-yellow-600">
              {orders?.filter((item) => item.delevaryStatus === "inprogress").length}
            </p>
          </div>

          <div className="rounded-lg bg-yellow-50 p-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-gray-600">Orders Delivers</h3>
              <MdPendingActions className="text-xl sm:text-2xl text-yellow-600" />
            </div>
            <p className="mt-2 text-xl sm:text-2xl font-bold text-yellow-600">
              {orders?.filter((item) => item.delevaryStatus === "done").length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;