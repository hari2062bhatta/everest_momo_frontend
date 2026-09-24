import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../context/AuthProvider";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(authContext);
    //  console.log("user is ",user)
  return (
    <div className="flex justify-around items-center w-full h-[70px] border-b ">
      <div className="flex items-center gap-1">
        <img className="w-6" src="../src/assets/momo.png" />
        <p className="text-[#0C6967] font-bold">momos</p>
      </div>
      <div className="flex gap-4 items-center text-[#6B788E] ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/service"> Our Service</NavLink>
        <NavLink to="/menu">Our Menu</NavLink>
      </div>
      <div className="flex gap-4 items-center  ">
        <FaTiktok size="23" className="rounded-full" />
        <FaFacebook size="23" className="rounded-full" />
        <FaInstagramSquare size="23" className="rounded-full" />
        <button className="ml-5 bg-[#D95103] rounded-[100px] p-2 text-sm">
          Contact Us
        </button>
      </div>
      {user ? (
        <div className="flex gap-2 ">
               <h1 className="rounded-full border p-2 text-sm bg-blue-400 cursor-pointer">{user.fullName.split(" ")[0]}</h1>
          <button
            onClick={logout}
            className="bg-green-400 rounded-md cursor-pointer p-2 text-sm"
          >
            logout
          </button>
       
        </div>
      ) : (
        <div className="flex justify-end gap-2">
          <button
            onClick={() => navigate("/login")}
            className="bg-green-400 rounded-md cursor-pointer p-2 text-sm"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-red-400 rounded-md cursor-pointer p-2 text-sm"
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
