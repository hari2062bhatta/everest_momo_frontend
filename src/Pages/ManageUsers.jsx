import { useEffect, useState } from "react";
import Api from "../config/Api";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const response = await Api.get("/api/user/view");
    setUsers(response.data.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex justify-center mt-10">
      {users?.length > 0 ? (
        <table className="border-collapse border border-gray-400 w-full max-w-5xl text-left">
          <thead>
            <tr>
              <th className="border border-gray-400 p-3">S.N</th>
              <th className="border border-gray-400 p-3">User Name</th>
              <th className="border border-gray-400 p-3">User Email</th>
              <th className="border border-gray-400 p-3">User Phone</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="border border-gray-400 p-3">{index + 1}</td>
                <td className="border border-gray-400 p-3">{user.fullName}</td>
                <td className="border border-gray-400 p-3">{user.email}</td>
                <td className="border border-gray-400 p-3">{user.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No Registered Users Yet</div>
      )}
    </div>
  );
};

export default ManageUsers;