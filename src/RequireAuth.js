import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const token = localStorage.getItem("token");
    return <>{token !== null ? children : <Navigate to="/auth" />}</>;
};

export default RequireAuth;
