import { useContext,useState } from "react";
import { cartContext } from "../context/CartProvider";
import { useNavigate } from "react-router-dom";

import Api from "../config/Api";
const Cart = () => {
const[transcation_id,setTranscation_id]=useState()

  const navigate = useNavigate();
  const { cart, incrementCart, decrementCart, removeCart } =
    useContext(cartContext);

  console.log(cart)

  const totalAmount = cart.reduce((total, item) => {
    return total + item.product.p_price * item.qty;
  }, 0);
  const totalQty = cart.reduce((total, item) => {
    return total + item.qty;
  }, 0);

  const deliveryFee = 10;
  const grandTotal = totalAmount + deliveryFee;

  const filterItem = cart.map((item) => {
    return {...item.product,qty:item.qty};
  });

  console.log(filterItem);

  const createOrder = async () => {
    console.log("hari")
    const response = await Api.post("/api/order/create", {
      cart:filterItem,
      totalQty,
      totalAmount,
    });
    if(response.data.success){
      navigate('/payment',{state:{grandTotal, transcation_id:response.data.data._id}})
    }
    else{
      console.log("error in thi point")
    }
    setTranscation_id(response.data.data._id) 
       if(transcation_id){
           navigate('/payment',{state:{grandTotal,transcation_id}})
       }

  };
  
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-5">Shopping Cart</h1>

        {cart?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Cart Products */}
            <div className="md:col-span-2 space-y-3">
              <div className="bg-white p-4 rounded">
                <h2 className="font-semibold">Products</h2>
              </div>

              {cart.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="bg-white p-4 rounded flex gap-5 items-center"
                  >
                    <img
                      className="w-28 h-28 object-cover rounded"
                      src={`http://localhost:5000/uploads/${item.product.p_img}`}
                      alt={item.product.p_name}
                    />

                    <div className="flex-1">
                      <h2 className="font-semibold text-lg">
                        {item.product.p_name}
                      </h2>

                      <p className="text-gray-500 text-sm mt-1">
                        {item.product.p_category}
                      </p>

                      <p className="text-orange-600 font-semibold text-lg mt-2">
                        Rs. {item.product.p_price}
                      </p>

                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() => decrementCart(item._id)}
                          className="border px-3 py-1 rounded"
                        >
                          -
                        </button>

                        <span className="border px-4 py-1 rounded">
                          {item.qty}
                        </span>

                        <button
                          onClick={() => incrementCart(item._id)}
                          className="border px-3 py-1 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold">
                        Rs. {item.product.p_price * item.qty}
                      </p>

                      <button
                        onClick={() => removeCart(item._id)}
                        className="text-red-500 text-sm mt-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded p-5 h-fit sticky top-5">
              <h2 className="text-lg font-semibold border-b pb-4">
                Order Summary
              </h2>

              <div className="flex justify-between mt-5">
                <span>Subtotal</span>
                <span>Rs. {totalAmount}</span>
              </div>

              <div className="flex justify-between mt-3">
                <span>Delivery Fee</span>
                <span>{deliveryFee === 0 ? "Free" : `Rs. ${deliveryFee}`}</span>
              </div>

              <div className="border-t mt-5 pt-5 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="text-xl font-bold text-orange-600">
                  Rs. {grandTotal}
                </span>
              </div>

              <button
                onClick={() => {
                  createOrder()
                 
                }}
                className="w-full bg-orange-500 text-white py-3 rounded mt-5 font-semibold hover:bg-orange-600"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white text-center py-16 rounded">
            <p className="text-gray-500">No Product available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
