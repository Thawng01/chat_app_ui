import { useState } from "react";
import AppRoutes from "./AppRoutes";
import Context from "./context/Context";

const App = () => {
    const [dark, setDark] = useState(false);

    return (
        <Context.Provider value={{ dark, setDark }}>
            <AppRoutes />
        </Context.Provider>
    );
};

export default App;
