import OneProduct from "./OneProduct";
import BRUSHES1 from "../../assets/BRUSHES1.png"

const Main=({product,category})=>{
    console.log(product)

    return <div className="flex justify-center items-center mt-10 mb-10 ">

        {
            product?.length>0?<div className="space-y-16">
                <div className="flex gap-3 items-center text-center">
                    <img src={`${BRUSHES1}`}/>
                    <h1 className="text-3xl font-bold font text-[#D95103]">{category} <span className="text-black">MOMO'S</span></h1>
                    <img src={`${BRUSHES1}`}/>

                </div>
               <div className="flex gap-8">
                 {
                    product.map((item)=>{
                        return <div   key={item._id}>
                            {<OneProduct product={item}/>}
                        </div>
                    })
                }
               </div>
            </div>:<div>NO {category} product</div>
        }
    </div>



}

export default Main;