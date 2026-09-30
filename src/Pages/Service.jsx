import HeroSection from "../components/services/HeroSection";
import VideoSection from "../components/home/VideoSection";
import photo from "../assets/videoImage.png"
import photo1 from "../assets/party.png"
import photo2 from "../assets/Chef.png"
import MiddleSection from "../components/services/MiddleSection"
import Bottom from "../components/services/Bottom";
import Footer from "../components/Footer";
const Service=()=>{

    return <div>
        <HeroSection/>
        <VideoSection photo={photo}  style={{items:"center",justify:"end" ,m:60 , ml:100}} 
        content1={"Dine With Us"} content2={"Enjoy our momos in the comfort of your own home with our delivery services"}/>
        <MiddleSection title={"private party"} photos ={photo1} style={"row"} />
        <MiddleSection title={"categring"} photos={photo2} style={"row-reverse"}/>
        <Bottom/>
        <Footer/>
    </div>

}

export default Service;