


const Item = ({ error, loading, items }) => {
  return (
    <div>
      {loading ? (
        <div className="py-10 text-center text-[#6B788E]">Loading.......</div>
      ) : error ? (
        <div className="py-10 text-center text-red-500">
          Something went wrong
        </div>
      ) : items.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item) => (
            <div
              key={item._id}
              className="w-64 overflow-hidden rounded-2xl bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden rounded-xl">
                <img
                  className="h-full w-full object-cover"
                  src={`http://localhost:5000/uploads/${item.p_img}`}
                  alt={item.p_name}
                />
              </div>

              <div className="px-2 py-3">
                <p className="text-sm capitalize text-[#6B788E]">
                  {item.p_category}
                </p>

                <h2 className="mt-1 text-lg font-bold text-[#222222]">
                  {item.p_name}
                </h2>

                <p className="mt-2 font-bold text-[#D95103]">
                  Rs. {item.p_price}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-10 text-center">
          <h1 className="text-xl font-semibold text-[#6B788E]">
            No Product Available
          </h1>
        </div>
      )}
    </div>
  );
};

export default Item;

