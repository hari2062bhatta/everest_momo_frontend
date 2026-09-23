import {
  FaFacebook,
  FaInstagramSquare,
  FaWhatsapp,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="mt-42 px-4">
      <div className="text-center bg-gray-100 py-6 rounded-xl">
        <h1 className="text-[#D95103] font-bold text-2xl">
          Get In Touch
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Our friendly team would love to hear from you
        </p>
      </div>

      <div className="bg-gray-100 mt-5 p-5 rounded-xl flex flex-col lg:flex-row gap-5 max-w-6xl mx-auto">
        <div className="w-full lg:w-[35%] h-[450px] bg-[#0C6967] rounded-xl p-6 text-white flex flex-col justify-between">
          <div>
            <div className="flex gap-2 items-center">
              <CiLocationOn size={22} />
              <h4 className="font-semibold">Our Location</h4>
            </div>
            <p className="text-sm text-white/80 ml-7 mt-2">
              Naya Thimi, Bhaktapur
              <br />
              Bagmati, Nepal
            </p>
          </div>

          <div>
            <div className="flex gap-2 items-center">
              <FaPhoneSquareAlt size={18} />
              <h4 className="font-semibold">Our Contacts</h4>
            </div>

            <div className="flex gap-10 ml-7 mt-2 text-sm text-white/80">
              <div>
                <p className="text-white font-medium">Mobile</p>
                <p>9819264210</p>
                <p>9892387472</p>
              </div>

              <div>
                <p className="text-white font-medium">Landline</p>
                <p>0521982</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-2 items-center">
              <IoTimeOutline size={20} />
              <h4 className="font-semibold">Our Service Time</h4>
            </div>

            <div className="grid grid-cols-2 gap-y-1 ml-7 mt-2 text-sm text-white/80">
              <p>Sunday - Friday</p>
              <p>Saturday</p>
              <p>10:00 AM - 8:00 PM</p>
              <p>Closed</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm">
              Get In Touch On Social Networks
            </h3>

            <div className="flex gap-4 mt-3">
              <FaFacebook className="hover:text-orange-400 cursor-pointer" />
              <FaInstagramSquare className="hover:text-orange-400 cursor-pointer" />
              <FaWhatsapp className="hover:text-orange-400 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[65%] h-[450px] bg-white rounded-xl p-7">
          <h2 className="text-xl font-bold text-gray-800">
            Send Us a Message
          </h2>

          <p className="text-sm text-gray-500 mt-1 mb-5">
            Have a question? We would love to hear from you.
          </p>

          <form className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm mb-1 text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#D95103]"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-sm mb-1 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#D95103]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#D95103]"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none resize-none focus:border-[#D95103]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#D95103] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#0C6967] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;