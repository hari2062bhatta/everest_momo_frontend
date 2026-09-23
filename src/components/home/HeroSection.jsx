import Button from "../Button.jsx"
const HeroSection = () => {
  return (
    <div className="flex  justify-end relative  overflow-hidden">
      <div className="items-center mx-auto mt-20 space-y-1.5 mr-100 ">
        <p className="text-[#6B788E] text-sm font-semibold tracking-[4px]">
          RESTAURANT
        </p>

        <h1 className="text-6xl font-bold leading-tight">
          The <span className="text-[#D95103]">#One</span>
        </h1>

        <h1 className="text-6xl font-bold ">
          Momo <span className="text-[#D95103] tex-sm">Restaurant</span>
        </h1>

        <p className="text-[#6B788E] text-base">
          More than{" "}
          <span className="text-[#D95103] font-semibold">
            20+ Varieties
          </span>{" "}
          of momo available for you
        </p>
        <div className="mr-70">
        <Button buttonName="Explore Food Menu" />

        </div>
      </div>

      <div className="flex relative h-fit bottom-10 mr-0">
        <div className="w-full h-[510px]">
          <img
            className="w-full h-full object-contain"
            src="../src/assets/hero1.png"
          />
        </div>

        <div className="w-80 h-65 absolute right-30  top-30 rounded-2xl overflow-hidden ">
          <img
            className="w-full h-full object-cover"
            src="../src/assets/momo1.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

