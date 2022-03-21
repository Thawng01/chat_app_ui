import MyContext from "./components/Context";
import AppRoutes from "./AppRoutes";
import { useState } from "react";

const App = () => {
    const [isSmall, setIsSmall] = useState(false);

    return (
        <MyContext.Provider value={{ isSmall, setIsSmall }}>
            <AppRoutes />
        </MyContext.Provider>
    );
};

export default App;
