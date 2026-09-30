import Map from "../home/Map";
import Button from "../Button"
const ContactMiddle = () => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-center gap-10 lg:gap-16 mx-5 md:mx-10 lg:mr-20 mt-10 mb-16">

      {/* Map Section */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-[700px] overflow-hidden rounded-2xl">
        <Map />
      </div>

      {/* Contact Form */}
      <div className="w-full lg:w-1/2 lg:h-[700px] flex flex-col">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Contact <span className="text-[#D95103]">Us</span>
        </h1>

        <p className="text-[#6B788E] text-[18px] mb-6">
          If you have any queries, send us a message. Our friendly team
          would love to hear from you.
        </p>

        <form className="flex flex-col gap-4 flex-1">

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium">First Name</label>
              <input
                type="text"
                placeholder="Enter first name"
                className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-orange-500"
                required
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Enter last name"
                className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-orange-500"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              What can we do for you?
            </label>
            <input
              type="text"
              placeholder="Enter subject"
              className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-orange-500"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-orange-500"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Contact Number</label>
            <input
              type="tel"
              placeholder="Enter your contact number"
              className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-orange-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows="3"
              placeholder="Write your message here..."
              className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-orange-500 resize-none"
              required
            />
          </div>    
          <Button buttonName="send Message" />     
        </form>
        
      </div>
    </div>
  );
};

export default ContactMiddle;