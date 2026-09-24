import toast from "react-hot-toast"
import { useState } from "react";
import Api from "../config/Api.jsx"
import { useContext } from "react";
import {authContext} from "../context/AuthProvider.jsx"
import {useNavigate} from "react-router-dom"
const Login = () => {
  const navigate=useNavigate()
  const {setUser,user,loading,login}=useContext(authContext)
  console.log(user)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const loginUser=async(e)=>{
    e.preventDefault()
        try{
            const response=await Api.post("/api/user/login",{
                email,
                password
            })
            console.log(response)
            if(response.data.success){
                console.log(response.data.data)
              login(response.data.data)
              //   toast.success("login successfull")
              //   // navigate('/')
            }
            else{
                toast.error("invalid email or password")
            }
        }
        catch(err){
                toast.error("invalid email or password")

                console.log(err.response)
        }

  }

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={loginUser} className="w-80 p-5 shadow rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-5">Login</h2>

        <label>Email</label>
        <input
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
          type="email"
          placeholder="Enter email"
          className="w-full border p-2 rounded mb-3"
        />

        <label>Password</label>
        <input
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
          type="password"
          placeholder="Enter password"
          className="w-full border p-2 rounded mb-4"
        />

        <button className="w-full bg-orange-600 text-white p-2 rounded">
          Login
        </button>
     <p className="text-blue-400 text-end text-sm">Not register yet ? <a href="/register">Register</a></p>
      </form>
    </div>
  );
};

export default Login;
