import {useNavigate} from "react-router-dom"

const OneProduct = ({ product }) => {
  const navigate=useNavigate()
  return (
    <div className="w-72 text-center">
      <div className="relative flex justify-center">
        <img
          src={`http://localhost:5000/uploads/${product.p_img}`}
          alt={product.p_name}
          className="w-52 h-44 object-contain hover:scale-105 transition-transform duration-300"
        />

        <span className="absolute bottom-0 bg-orange-600 text-white text-xs font-medium px-3 py-1 rounded-md">
          Popular
        </span>
      </div>

      <div className="mt-4 px-3">
        <h1 className="text-xl font-bold text-gray-900">
          {product.p_name}
        </h1>

        <h4 className="text-xl font-bold text-orange-600 mt-1">
          Rs {product.p_price}
        </h4>

         <div>
           <button
           
           onClick={()=>navigate(`/productdetails/${product._id}`)}
           className="bg-green-400 p-2 text-sm rounded-xl m-1 cursor-pointer" >See More ...</button>          
         </div>
        {/* <p className="text-sm text-slate-400 leading-6 mt-3">
          {product.p_description}
        </p> */}
      </div>
    </div>
  );
};

export default OneProduct;