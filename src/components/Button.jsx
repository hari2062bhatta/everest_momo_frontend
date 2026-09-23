import { FaLongArrowAltRight } from "react-icons/fa";

const Button = ({ buttonName, colorName }) => {
  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <button

      style={{
        backgroundColor:`${colorName}`
      }}
        className={`text-md flex
      

      justify-center
      items-center
      gap-2.5
       text-white p-[14px] cursor-pointer bg-[#0C6967] rounded-[100px]`}
      >
        {buttonName}
        <FaLongArrowAltRight />
      </button>
    </div>
  );
};

export default Button;
