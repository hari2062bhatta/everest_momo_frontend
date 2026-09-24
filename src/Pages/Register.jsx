import toast from "react-hot-toast";
import { useState } from "react";
import Api from "../config/Api.jsx";
const Register = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    contact: "",
  });

  const getData = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const createUser = async (e) => {
    e.preventDefault();

    if (!user.fullName.trim() || !user.email.trim() || !user.password.trim()) {
      toast.error("fill all  input field ");
    }

    try {
      const response = await Api.post("/api/user/create", user);
      if (response.data.success) {
        toast.success("user register successfully");
      }
      setUser({
        fullName: "",
        email: "",
        password: "",
        contact: "",
      });
    } catch (err) {}
  };

  return (
    <div className="flex  justify-center mt-10">
      <form onSubmit={createUser} className="w-80 p-5 shadow rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-5">Register</h2>

        <label>Full Name</label>
        <input
          onChange={getData}
          name="fullName"
          value={user.fullName}
          type="text"
          placeholder="Enter fullname"
          className="w-full border p-2 rounded mb-3"
        />

        <label>Email</label>
        <input
          onChange={getData}
          name="email"
          value={user.email}
          type="email"
          placeholder="Enter email"
          className="w-full border p-2 rounded mb-3"
        />

        <label>Password</label>
        <input
          onChange={getData}
          name="password"
          value={user.password}
          type="password"
          placeholder="Enter password"
          className="w-full border p-2 rounded mb-3"
        />

        <label>Contact</label>
        <input
          onChange={getData}
          name="contact"
          value={user.contact}
          type="number"
          placeholder="Enter phone number"
          className="w-full border p-2 rounded mb-4"
        />

        <button className="w-full bg-orange-600 text-white p-2 rounded">
          Register
        </button>

        <p className="text-blue-400 text-end">
          Already register? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
