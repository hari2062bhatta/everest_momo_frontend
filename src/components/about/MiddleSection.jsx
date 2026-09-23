import image1 from "../../assets/image1.png"
import smimage1 from "../../assets/smimage1.png"
import smimage2 from "../../assets/smimage2.png"
import smimage3 from "../../assets/smimage3.png"
import image3 from "../../assets/image3.png"
import image2 from "../../assets/image2.png"



const MiddleSection = () => {

    return (
    // <div>
    //   {/* section1 */}
    //   <div>
    //     <div>
    //       <h1>
    //         Our momos are made <br></br>with love
    //       </h1>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur. Lectus <br></br>faucibus
    //         lorem ac adipiscing. Leo odio tincidunt <br></br>ipsum magna lacus
    //         viverra tincidunt. Viverra aliquet <br></br>sollicitudin eget
    //         dapibus. Vestibulum velit viverra<br></br>
    //         gravida consectetur sed facilisis ut morbi.
    //       </p>
    //     </div>
    //     <div>
    //       <img />
    //     </div>
    //   </div>
    //   {/* section2 */}
    //   <div>
    //     <div>
    //       <img></img>
    //     </div>
    //     <div>
    //       <h1>
    //         Taste the difference with <br></br>our handcrafted momos
    //       </h1>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur. Lectus <br></br>faucibus lorem ac
    //         adipiscing. Leo odio tincidunt <br></br>ipsum magna lacus viverra tincidunt.
    //         Viverra aliquet <br></br>sollicitudin eget dapibus. Vestibulum velit viverra<br></br>
    //         gravida consectetur sed facilisis ut morbi.
    //       </p>
    //     </div>
    //   </div>
    //   {/* section3 */}
    //   <div>
    //     <div>
    //         <h1></h1>
    //         <p>
    //         Lorem ipsum dolor sit amet consectetur. Lectus <br></br>faucibus lorem ac
    //         adipiscing. Leo odio tincidunt <br></br>ipsum magna lacus viverra tincidunt.
    //         Viverra aliquet <br></br>sollicitudin eget dapibus. Vestibulum velit viverra<br></br>
    //         gravida consectetur sed facilisis ut morbi.
    //       </p>
    //     </div>
    //     <div>
    //         <img/>
    //     </div>
    //   </div>
    // </div>

   <div className="">
     <div className=" mt-20  mb-10 flex justify-around">
      <div className="space-y-2 " >
        <h1 className="font-bold text-3xl ">
          Our momos are <span className="text-[#D95103]">made <br></br>with love</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Lectus <br></br>faucibus lorem
          ac adipiscing. Leo odio tincidunt <br></br>ipsum magna lacus viverra
          tincidunt. Viverra aliquet <br></br>sollicitudin eget dapibus.
          Vestibulum velit viverra<br></br>
          gravida consectetur sed facilisis ut morbi.
        </p>
      </div>
      <div className="relative w-[25%] h-96">
        <img className="w-96 h-86" src={`${image1}`} />
        <img className="absolute  bottom-0  right-63" src={`${smimage1}`}/>
      </div>
    </div>


     <div className=" mt-20  mb-10 flex flex-row-reverse justify-around">
      <div className="space-y-2 " >
        <h1 className="font-bold text-3xl ">
         Taste the difference with <br></br><span className="text-[#D95103]">our handcrafted momos</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Lectus <br></br>faucibus lorem
          ac adipiscing. Leo odio tincidunt <br></br>ipsum magna lacus viverra
          tincidunt. Viverra aliquet <br></br>sollicitudin eget dapibus.
          Vestibulum velit viverra<br></br>
          gravida consectetur sed facilisis ut morbi.
        </p>
      </div>
      <div className="relative w-[25%] h-105">
        <img className="w-100 h-86" src={`${image2}`} />
        <img className="absolute bottom-3    left-60" src={`${smimage2}`}/>
      </div>
    </div>


     <div className=" mt-20  mb-10 flex justify-around">
      <div className="space-y-2 " >
        <h1 className="font-bold text-3xl ">
        Our momos are the <br></br>perfect <span className="text-[#D95103]">blend of tradition<br></br> and innovation</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Lectus <br></br>faucibus lorem
          ac adipiscing. Leo odio tincidunt <br></br>ipsum magna lacus viverra
          tincidunt. Viverra aliquet <br></br>sollicitudin eget dapibus.
          Vestibulum velit viverra<br></br>
          gravida consectetur sed facilisis ut morbi.
        </p>
      </div>
      <div className="relative w-[25%] h-105">
        <img className="w-96 h-86" src={`${image3}`} />
        <img className="absolute  bottom-0  right-55" src={`${smimage3}`}/>
      </div>
    </div>
   </div>
  );
};

export default MiddleSection;
