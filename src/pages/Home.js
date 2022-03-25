import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./home.css";
import SideContext from "../components/SideContext";

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const location = useLocation();

    return (
        <SideContext.Provider value={{ activeIndex, setActiveIndex }}>
            <TransitionGroup component={null}>
                <CSSTransition
                    key={location.key}
                    timeout={400}
                    unmountOnExit
                    classNames="my-home"
                >
                    <div className="home">
                        <Outlet />
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </SideContext.Provider>
    );
};

export default Home;
