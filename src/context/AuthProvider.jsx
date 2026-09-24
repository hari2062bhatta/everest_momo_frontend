
import { createContext, useState, useEffect } from "react";
import Api from "../config/Api.jsx";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await Api.get("/api/user/profile");

      if (response.data.success) {
        setUser(response.data.data);
      }
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const login = (userData) => {
    console.log(userData)
    setUser(userData);
  };

  const logout = async () => {
    try {
      await Api.get("/api/user/logout");
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <authContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        setUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

