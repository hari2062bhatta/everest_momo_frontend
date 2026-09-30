import { createContext, useEffect, useState } from "react";
import Api from "../config/Api";
export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const getCart = async () => {
    const response = await Api.get("/api/cart/view");
    setCart(response.data.data);
  };

  const addCart=async(id)=>{
    console.log("id is ",id )
    const response=await Api.post("/api/cart/add",{
        product_id:id
    })
    console.log(response)
    getCart();

  }
  const incrementCart=async(id)=>{
        const response=await Api.put(`/api/cart/increment/${id}`)
        getCart()
  }
   const decrementCart=async(id)=>{
    console.log(id)
       try{
        const response=await Api.put(`/api/cart/decrement/${id}`)
        console.log(response)
        getCart()
       }
       catch(err){
        console.log(err)
       }
  }

  const removeCart=async(id)=>{
    try{
    const  response=await Api.delete(`/api/cart/remove/${id}`)
      console.log(response)
      getCart();

    }
    catch(err){
     console.log("error is ",err)
    }
  }

  useEffect(() => {
    getCart();
  },[]);
  return (
    <cartContext.Provider value={{ cart, setCart,addCart,incrementCart,decrementCart,removeCart,getCart   }}>
      {children}
    </cartContext.Provider>
  );
};
