import Button from "../Button";

const HeroSection2 = () => {
  return (
    <div className="flex items-center justify-between mt-20 gap-10 px-16 mr-30">
      <div className="relative h-[350px] w-[45%] bg-[url('../src/assets/background1.png')] bg-no-repeat bg-bottom bg-contain">
        <img
          className="absolute bottom-0 left-1/2 h-95 w-70 -translate-x-1/2 object-contain"
          src="../src/assets/pngwing1.png"
        />
      </div>

      <div className="w-[50%]">
        <h1 className="text-4xl font-bold text-black  ">
          Why Customers <span className="text-[#D95103]">Love Us</span>
        </h1>

        <p className="mt-5 mb-4 leading-7 text-[#6B788E]">
          Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh
          fermentum vulputate tortor. Egestas facilisi luctus turpis arcu
          dignissim. Amet neque enim etiam purus id. Tortor sit orci blandit
          cursus turpis.
        </p>

        <Button  buttonName="Explore Our Story" />
      </div>
    </div>
  );
};

export default HeroSection2;