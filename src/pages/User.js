import "./user.css";

import Users from "../components/user/Users";

const User = () => {
    return (
        <div className="user-container">
            <Users />
            <div className="user-chat-welcome">
                <span>Welcome to chat box</span>
            </div>
        </div>
    );
};

export default User;
