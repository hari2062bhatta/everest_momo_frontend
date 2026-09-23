import CEO from "../../assets/CEO.png";
import CEObg from "../../assets/CEObg.png";
import { FaQuoteLeft } from "react-icons/fa";
const CEOExplain = () => {
  return (
    <div className="flex w-full justify-end h-fit mt-10 mb-10">
      <div style={{ backgroundImage: `url(${CEObg})` }} className="w-[885px] text-[#FFFFFF] flex flex-col justify-center items-start  ">.
       <div className="ml-20 p-5 space-y-2">
          < FaQuoteLeft color="white" size="15"/>
        <p> 
          Momo is not just about sustenance, it's about bringing <br></br>people together
          and creating memories. At our<br></br> restaurant, we strive to create a warm
          and inviting<br></br> atmosphere where our guests can enjoy delicious <br></br>momo,
          great company, and unforgettable experiences
        </p>
        <div className="mt-2">
            <h1 className="font-bold text-2xl">Marcus Schleifer</h1>
            <p className="text-[13px] font-bold">CEO</p>
        </div>
       </div>
      </div>
      <div className="">
        <img className="h-100 w-110 " src={`${CEO}`} />
      </div>
    </div>
  );
};

export default CEOExplain;
