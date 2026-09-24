
import UseProduct from "../hooks/UseProduct";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  const { product } = UseProduct();

  const getData = () => {
    const response = product.find((item) => item._id == id);
    setData(response);
  };

  useEffect(() => {
    getData();
  }, [product]);

  return (
    <div className="px-10 py-10">
      {data && (
        <div className="flex items-center gap-16">
          
          <div className="w-1/2 flex justify-center">
            <img
              className="w-80 h-80 object-contain rounded-xl"
              src={`http://localhost:5000/uploads/${data.p_img}`}
              alt={data.p_name}
            />
          </div>

          <div className="w-1/2 flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-gray-800">
              {data.p_name}
            </h1>

            <h2 className="text-2xl font-semibold text-orange-600">
              Rs. {data.p_price}
            </h2>

            <p className="text-gray-600 leading-7">
              {data.p_description}
            </p>
            <p>{data.p_category}</p>
            <button className="w-fit px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
              Add to Cart
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default ProductDetails;
