import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
import { useContext,useEffect } from "react";
import { authContext } from "../context/AuthProvider";
import { cartContext } from "../context/CartProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  useEffect(()=>{
          getCart()
          },[])
  const navigate = useNavigate();
  const { user, logout } = useContext(authContext);
  const { cart,getCart  } = useContext(cartContext);
 
  const totalItem = cart.reduce((total, item) => {
    return total + item.qty;
  }, 0); 
          
  const handleLogout = () => {
    toast((t) => (
      <div className="flex flex-col gap-3">
        <p className="font-semibold">Are you sure you want to logout?</p>

        <div className="flex gap-2">
          <button
            onClick={() => {
              toast.dismiss(t.id);
              logout();
              toast.success("Logout successful");
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Yes
          </button>

          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-gray-300 px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full h-[70px] border-b bg-white shadow-sm flex justify-around items-center px-6">

      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img
          className="w-8 h-8 object-contain"
          src="../src/assets/momo.png"
        />
        <p className="text-[#0C6967] font-bold text-lg">momos</p>
      </div>

      {/* Navigation */}
      <div className="flex gap-7 items-center text-[#6B788E] font-medium">
        <NavLink
          to="/"
          className="hover:text-[#D95103] transition"
        >
          Home
        </NavLink>
       {
        user?.role=="admin" &&  <NavLink
          to="/admin/"
          className="hover:text-[#D95103] transition"
        >
          admin
        </NavLink>
       }

        <NavLink
          to="/about"
          className="hover:text-[#D95103] transition"
        >
          About Us
        </NavLink>

        <NavLink
          to="/service"
          className="hover:text-[#D95103] transition"
        >
          Our Service
        </NavLink>

        <NavLink
          to="/menu"
          className="hover:text-[#D95103] transition"
        >
          Our Menu
        </NavLink>
      </div>

      {/* Social + Contact */}
      <div className="flex gap-4 items-center">
        <FaTiktok
          size="20"
          className="cursor-pointer hover:text-[#D95103] transition"
        />

        <FaFacebook
          size="20"
          className="cursor-pointer hover:text-[#D95103] transition"
        />

        <FaInstagramSquare
          size="20"
          className="cursor-pointer hover:text-[#D95103] transition"
        />

        <button
          onClick={() => navigate("/contact")}
          className="ml-3 bg-[#D95103] text-white rounded-full px-5 py-2 text-sm hover:bg-[#b94302] transition"
        >
          Contact Us
        </button>
      </div>

      {/* Cart */}
      {
        user &&<div>
          <div
        onClick={() => navigate("/cart")}
        className="relative cursor-pointer p-2 hover:text-[#D95103] transition"
      >
        <FaShoppingCart size="23" />

        {(
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {totalItem}
          </span>
        )}
      </div>
        </div>
      }

      {/* User */}
      {user ? (
        <div className="flex gap-2 items-center">
          <h1
          onClick={()=>navigate("/profile")}
           className="rounded-full border px-4 py-2 text-sm cursor-pointer bg-blue-100 text-blue-700 font-medium">
            {user.fullName.split(" ")[0]}
          </h1>

          <button
            onClick={handleLogout}
            className="bg-green-500 text-white rounded-md px-4 py-2 text-sm hover:bg-green-600 transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <button
            onClick={() => navigate("/login")}
            className="bg-green-500 text-white rounded-md px-4 py-2 text-sm hover:bg-green-600 transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="bg-red-500 text-white rounded-md px-4 py-2 text-sm hover:bg-red-600 transition"
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;