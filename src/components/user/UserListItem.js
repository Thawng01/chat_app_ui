import { useNavigate } from "react-router-dom";

import "./userListItem.css";

const UserListItem = ({ user }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`chat/${user.name}`);
    };

    return (
        <div className="user-list-item" onClick={handleNavigate}>
            <img className="user-list-item-img" alt="user-list" />
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
    );
};

export default UserListItem;
