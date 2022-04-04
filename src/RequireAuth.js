import { Navigate } from "react-router-dom";
import useMyContext from "./hook/useMyContext";

const RequireAuth = ({ children }) => {
    const { auth } = useMyContext();

    return <>{auth !== null ? children : <Navigate to="/auth" />}</>;
};

export default RequireAuth;
