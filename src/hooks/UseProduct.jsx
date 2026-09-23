import {useState,useEffect} from "react"
import Api from "../config/Api"
const UseProduct=()=>{

    useEffect(()=>{
        getProduct()
    },[])

    const [product,setProduct]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState(false)

    const getProduct=async ()=>{

        try{
            setIsLoading(true)
            let response=await Api.get("/api/product/view")
            setProduct(response.data.data)
            setIsLoading(false)
            setIsError(false)


        }
        catch(err){

            setIsLoading(false)
            setIsError(true)
            console.log(err)
        }
    }

    return {isLoading,isError,product}

}

export default UseProduct;