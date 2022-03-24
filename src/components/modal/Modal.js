import { MdAccountCircle, MdLogout } from "react-icons/md";
import {
    IoSettingsOutline,
    IoArrowBackOutline,
    IoArrowForward,
} from "react-icons/io5";

import { CSSTransition } from "react-transition-group";
import { useState } from "react";

import "./modal.css";
import ModalItem from "./ModalItem";
import ModalSubItem from "./ModalSubItem";
import { items } from "./item";
import ModalContainer from "./ModalContainer";

const Modal = ({ isOpen, onCloseModal }) => {
    const [inProp, setInProp] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);
    const [data, setData] = useState(items);

    function calcHeight(el) {
        const height = el.offsetHeight + 20;
        setMenuHeight(height);
    }

    const handleToggle = (item) => {
        const { id } = item;
        const element = data.find((item) => item.id === id);
        let status = element.status;
        if (status === true) {
            element.status = false;
        } else {
            element.status = true;
        }
        setData((item) => [...item]);
    };

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

                    {data.map((item) => {
                        return (
                            <ModalSubItem
                                key={item.id}
                                item={item}
                                onToggle={() => handleToggle(item)}
                            />
                        );
                    })}
                </div>
            </CSSTransition>
        </ModalContainer>
    );
};

export default Modal;
