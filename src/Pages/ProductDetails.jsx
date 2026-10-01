import UseProduct from "../hooks/UseProduct";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { cartContext } from "../context/CartProvider";
import { FaStar, FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

const ProductDetails = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { product } = UseProduct();
  const { addCart,cart,removeCart } = useContext(cartContext);


  useEffect(() => {
    const check = product.find((item) => item._id === id);
    setData(check || null);
  
  }, [product, id]);
    const isAlready=cart.find((item)=>item.product._id==id)

  if (!data) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          Product not found
        </h2>
        <button
          onClick={() => navigate("/menu")}
          className="mt-5 bg-orange-600 text-white px-6 py-3 rounded-lg"
        >
          Back to Menu
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
          <button
            onClick={() => navigate("/")}
            className="hover:text-orange-600"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => navigate("/menu")}
            className="hover:text-orange-600"
          >
            Menu
          </button>
          <span>/</span>
          <span className="text-gray-800 font-medium">
            {data.p_name}
          </span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 bg-white rounded-2xl p-5 md:p-8 shadow-sm">

          {/* Product Image */}
          <div className="flex items-center justify-center">
            <img
              src={`http://localhost:5000/uploads/${data.p_img}`}
              alt={data.p_name}
              className="w-full h-[320px] md:h-[450px] object-cover rounded-xl"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center py-3">

            {/* Category */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium capitalize">
                <MdCategory />
                {data.p_category}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 capitalize">
              {data.p_name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <FaStar className="text-yellow-500 text-xl" />
              <span className="font-semibold text-gray-800">
                {data.p_rating}
              </span>
              <span className="text-gray-500 text-sm">
                Product Rating
              </span>
            </div>

            {/* Price */}
            <h2 className="text-3xl font-bold text-orange-600 mt-6">
              Rs. {data.p_price}
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-7 mt-5">
              {data.p_description || "Freshly prepared with quality ingredients and served with delicious achar. Enjoy our authentic taste in every bite."}
            </p>

            {/* Add to Cart */}
            <div>
             {
               isAlready?<div>
                  <button
              onClick={() => {
                removeCart(isAlready._id)
              
              }}
              className="mt-8 w-full sm:w-fit flex justify-center items-center gap-3 bg-green-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition duration-200"
            >
              <FaShoppingCart />
              remove from cart
            </button>
                </div>:<div>
                <button
              onClick={() => {
                addCart(data)
              }}
              className="mt-8 w-full sm:w-fit flex justify-center items-center gap-3 bg-green-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition duration-200"
            >
              <FaShoppingCart />
              Add to Cart
            </button>

              </div>
             }
            </div>

            {/* Product Information */}
            <div className="grid grid-cols-3 gap-3 border-t border-gray-200 mt-8 pt-6">

              <div>
                <MdCategory className="text-2xl text-teal-700 mb-2" />
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-semibold text-gray-800 capitalize mt-1">
                  {data.p_category}
                </p>
              </div>

              <div>
                <FaShoppingCart className="text-xl text-teal-700 mb-2" />
                <p className="text-sm text-gray-500">Price</p>
                <p className="font-semibold text-gray-800 mt-1">
                  Rs. {data.p_price}
                </p>
              </div>

              <div>
                <FaStar className="text-xl text-teal-700 mb-2" />
                <p className="text-sm text-gray-500">Rating</p>
                <p className="font-semibold text-gray-800 mt-1">
                  {data.p_rating}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/menu")}
          className="mt-8 flex items-center gap-2 border border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white px-5 py-3 rounded-lg transition"
        >
          <FaArrowLeft />
          Back to Menu
        </button>

      </div>
    </div>
  );
};

export default ProductDetails;