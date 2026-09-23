const HeroSection = () => {
  return (
    <div className="flex justify-around m-10">
      <div className="flex flex-col justify-center ml-10 mr-40">
        <h1 className="text-6xl my-8 font-bold font-allura text-[#0C6967]">
          About Us
        </h1>
        <p className="text-[12px] font-light my-2 text-[#6B788E]">WE PRIDE OURSELF ON</p>
        <p className="font-bold text-2xl">
          <span className=" text-[#D95103] ">Our authentic momo recipes</span>
          <br></br> passed down through<br></br> generations
        </p>
      </div>
      <div className="w-96 h-96 mr-20">
        <img src="../../src/assets/about1.png" />
      </div>
    </div>
  );
};

export default HeroSection;
