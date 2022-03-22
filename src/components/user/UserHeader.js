import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import Modal from "../modal/Modal";

import "./userHeader.css";

const UserHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="user-header">
            <div className="user-header-img" />
            <div
                className="user-header-setting-container"
                onClick={() => setIsOpen(!isOpen)}
            >
                <IoSettingsOutline className="user-header-setting" />
            </div>

            <Modal isOpen={isOpen} />
        </div>
    );
};

export default UserHeader;