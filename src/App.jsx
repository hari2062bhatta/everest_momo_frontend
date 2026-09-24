import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu"
import ProductDetails from "./Pages/ProductDetails";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Toaster } from "react-hot-toast";
import Demo from "./experiment/Demo"
import ProtectedRoutes from "./components/ProtectedRoutes";
const App = () => {
  return (
    <div>
      <Toaster/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        {/* <Route path="/productdetails/:id" element={<ProductDetails/>}></Route> */}
        <Route path="/productDetails/:id" element={<ProtectedRoutes>
          <ProductDetails/>
        </ProtectedRoutes>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/demo" element={<Demo/>}></Route>
      </Routes>
    </div>
  );
};
export default App;
