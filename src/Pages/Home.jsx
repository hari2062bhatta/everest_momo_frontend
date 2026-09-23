import HappyCustomerSection from "../components/home/HappyCustomerSection.jsx";
import HeroSection from "../components/home/HeroSection";
import HeroSection2 from "../components/home/HeroSection2";
import ItemSection from "../components/home/ItemSection"
import VideoSection from "../components/home/VideoSection.jsx";
import UseProduct from "../hooks/UseProduct.jsx"
import Contact from "../components/home/Contact.jsx"
import Map from "../components/home/Map.jsx"
import Footer from "../components/Footer.jsx"
// import photo from "../../assets/video.png"
import photo from "../assets/video.png"
import OurService from "../components/home/OurService.jsx";

const Home=()=>{
    const {isError,isLoading,product}=UseProduct();
    return <div>
        <HeroSection/>
        <HeroSection2/>
        <ItemSection error={isError} loading={isLoading} product={product} />
        <VideoSection photo={photo}  style={{item:"center",mb:0, mt:20}} content2={"See how only chefs cooks only the best momos"} content1={'Process behind the making'} />
       <OurService/>
        <HappyCustomerSection/>
        <Contact/>
        <Map/>
        <Footer/>
    </div>

}

export default Home;
