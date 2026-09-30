import Scan from "../../assets/Scan.png"
import party from "../../assets/party.png"
import photo from "../../assets/service2.png"
const MiddleSection = ({title,style,photos}) => {
  return (
    <div
    style={{flexDirection:style}}
    className="flex justify-center gap-50 mt-10">
      <div >
        <div><img className="w-10 h-10" src={photos} />
        <h1 className="font-bold text-2xl my-1">{title}</h1>
        <p className="text-[#6B788E] text-[10px]">
          Lorem ipsum dolor sit amet consectetur. Lectus faucibus<br></br> lorem ac
          adipiscing. Leo odio tincidunt ipsum magna lacus<br></br> viverra tincidunt.
        </p></div>
        <div className="flex gap-3 bg-[#FFFFFF] shadow-[#FFFFFF] mt-10 text-[#6B788E] text-sm">
            <p><span className="font-bold text-[#0C6967] text-2xl">Scan the QR code</span> <br></br>You can also check about the service</p>
            <img className="h-20 w-20" src={Scan}/>
        </div>
      </div>
      
      <div>
        <img  className ="w-86 h-70"src={photo}/>
      </div>
    </div>
  );
};

export default MiddleSection;
