import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useMyContext from "./useMyContext";
import apiClient from "../api/apiClient";

const useAuth = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { setAuth } = useMyContext();

    const navigate = useNavigate();

    async function authenticate(info, register) {
        try {
            setLoading(true);
            setTimeout(async () => {
                let result;
                if (register) {
                    result = await apiClient.post("/user/new", info);
                } else {
                    result = await apiClient.post("auth", info);
                }
                localStorage.setItem("token", result.data);
                setAuth(result.data);
                setLoading(false);
                navigate("/", { replace: true });
            }, 3000);
        } catch (error) {
            setError(error.response.data);
            setLoading(false);
        }
    }

    return { authenticate, error, loading };
};

export default useAuth;
