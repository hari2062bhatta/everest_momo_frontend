import UseProduct from "../hooks/UseProduct.jsx"
import Main from "../components/menu/Main";
import Top from "../components/menu/Top"
import {useState,useEffect} from "react"
import Footer from "../components/Footer.jsx";
const Menu=()=>{
    const{isError,isLoading,product} =UseProduct();
        console.log(product)

    const [veg,setVeg]=useState([])
    const [chicken,setChicken]=useState([])
    const [buff,setBuff]=useState([])

    const getVeg=()=>{

        const items=product.filter((item)=>item.p_category=="veg")
           setVeg(items);
    }
      const getBuff=()=>{

        const items=product.filter((item)=>item.p_category=="buff")
           setBuff(items);
    }
       const getChicken=()=>{

        const items=product.filter((item)=>item.p_category=="chicken")
           setChicken(items);
    }

    useEffect(()=>{
       
        getVeg();
        getBuff();
        getChicken();

    },[product])


            return <div>
                    <Top/>
                    <Main product={veg} category="VEG"/>
                    <Main product={buff} category="BUFF" />
                    <Main product={chicken} category="CHICKEN" />
                    <Footer/>

            </div>

}

export default Menu;