import {useEffect,useState} from "react"
import Api from "../config/Api"
const Demo=()=>{
            const [data,setData]=useState([])
    const getData=async()=>{
        const response=await Api.get("/api/product/view")
        setData(response.data.data)
    }
    useEffect(()=>{
                getData();
    },[])
                    return <div>
                        {
                            data?.map((item)=>{
                                return <div>
                                    <h1>{item.p_name}</h1>
                                    <h2>{item.p_price}</h2>
                                </div>
                            })
                        }
                    </div>
}
export default Demo;





