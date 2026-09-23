import Item from "./Item";
import { useState, useEffect } from "react";
import Button from "../Button.jsx"
const ItemSection = ({ error, loading, product }) => {
  const [Items, setItem] = useState([]);
  const getInitial = () => {
    let newProduct = product.filter((item) => item.p_category === "veg");
    setItem(newProduct);
  };
  useEffect(() => {
    getInitial();
  }, [product]);

  const filterItem = (category) => {
    let newProduct = product.filter((item) => item.p_category === category);
    setItem(newProduct);
  };

  return (
    <div className="bg-white px-8 py-20 lg:px-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-[#222222] md:text-5xl">
          Our <span className="text-[#D95103]"> Most Popular</span> Recipes
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6B788E]">
          Browse through a variety of recipes with fresh ingredients selected
          only from the best places.
        </p>
      </div>

      <div className="mt-10 flex justify-center gap-3">
        <button
          onClick={() => filterItem("veg")}
          className="rounded-full shadow-2xl border-[#D95103] px-7 py-2.5 font-semibold text-black transition duration-300 hover:bg-[#D95103] hover:text-white"
        >
          Veg
        </button>

        <button
          onClick={() => filterItem("chicken")}
          className="rounded-full  shadow-2xl border-[#D95103] px-7 py-2.5 font-semibold text-black] transition duration-300 hover:bg-[#D95103] hover:text-white"
        >
          Chicken
        </button>

        <button
          onClick={() => filterItem("buff")}
          className="rounded-full  shadow-2xl border-[#D95103] px-7 py-2.5 font-semibold text-black transition duration-300 hover:bg-[#D95103] hover:text-white"
        >
          Buff
        </button>
      </div>

      <div className="mx-auto  mt-12 max-w-6xl">
        <Item error={error} loading={loading} items={Items} />
      </div>
      <Button  buttonName="Explore More Menu"/>
    </div>
  );
};

export default ItemSection;
