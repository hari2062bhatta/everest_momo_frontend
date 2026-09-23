import HeroSection from "../components/about/HeroSection";
import VideoSection from "../components/home/VideoSection";
// import photo from "../../src/assets/videoImage2.png"
// import photo from ".././assets/video.png";
import photo from "../assets/video1.png"
import MiddleSection from "../components/about/MiddleSection";
import CEOExplain from "../components/about/CEOExplain";
import OurTeam from "../components/about/OurTeam";
import Footer from "../components/Footer";
const About=()=>{
    return <div>
        <HeroSection/>
        <VideoSection photo={photo}  style={{items:"start",justify:"end" ,m:60}} content1={"Process behind the making"} content2={"See how we make momos that you like from only the best ingredients"}/>
        <MiddleSection/>
        <CEOExplain/>
        <OurTeam/>
        <Footer/>
    
    </div>

}

export default About;