import assistant1 from "../../assets/assistant1.png"
import assistant2 from "../../assets/assistant2.png"
import head from "../../assets/head.png"


const OurTeam=()=>{


                return <div className="mb-10">
                        <div className="text-center mb-10">
                            <h1 className="text-3xl font-bold">Meet The <span className="text-[#D95103]">Team</span></h1>
                            <p className="text-[#0C6967]">Our talented team members who delivers only the best results</p>
                        </div>
                        <div className="flex justify-center gap-3 w-[96%] ml-8">
                    <img  className="w-[32%]"  src={`${head}`}/>
                    <img  className="w-[32%]" src={`${assistant1}`}/>
                    <img  className="w-[32%]" src={`${assistant2}`}/>
                </div> 

                    
                </div>
}


export default OurTeam;