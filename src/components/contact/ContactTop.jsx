import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

const ContactTop=()=>{
    return <div className="flex flex-col items-center gap-10">
        <div className="mt-10 space-y-1">
            <h1 className="font-allura text-6xl text-[#0C6967] text-center ">Our Contact</h1>
            <p className="text-[#6B788E] text-[12px] text-center ">GET IN TOUCH</p>
            <p className="font-bold text-2xl"><span className="text-[#D95103]">Our Friendly Team</span> would love to hear from you</p>
        </div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ml-30 mr-30">

  <div className="border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 shadow-sm ">
    <div className="flex items-center gap-3 text-[#D95103]">
      <FaLocationDot size={22} />
      <h4 className="text-xl font-semibold text-gray-800">Location</h4>
    </div>

    <p className="text-gray-600 leading-7 italic" >
      New Baneshwor -41201,
      <br />
      Kathmandu, Bagmati, Nepal
    </p>
  </div>

  <div className="border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 shadow-sm">
    <div className="flex items-center gap-3 text-[#D95103]">
      <FaPhoneVolume size={22} />
      <h4 className="text-xl font-semibold text-gray-800">Phone</h4>
    </div>

    <div className="flex flex-col gap-4 text-sm text-gray-600">
      <div className="flex justify-between gap-3 italic">
        <h4 className="font-semibold text-gray-800">Mobile</h4>
        <p className="text-right leading-6">
          (+977) 980 5689789
          <br />
          (+977) 9841 275897
        </p>
      </div>

      <div className="flex justify-between gap-3">
        <h4 className="font-semibold text-gray-800">Tel</h4>
        <p>01-4783972</p>
      </div>
    </div>
  </div>

  <div className="border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 shadow-sm">
    <div className="flex items-center gap-3 text-[#D95103]">
      <IoTime size={24} />
      <h4 className="text-xl font-semibold text-gray-800">Service Time</h4>
    </div>

    <div className="flex flex-col gap-4 text-sm">
      <div className="flex justify-between gap-3 italic">
        <h4 className="font-semibold text-gray-800">MON–FRI</h4>
        <p className="text-gray-600">8 AM – 8 PM</p>
      </div>

      <div className="flex justify-between gap-3">
        <h4 className="font-semibold text-gray-800">SAT–SUN</h4>
        <p className="text-gray-600">Closed</p>
      </div>
    </div>
  </div>

</div>
    </div>

}


export default ContactTop;