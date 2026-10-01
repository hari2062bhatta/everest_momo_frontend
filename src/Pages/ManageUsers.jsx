import { useEffect, useState } from "react";
import Api from "../config/Api";
import Swal from "sweetalert2"
const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateUser,setUpdateUser]=useState({
    fullName:"",
    email:" ",
    contact:" "
  })

  const getUser = async () => {
    const response = await Api.get("/api/user/view");
    setUsers(response.data.data);
  };
  const deleteUser = async (id) => {
    const response = await Api.delete(`/api/user/deleteuser/${id}`);
    console.log(response);
    getUser();
  };
const changeUser=(e)=>{  
    setUpdateUser({
        ...updateUser,[e.target.name]:e.target.value
    })
        // console.log(updateUser)
}
const updateUsers=async(e)=>{


     e.preventDefault()

     if(!updateUser.fullName.trim()|| !updateUser.email.trim() ||!updateUser.contact)  {
      return Swal.fire({
        title:"invalid user input ",
        text:" please fill valid user info",
        icon:"error"
      })
     }
    const response =await Api.put(`/api/user/updateuser/${updateUser._id}`,{
        fullName:updateUser.fullName,
        email:updateUser.email,
        contact:updateUser.contact
    })
    if(response.data.success){
      Swal.fire({
        title:"success",
        text:"user updated successfully",
        icon:"success"
      })
    }
    getUser()
}
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex justify-center mt-10 relative">
      
      {users?.length > 0 ? (

        <table className="border-collapse border border-gray-400 w-full max-w-5xl text-left">
          <thead>
            <tr>
              <th className="border border-gray-400 p-3">S.N</th>
              <th className="border border-gray-400 p-3">User Name</th>
              <th className="border border-gray-400 p-3">User Email</th>
              <th className="border border-gray-400 p-3">User Phone</th>
              <th className="border border-gray-400 p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="border border-gray-400 p-3">{index + 1}</td>
                <td className="border border-gray-400 p-3">{user.fullName}</td>
                <td className="border border-gray-400 p-3">{user.email}</td>
                <td className="border border-gray-400 p-3">{user.contact}</td>
                <td className="border border-gray-400 flex justify-center p-3 space-x-1">
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="bg-red-400 cursor-pointer text-sm p-2 rounded-xl w-15"
                  >
                    delete
                  </button>
                  <button
                    onClick={() =>{
                        setUpdateUser(user)
                         setIsUpdate(true)
                    }}
                    className="bg-green-400 cursor-pointer text-sm p-2 rounded-xl w-15 "
                  >
                    edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No Registered Users Yet</div>
      )}


            {
                isUpdate &&<div className="border absolute top-10 w-80 bg-gray-300 flex flex-col gap-3 ">
                    <h3 className="text-center">Update User information</h3>
                    <form  
                    onSubmit={(e)=>
                    {
                        updateUsers(e);
                        setIsUpdate(false)
                    }
                    }
                    className="h-80 justify-center p-1">
                        <label>UserName</label>
                        <input 
                        onChange={(e)=>changeUser(e)}
                        name="fullName"
                        value={updateUser.fullName}
                        
                        className="border w-full rounded-xl h-10 " type="text "></input>

                         <label>email</label>
                        <input
                        onChange={(e)=>{changeUser(e)}}
                        name="email"
                        value={updateUser.email}
                        className="border w-full rounded-xl h-10" type="text "></input>

                         <label>contact</label>
                        <input
                        onChange={(e)=>{changeUser(e)}}
                        name="contact"
                        value={updateUser.contact}
                        className="border w-full rounded-xl h-10" type="text "></input>
                         {/* <label>role</label>
                        <input className="border w-full rounded-xl h-10" type="text "></input> */}

                        <input className="bg-green-400 w-50 ml-12 rounded-xl border p-2 text-sm m-4" type="submit" valule ="update"></input>
                    </form>
                </div>
            }

    </div>
  );
};

export default ManageUsers;
