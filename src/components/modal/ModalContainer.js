import { animated, config, useSpring } from "react-spring";

import "./modalContainer.css";
import useMyContext from "../../hook/useMyContext";

function ModalContainer({
    children,
    menuHeight,
    isOpen,
    onCloseModal,
    width = "85%",
}) {
    const { top } = useSpring({
        top: isOpen ? 0 : -850,
        config: config.gentle,
    });

    const { dark } = useMyContext();

    return (
        <animated.div
            style={{ top }}
            className="user-header-modal-container"
            onClick={(e) => onCloseModal(e)}
        >
            <animated.div
                style={{
                    height: menuHeight,
                    width,
                    backgroundColor: dark ? "#000" : "#fff",
                }}
                className="user-header-modal"
            >
                {children}
            </animated.div>
        </animated.div>
    );
}

export default ModalContainer;
