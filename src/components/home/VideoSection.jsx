import { TbPlayerPlayFilled } from "react-icons/tb";
import Button from "../Button.jsx"
const VideoSection = ({content1,content2,style,photo}) => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold  p-8 bg-[#F7F9FC]"><span className="text-[#D95103]">We Offer People</span> The Service They Want</h1>
            <div
            className="w-full h-[550px] items-start  bg-cover bg-center bg-no-repeat  flex flex-col "
            style={{ backgroundImage: `url(${photo})`, alignItems:style.item ,justifyContent:style.justify}}
            >
              <div style={{margin:style.m,marginTop:style.mt}}>
                  <h2 className="mt-40 text-white text-3xl font-bold mr-10 ">{content1}</h2>
                <p className="text-white text-md">{content2}</p>
                <div className=" flex w-40 justify-center items-center mt-4 ml-20 bg-[#0C6967]   rounded-[100px]">
                <TbPlayerPlayFilled size="30" className="rounded-full ml-1" color="white"/>
                <button className="text-md w-50 p-2 text-white cursor-pointer  rounded-[100px]">Watch The Video</button>
                  
                </div>
              </div>
            </div>

    
    </div>
  );
};

export default VideoSection;
