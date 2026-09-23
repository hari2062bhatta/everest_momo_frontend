
import { NavLink } from "react-router";
import {
  FaFacebook,
  FaInstagramSquare,
  FaWhatsapp,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import momo from "../../src/assets/momo.png";

const Footer = () => {
  return (
    <footer className="bg-[#FAFBFB] text-black mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={momo} className="w-8 h-8 object-contain" />
            <h1 className="text-2xl font-bold">MOMOS</h1>
          </div>

          <p className="text-sm text-black leading-6">
            Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
            molestie. Volutpat quis egestas porttitor turpis sit in.
          </p>
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-4">Quick Links</h1>

          <div className="flex flex-col gap-3 text-sm text-black">
            <NavLink
              to="/"
              className="hover:text-orange-400 transition"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="hover:text-orange-400 transition"
            >
              About Us
            </NavLink>

            <NavLink
              to="/services"
              className="hover:text-orange-400 transition"
            >
              Our Services
            </NavLink>

            <NavLink
              to="/contact"
              className="hover:text-orange-400 transition"
            >
              Contact
            </NavLink>
          </div>
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-4">Legals</h1>

          <div className="flex flex-col gap-3 text-sm text-black">
            <p className="hover:text-orange-400 cursor-pointer transition">
              Terms & Conditions
            </p>

            <p className="hover:text-orange-400 cursor-pointer transition">
              Privacy Policy
            </p>

            <p className="hover:text-orange-400 cursor-pointer transition">
              Support
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-4">Follow Us</h1>

          <div className="flex gap-4">
            <FaFacebook
              size={22}
              className="cursor-pointer hover:text-orange-400 transition"
            />

            <FaInstagramSquare
              size={22}
              className="cursor-pointer hover:text-orange-400 transition"
            />

            <FaWhatsapp
              size={22}
              className="cursor-pointer hover:text-orange-400 transition"
            />

            <FaPhoneSquareAlt
              size={22}
              className="cursor-pointer hover:text-orange-400 transition"
            />
          </div>
        </div>
      </div>
        <hr></hr>
      <div className="border-t border-white/20 text-center py-4 text-sm text-black">
        © 2026 MOMO HUB. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer


