import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import ProductDetails from "./Pages/ProductDetails";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Toaster } from "react-hot-toast";
import Demo from "./experiment/Demo";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Cart from "./Pages/Cart";
import Payment from "./payment/Payment";
import Profile from "./Pages/Profile";
import Service from "./Pages/Service";
import Success from "./payment/Success";
import Failure from "./payment/Failure";
import Contact from "./Pages/Contact";
import ManageOrder from "./Pages/ManageOrder";
import Admin from "./Pages/Admin";
import AddProduct from "./Pages/AddProduct";
import ViewProduct from "./Pages/ViewProduct";
import Dashboard from "../src/Pages/Dashboard"
import AdminProtectedRoutes from "./components/AdminProtectedRoutes";
import ManageUsers from "./Pages/ManageUsers";
const App = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        {/* <Route path="/productdetails/:id" element={<ProductDetails/>}></Route> */}
        <Route
          path="/productDetails/:id"
          element={
            <ProtectedRoutes>
              <ProductDetails />
            </ProtectedRoutes>
          }
        ></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/cart"
          element={
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/demo" element={<Demo />}></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              {" "}
              <Profile />{" "}
            </ProtectedRoutes>
          }
        ></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/failure" element={<Failure />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Route path="/manageorder" element={<ManageOrder />}></Route> */}
        <Route path="/admin/" element={<AdminProtectedRoutes>
          <Admin/>
        </AdminProtectedRoutes>}>
          <Route index element={<Dashboard />} />
          <Route path="manage-orders" element={<ManageOrder/>} />
          <Route path="add-product" element={<AddProduct/>} />
          <Route path="view-product" element={<ViewProduct/>}/>
         <Route path="manage-users" element={<ManageUsers/>}/>
          {/* <Route path="admin" element={<Dashboard/>}></Route> */}
        </Route>
      </Routes>
    </div>
  );
};
export default App;
