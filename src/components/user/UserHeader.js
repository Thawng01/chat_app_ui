import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";

import "./userHeader.css";
import UserModal from "../modal/UserModal";
import Icon from "../Icon";
import Image from "../Image";
import useMe from "../../hook/useMe";
import useMyContext from "../../hook/useMyContext";

const UserHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const me = useMe();
    const { dark } = useMyContext();

    const handleCloseModal = (e) => {
        if (e.target.className === "user-header-modal-container") {
            setIsOpen(false);
        }
    };

    const handleClick = () => setIsOpen(!isOpen);

    return (
        <div className="user-header">
            <div className="header-user-info">
                <Image avatar={me?.avatar} width={50} height={50} />
                <span
                    className="user-header-username"
                    style={{ color: dark ? "#fff" : "#000" }}
                >
                    {me?.username}
                </span>
            </div>
            <Icon
                MyIcon={IoSettingsOutline}
                onClick={handleClick}
                backgroundColor={dark ? "#000" : "#fff"}
            />

            <UserModal isOpen={isOpen} onCloseModal={handleCloseModal} />
        </div>
    );
};

export default UserHeader;
