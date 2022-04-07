import { useState } from "react";
import { Outlet } from "react-router-dom";

import "./home.css";
import SideContext from "../components/SideContext";
import useMyContext from "../hook/useMyContext";

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const { dark } = useMyContext();

    return (
        <SideContext.Provider value={{ activeIndex, setActiveIndex }}>
            <div
                className="home"
                style={{ backgroundColor: dark ? "#333" : "#f1f1f1" }}
            >
                <Outlet />
            </div>
        </SideContext.Provider>
    );
};

export default Home;
