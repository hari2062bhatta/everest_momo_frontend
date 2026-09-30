import { RxDashboard } from "react-icons/rx";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineStreetview } from "react-icons/md";
import { SiNginxproxymanager } from "react-icons/si";
import { MdOutlineShoppingBag } from "react-icons/md";

import { NavLink } from "react-router-dom";

function AdminleftSection() {
  const menuItems = [
    {
      name: "Dashboard",
      path: ".",
      icon: <RxDashboard />,
    },
    {
      name: "View Product",
      path: "view-product",
      icon: <MdOutlineStreetview />,
    },
    {
      name: "Add Product",
      path: "add-product",
      icon: <IoIosAddCircle />,
    },
    {
      name: "Manage orders",
      path: "manage-orders",
      icon: <SiNginxproxymanager />,
    },
    {
      name: "Manage users",
      path: "manage-users",
      icon: <MdOutlineShoppingBag />,
    },
  ];

  return (
    <div className="w-full md:w-64 min-h-screen bg-white border-r border-gray-200 p-5">
      <h2 className="text-xl font-bold text-[#0C6967] mb-8">
        Admin Panel
      </h2>

      <div className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "."}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-[#0C6967] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span className="text-sm font-medium">
              {item.name}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default AdminleftSection;


