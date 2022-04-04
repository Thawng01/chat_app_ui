import { useContext } from "react";
import { IoMoonOutline } from "react-icons/io5";

import "./modalSubItem.css";
import Icon from "../Icon";
import Context from "../../context/Context";

const ModalSubItem = ({ title, onToggle }) => {
    // share style with modal item
    const { dark } = useContext(Context);
    return (
        <div className="modal-item" onClick={onToggle}>
            <div className="modal-item-container">
                <Icon
                    MyIcon={IoMoonOutline}
                    backgroundColor={dark ? "#333" : "#f1f1f1"}
                />
                <span>{title}</span>
            </div>
            <div
                className="toggle"
                style={{ backgroundColor: dark ? "#ff0080" : "#fff" }}
            >
                <span
                    className="toggle-label"
                    style={{
                        color: dark ? "#fff" : "#000",
                        opacity: dark ? 1 : 0,
                    }}
                >
                    on
                </span>
                <span
                    className="toggle-label"
                    style={{ opacity: dark ? 0 : 1 }}
                >
                    off
                </span>
            </div>
        </div>
    );
};

export default ModalSubItem;
