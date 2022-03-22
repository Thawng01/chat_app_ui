import React from "react";

import "./modalItem.css";
import "./modalSubItem.css";

const ModalSubItem = ({ item, onToggle }) => {
    // share style with modal item
    let status = item.status;
    return (
        <div className="modal-item" onClick={onToggle}>
            <div className="modal-item-container">
                <div className="modal-item-icon-container">
                    <item.icon className="modal-item-icon" />
                </div>
                <span>{item.title}</span>
            </div>
            <div
                className="toggle"
                style={{ backgroundColor: status ? "#ff0080" : "#fff" }}
            >
                <span
                    className="toggle-label"
                    style={{
                        color: status ? "#fff" : "#000",
                        opacity: status ? 1 : 0,
                    }}
                >
                    on
                </span>
                <span
                    className="toggle-label"
                    style={{ opacity: status ? 0 : 1 }}
                >
                    off
                </span>
            </div>
        </div>
    );
};

export default ModalSubItem;
