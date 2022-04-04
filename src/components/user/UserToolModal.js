import React from "react";
import useMyContext from "../../hook/useMyContext";

import "./userToolModal.css";

const UserToolModal = ({ onRemove }) => {
    const { dark } = useMyContext();
    return (
        <div
            className="user-modal"
            style={{ backgroundColor: dark ? "#000" : "#fff" }}
        >
            <span
                className="user-modal-text"
                style={{ color: dark ? "#fff" : "#000" }}
                onClick={onRemove}
            >
                Remove
            </span>
        </div>
    );
};

export default UserToolModal;
