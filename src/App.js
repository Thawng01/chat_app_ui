import { useEffect, useState } from "react";
import AppRoutes from "./AppRoutes";
import Context from "./context/Context";

const App = () => {
    const [auth, setAuth] = useState(false);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setAuth(true);
        }
    }, [setAuth]);

    return (
        <Context.Provider value={{ auth, dark, setDark, setAuth }}>
            <AppRoutes />
        </Context.Provider>
    );
};

export default App;
