import React from "react";

import "./userToolModal.css";

const UserToolModal = ({ onRemove }) => {
    return (
        <div className="user-modal">
            <span className="user-modal-text" onClick={onRemove}>
                Remove
            </span>
        </div>
    );
};

export default UserToolModal;
