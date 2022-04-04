import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

// this is current logged-in user jwt token sent from server
// and decoded token
const useToken = () => {
    const [token, setToken] = useState();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const decoded = jwtDecode(token);
        setToken(decoded.id);
    }, []);

    return token;
};

export default useToken;
