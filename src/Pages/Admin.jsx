import React from "react";
import { NavLink, Outlet } from "react-router";
import AdminleftSection from "../components/Admin/AdminleftSection";

function Admin() {
  return (
    <div className="flex gap-2 w-full h-full">
        <div className="w-[20%]">
          <AdminleftSection/> 
          </div>      
       <div className="w-[80%]">
         <Outlet/>
       </div>
    </div>
      
  );
}

export default Admin;
