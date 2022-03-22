import { useNavigate } from "react-router-dom";
import { IoEllipsisVertical } from "react-icons/io5";

import "./userListItem.css";

const UserListItem = ({ user, index }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`chat/${user.name}`);
    };

    return (
        <div className="user-list-item" onClick={handleNavigate}>
            <div className="user-list-item-container">
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

            <IoEllipsisVertical className="user-list-dots-icon" />
        </div>
    );
};

export default UserListItem;
