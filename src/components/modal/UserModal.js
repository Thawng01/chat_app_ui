import { MdAccountCircle, MdLogout } from "react-icons/md";
import {
    IoSettingsOutline,
    IoArrowBackOutline,
    IoArrowForward,
} from "react-icons/io5";
import { CSSTransition } from "react-transition-group";
import { useContext, useState } from "react";

import "./userModal.css";
import ModalItem from "./ModalItem";
import ModalSubItem from "./ModalSubItem";
import ModalContainer from "./ModalContainer";
import useNavigation from "../../hook/useNavigation";
import useToken from "../../hook/useToken";
import Context from "../../context/Context";

const UserModal = ({ isOpen, onCloseModal }) => {
    const [inProp, setInProp] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);

    const navigate = useNavigation();
    const me = useToken();
    const { dark, setDark } = useContext(Context);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/auth");
    };

    const handleNavigation = () => {
        navigate("/profile", { state: me });
    };

    function calcHeight(el) {
        const height = el.offsetHeight + 20;
        setMenuHeight(height);
    }

    const handleToggleTheme = () => setDark(!dark);

    const handleCloseModal = (e) => {
        onCloseModal(e);
    };

    return (
        <ModalContainer
            menuHeight={menuHeight}
            isOpen={isOpen}
            onCloseModal={handleCloseModal}
        >
            <CSSTransition
                in={inProp === "main"}
                timeout={400}
                unmountOnExit
                classNames="main"
                onEnter={calcHeight}
            >
                <div className="main">
                    <ModalItem
                        icon={MdAccountCircle}
                        title="Profile"
                        onClick={handleNavigation}
                    />
                    <ModalItem
                        icon={IoSettingsOutline}
                        title="Setting"
                        RightIcon={IoArrowForward}
                        onClick={() => setInProp("sub-main")}
                    />
                    <ModalItem
                        icon={MdLogout}
                        title="Logout"
                        onClick={handleLogout}
                    />
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
                        icon={IoArrowBackOutline}
                        title="Back"
                        onClick={() => setInProp("main")}
                    />

                    <ModalSubItem
                        title="Change theme"
                        onToggle={handleToggleTheme}
                    />
                </div>
            </CSSTransition>
        </ModalContainer>
    );
};

export default UserModal;
