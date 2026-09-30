import { useState } from "react";
import Swal from "sweetalert2";
import Api from "../config/Api";

const AddProduct = () => {
  const [data, setData] = useState({
    name: "",
    price: "",
    rating: "",
    category: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const formData = new FormData();
  formData.append("p_name", data.name);
  formData.append("p_price", data.price);
  formData.append("p_description", data.description);
  formData.append("p_rating", data.rating);
  formData.append("image", image);
  formData.append("p_category", data.category);

  const addProduct = async (e) => {
    e.preventDefault();

    if (
      !data.name.trim() ||
      !data.price ||
      !data.rating ||
      !data.category ||
      !data.description.trim() ||
      !image
    ) {
      Swal.fire({
        title: "Product creation failed",
        text: "All fields are required",
        icon: "error",
      });

      return;
    }

    try {
      const response = await Api.post("/api/product/create", formData);

      if (response.data.success) {
        Swal.fire({
          title: "Created",
          text: "Product added successfully",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Failed",
          text: "Failed to add product",
          icon: "error",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Add Product
      </h1>

      <div className="flex justify-center">
        <form
          onSubmit={addProduct}
          className="w-[420px] border rounded-lg bg-white shadow-md p-6"
        >
          <div className="flex flex-col gap-2">

            <label className="font-medium text-gray-700">
              Product Name <span className="text-red-500">*</span>
            </label>

            <input
              name="name"
              value={data.name}
              onChange={getData}
              className="border rounded-md p-2 outline-none focus:border-green-500"
              type="text"
              placeholder="Chicken Momo"
            />

            <label className="font-medium text-gray-700 mt-2">
              Product Price <span className="text-red-500">*</span>
            </label>

            <input
              name="price"
              value={data.price}
              onChange={getData}
              className="border rounded-md p-2 outline-none focus:border-green-500"
              type="number"
              placeholder="150"
            />

            <label className="font-medium text-gray-700 mt-2">
              Product Rating <span className="text-red-500">*</span>
            </label>

            <input
              name="rating"
              value={data.rating}
              onChange={getData}
              className="border rounded-md p-2 outline-none focus:border-green-500"
              type="number"
              step="0.1"
              placeholder="7.8"
            />

            <label className="font-medium text-gray-700 mt-2">
              Product Category <span className="text-red-500">*</span>
            </label>

            <input
              name="category"
              value={data.category}
              onChange={getData}
              className="border rounded-md p-2 outline-none focus:border-green-500"
              type="text"
              placeholder="veg / buff / chicken"
            />

            <label className="font-medium text-gray-700 mt-2">
              Product Description <span className="text-red-500">*</span>
            </label>

            <textarea
              name="description"
              value={data.description}
              onChange={getData}
              className="h-24 border rounded-md p-2 outline-none focus:border-green-500 resize-none"
              placeholder="Enter product description"
            />

            <label className="font-medium text-gray-700 mt-2">
              Product Image <span className="text-red-500">*</span>
            </label>

            <input
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="border rounded-md p-2 text-sm"
              type="file"
            />

            <input
              className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-md p-2 mt-4 cursor-pointer"
              type="submit"
              value="Add Product"
            />

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;