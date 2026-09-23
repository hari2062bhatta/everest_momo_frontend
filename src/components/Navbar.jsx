import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

import {NavLink} from "react-router-dom"
const Navbar=()=>{

    return <div className="flex justify-around items-center w-full h-[70px] border-b ">
        <div className="flex items-center gap-1">
            <img className="w-6" src="../src/assets/momo.png"/>
            <p className="text-[#0C6967] font-bold">momos</p>
        </div>
        <div className="flex gap-4 items-center text-[#6B788E] ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/service"> Our Service</NavLink>
            <NavLink to="/menu">Our Menu</NavLink>
        </div>
        <div className="flex gap-4 items-center  ">
            <FaTiktok size="23" className="rounded-full"/>
            <FaFacebook size="23" className="rounded-full"/>
            <FaInstagramSquare size="23" className="rounded-full"/>
            <button className="ml-5 bg-[#D95103] rounded-[100px] p-2 text-sm">Contact Us</button>
        </div>
    </div>

}

export default Navbar;