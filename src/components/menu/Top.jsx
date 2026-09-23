import Scan from "../../assets/Scan.png"
import { GiSmartphone } from "react-icons/gi";
const Top = () => {
  return (
    <div className="flex flex-col items-center text-center " >
      <div>
        <h1 className="font-allura text-[42px] text-[#0C6967] mt-5 ">Our Menu</h1>
        <h4 className="text-xl font-bold">
         <span className="text-[#D95103]">Our menu is more than just momos,</span> <br></br>
          with a variety of dishes to cater to all tastes and preferences.
        </h4>
      </div>
      <div className="mt-8 bg-[#FAFBFB] flex flex-col items-center justify-center   w-180 ">
        <h4 className="text-[#0C6967] text-[20px] font-bold mt-3 ">Scan the QR code</h4>
        <p className="text-[#252D43] ">You can also check the allergy advices using your phone as well</p>
        <div className="mt-5 ">
            <img src={`${Scan}`} />
        </div>
        <div className="flex items-center justify-center gap-1 mt-1 mb-4">
        <h4 className="font-bold text-black text-xl "><span className="text-[#D95103]">SCAN</span> ME!</h4>
        <GiSmartphone size="25" />
        </div>
      </div>
    </div>
  );
};

export default Top;
