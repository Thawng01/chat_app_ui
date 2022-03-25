import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";

import "./userHeader.css";
import UserModal from "../modal/UserModal";
import Icon from "../Icon";
import Image from "../Image";

const UserHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = (e) => {
        if (e.target.className === "user-header-modal-container") {
            setIsOpen(false);
        }
    };

    const handleClick = () => setIsOpen(!isOpen);

    return (
        <div className="user-header">
            <Image width={60} height={60} />
            <Icon MyIcon={IoSettingsOutline} onClick={handleClick} />

            <UserModal isOpen={isOpen} onCloseModal={handleCloseModal} />
        </div>
    );
};

export default UserHeader;
