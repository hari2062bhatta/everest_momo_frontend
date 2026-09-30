
import Api from "../config/Api"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const ViewProduct = () => {
  const [product, setProduct] = useState([]);
  const [updateItem, setUpdateItem] = useState({});
  const [data, setData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await Api.get("/api/product/view");
      console.log(response.data.data);
      setProduct(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteProduct = async (id) => {
    const response = await Api.delete(`/api/product/delete/${id}`);
    console.log(response.data.success);
    {
      Swal.fire({
        title: "Deleted",
        text: "product deleted successfully",
        icon: "success",
      });
    }
    fetchData();
  };
  const updateProduct = async (id) => {
    try {
      let response = await Api.put(`/api/product/update/${id}`, {
        p_price: updateItem.p_price,
        p_name: updateItem.p_name,
        p_rating: updateItem.p_rating,
        p_category: updateItem.p_category,
        p_description: updateItem.p_description,
      });
      console.log(response);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };
  const getData = (e) => {
    console.log("working");
    setUpdateItem({
      ...updateItem,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Product List</h1>
          <p className="text-gray-500 mt-1">Manage your products</p>
        </div>

        {product.length > 0 ? (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-5 py-4">S.N</th>
                    <th className="px-5 py-4">Name</th>
                    <th className="px-5 py-4">Price</th>
                    <th className="px-5 py-4">Category</th>
                    <th className="px-5 py-4">Image</th>
                    <th className="px-5 py-4">Description</th>
                    <th className="px-5 py-4 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {product.map((item, index) => {
                    return (
                      <tr
                        key={item._id}
                        className="border-b hover:bg-gray-50 transition"
                      >
                        {/* S.N */}
                        <td className="px-5 py-4 text-gray-600">{index + 1}</td>

                        {/* Name */}
                        <td className="px-5 py-4 font-semibold text-gray-800">
                          {item.p_name}
                        </td>

                        {/* Price */}
                        <td className="px-5 py-4 text-green-600 font-semibold">
                          Rs. {item.p_price}
                        </td>

                        {/* Category */}
                        <td className="px-5 py-4">
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {item.p_category}
                          </span>
                        </td>

                        {/* Image */}
                        <td className="px-5 py-4">
                          <img
                            src={`http://localhost:5000/uploads/${item.p_img}`}
                            alt={item.p_name}
                            className="w-20 h-20 object-cover rounded-lg border"
                          />
                        </td>

                        {/* Description */}
                        <td className="px-5 py-4 text-gray-600 max-w-xs">
                          <p className="line-clamp-2">{item.p_description}</p>
                        </td>

                        {/* Actions */}
                        <td className="px-5 py-4">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => deleteProduct(item._id)}
                              className="bg-red-500 text-white px-4 py-2 rounded-lg
                              hover:bg-red-600 transition"
                            >
                              Del
                            </button>

                            <button
                              onClick={() => {
                                setUpdateItem(item);
                                setIsOpen(!isOpen);
                              }}
                              className="bg-blue-500 text-white px-4 py-2 rounded-lg
                              hover:bg-blue-600 transition"
                            >
                              Edit
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              No Products Available
            </h2>

            <p className="text-gray-500 mt-2">Add a product to see it here.</p>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="flex flex-col justify-center items-center p-10 absolute  top-0 right-0">
          <form className="border rounded-md bg-gray-300 w-100 p-4">
            <div className="flex flex-col w-full gap-2">
              <label>
                Product Name <span className="text-red-500">*</span>
              </label>

              <input
                name="p_name"
                value={updateItem.p_name}
                onChange={getData}
                className="border rounded-md p-2 text-sm"
                type="text"
                placeholder="iPhone 18"
              />

              <label>
                Product Price <span className="text-red-500">*</span>
              </label>

              <input
                name="p_price"
                value={updateItem.p_price}
                onChange={getData}
                className="border rounded-md p-2 text-sm"
                type="number"
                placeholder="999"
              />

              <label>
                Product Rating <span className="text-red-500">*</span>
              </label>

              <input
                name="p_rating"
                value={updateItem.p_rating}
                onChange={getData}
                className="border rounded-md p-2 text-sm"
                type="number"
                step="0.1"
                placeholder="7.8"
              />

              <label>
                Product Category <span className="text-red-500">*</span>
              </label>

              <input
                name="p_category"
                value={updateItem.p_category}
                onChange={getData}
                className="border rounded-md p-2 text-sm"
                type="text"
                placeholder="veg"
              />

              <label>
                Product Description <span className="text-red-500">*</span>
              </label>

              <textarea
                name="p_description"
                value={updateItem.p_description}
                onChange={getData}
                className="h-30 w-full border rounded-md p-2"
                placeholder="Enter product description"
              />

              {/* <label>
            Product Image <span className="text-red-500">*</span>
          </label> */}
              {/* 
          <input
            name="image"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
          /> */}

              <input
                onClick={() => {
                  updateProduct(updateItem._id);
                  setIsOpen(!isOpen);
                }}
                className="bg-green-300 rounded-md p-2 text-sm cursor-pointer"
                type="submit"
                value="update"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ViewProduct;
