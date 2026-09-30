import photo from "../../assets/service1.png";
const HeroSection = () => {
  return (
    <div className="flex justify-center gap-20  mt-5">
      <div className="flex flex-col justify-center gap-1 mb-15 ml-10" >
        <h1 className="font bold text-6xl font-allura  text-[#0C6967]" >Our Services</h1>
        <p className="text-[12px] font-light my-2 text-[#6B788E]">KNOWING OUR CUSTOMERS NEEDS</p>
        <p  className="font-bold text-2xl">
          <span className=" text-[#D95103] ">We're more than just momos.</span> <br></br>We're a full-service dining experience.
        </p>
      </div>
      <div >
        <img  className="w-96 h-96 mr-10" src={photo} alt="hero" />
      </div>
    </div>
  );
};

export default HeroSection;
