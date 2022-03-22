import { MdAccountCircle, MdLogout, MdNoAccounts } from "react-icons/md";
import {
    IoSettingsOutline,
    IoArrowBackOutline,
    IoArrowForward,
    IoMoonOutline,
} from "react-icons/io5";
import { animated, config, useSpring } from "react-spring";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

import "./modal.css";
import ModalItem from "./ModalItem";
import ModalSubItem from "./ModalSubItem";

const Modal = ({ isOpen }) => {
    const [inProp, setInProp] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);

    const { left } = useSpring({
        left: isOpen ? 60 : -400,
        config: config.gentle,
    });

    function calcHeight(el) {
        const height = el.offsetHeight + 20;
        setMenuHeight(height);
    }

    return (
        <animated.div
            style={{ left, height: menuHeight }}
            className="user-header-modal"
        >
            <CSSTransition
                in={inProp === "main"}
                timeout={400}
                unmountOnExit
                classNames="main"
                onEnter={calcHeight}
            >
                <div className="main">
                    <ModalItem Icon={MdAccountCircle} title="Profile" />
                    <ModalItem
                        Icon={IoSettingsOutline}
                        title="Setting"
                        RightIcon={IoArrowForward}
                        onClick={() => setInProp("sub-main")}
                    />
                    <ModalItem Icon={MdLogout} title="Logout" />
                </div>
            </CSSTransition>

            <CSSTransition
                in={inProp === "sub-main"}
                timeout={400}
                unmountOnExit
                classNames="sub-main"
                onEnter={calcHeight}
            >
                <div className="sub-main">
                    <ModalItem
                        Icon={IoArrowBackOutline}
                        title="Back"
                        onClick={() => setInProp("main")}
                    />

                    <ModalSubItem Icon={IoMoonOutline} title="Change theme" />
                    <ModalSubItem
                        Icon={MdNoAccounts}
                        title="Disable your account"
                    />
                </div>
            </CSSTransition>
        </animated.div>
    );
};

export default Modal;
