import Button from "../Button";

const Bottom = () => {
  return (
    <div className="w-full h-fit ">
        <div className="flex flex-col items-center bg-[#F5F6F7] my-20 mx-40 p-10 gap-1">
      <h1 className="font-bold text-2xl text-[#101828]">Got any Queries?</h1>
      <p className="text-[14px] text-[#6B788E]">
        If you have any queries, send us a message. Our Friendly team would love
        to hear from you{" "}
      </p>
      <Button buttonName="Get In Touch" />
    </div>
    </div>
  );
};

export default Bottom;
