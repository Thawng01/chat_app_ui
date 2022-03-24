import { IoEllipsisVertical } from "react-icons/io5";
import { useContext } from "react";

import "./userListItem.css";
import UserToolModal from "./UserToolModal";
import SideContext from "../SideContext";
import useNavigation from "../../hook/useNavigation";

const UserListItem = ({ user, index }) => {
    const { activeIndex, setActiveIndex } = useContext(SideContext);
    const navigate = useNavigation();

    const handleNavigate = () => {
        navigate(`/chat/${user.name}`);
    };

    const handleRemove = () => {
        setActiveIndex(null);
    };

    return (
        <div className="user-list-item">
            <div className="user-list-item-container" onClick={handleNavigate}>
                <div className="user-list-item-img" />
                <div className="user-list-item-detail-container">
                    <span className="user-list-item-username">{user.name}</span>
                    <div className="user-list-item-message-container">
                        <span className="user-list-item-message">
                            {user.message.length > 30
                                ? user.message.slice(0, 30) + "..."
                                : user.message}
                        </span>
                        <span className="user-list-item-date">3hr</span>
                    </div>
                </div>
            </div>

            <IoEllipsisVertical
                className="user-list-dots-icon"
                onClick={() =>
                    setActiveIndex(index === activeIndex ? null : index)
                }
            />
            {index === activeIndex && <UserToolModal onRemove={handleRemove} />}
        </div>
    );
};

export default UserListItem;
