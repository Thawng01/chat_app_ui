import { useState } from "react";
import { Outlet } from "react-router-dom";

import "./home.css";
import SideContext from "../components/SideContext";

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <SideContext.Provider value={{ activeIndex, setActiveIndex }}>
            <div className="home">
                <Outlet />
            </div>
        </SideContext.Provider>
    );
};

export default Home;
