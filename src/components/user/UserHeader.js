import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";

import "./userHeader.css";
import UserModal from "../modal/UserModal";
import Icon from "../Icon";
import Image from "../Image";
import useMyContext from "../../hook/useMyContext";
import useUser from "../../hook/useUser";
import useToken from "../../hook/useToken";

const UserHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const me = useToken();
    const { user, error } = useUser(me);
    const { dark } = useMyContext();

    const handleCloseModal = (e) => {
        if (e.target.className === "user-header-modal-container") {
            setIsOpen(false);
        }
    };

    const handleClick = () => setIsOpen(!isOpen);

    let content;
    if (error) {
        content = <span>{error}</span>;
    } else {
        content = (
            <>
                <div className="header-user-info">
                    <Image avatar={user?.avatar} width={50} height={50} />
                    <span
                        className="user-header-username"
                        style={{ color: dark ? "#fff" : "#000" }}
                    >
                        {user?.username}
                    </span>
                </div>
                <Icon
                    MyIcon={IoSettingsOutline}
                    onClick={handleClick}
                    backgroundColor={dark ? "#000" : "#fff"}
                />

                <UserModal isOpen={isOpen} onCloseModal={handleCloseModal} />
            </>
        );
    }

    return <div className="user-header">{content}</div>;
};

export default UserHeader;
