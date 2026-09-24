import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../context/AuthProvider.jsx";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useContext(authContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;