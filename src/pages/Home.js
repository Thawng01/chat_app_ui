import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./home.css";
import Header from "../components/Header";
import SideContext from "../components/SideContext";

const Home = () => {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(null);
    const [myHome, setMyHome] = useState(location.key);

    return (
        <SideContext.Provider value={{ activeIndex, setActiveIndex }}>
            <Header />
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
