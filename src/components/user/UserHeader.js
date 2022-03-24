import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import Modal from "../modal/Modal";

import "./userHeader.css";

const UserHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = (e) => {
        if (e.target.className === "user-header-modal-container") {
            setIsOpen(false);
        }
    };

    return (
        <div className="user-header">
            <div className="user-header-img" />
            <div
                className="user-header-setting-container"
                onClick={() => setIsOpen(!isOpen)}
            >
                <IoSettingsOutline className="user-header-setting" />
            </div>

            <Modal isOpen={isOpen} onCloseModal={handleCloseModal} />
        </div>
    );
};

export default UserHeader;
