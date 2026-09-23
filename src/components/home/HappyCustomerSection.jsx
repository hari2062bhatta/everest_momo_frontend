const HappyCustomerSection = () => {
  return (
    <div className="flex justify-center mt-20 space-x-40">
      <div className="flex flex-col space-y-1 items-start justify-center ml-30 mt-10">
        <h1 className="font-bold text-4xl ">200+ <span className="text-[#D95103]">Happy Customers</span></h1>
        <p className="text-[#0C6967] font-bold">What our customers say about us</p>
        <p className="mt-2 italic">
          “Only the best momo you can find in <br></br>the market. Different Varieties of
          momo to choose<br></br> from. Will be visiting again soon”
        </p>
        <h2 className="text-2xl font-bold text-black">Livia Dias</h2>
      </div>
      <div className="w-[300px] h-[250px]">
        <img src="../../src/assets/customer.png" />
      </div>
    </div>
  );
};

export default HappyCustomerSection;
