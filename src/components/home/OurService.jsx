import Button from "../Button"


const OurService=()=>{
    return <div>
           <div className="flex justify-around around mt-10">
        
        <div className="space-y-2">
            <img className="w-15 h-12"  src="../../src/assets/Quality.png"/>
            <h1 className="text-black text-xl font-bold">Quality Food</h1>
            <p className="text-sm text-black">Only the best food with top quality<br></br> products and ingredients</p>
             
        </div>
        <div className="space-y-2">
            <img  className="w-15 h-12"  src="../../src/assets/Party.png"/>
            <h1 className="text-black text-xl font-bold">Private Party</h1>
            <p  className="text-sm text-black">Get the best food for all your<br></br> private parties and gatherings</p>

        </div>
         <div className="space-y-2">
            <img   className="w-15 h-12" src="../../src/assets/Chef.png"/>
            <h1 className="text-black text-xl font-bold">Categring</h1>
            <p  className="text-sm text-black">Get the best food for <br></br>any occasions and gatherings</p>
        </div>
        </div>  
        <Button buttonName="Explore Our Services"/>   

    </div>

}

export default OurService ;