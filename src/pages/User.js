import "./user.css";

import Users from "../components/user/Users";
import useMyContext from "../hook/useMyContext";

const User = () => {
    const { dark } = useMyContext();
    return (
        <div className="user-container">
            <Users />
            <div
                className="user-chat-welcome"
                style={{ backgroundColor: dark ? "#000" : "#fff" }}
            >
                <span
                    className="chat-box-welcome"
                    style={{ color: dark ? "#fff" : "#000" }}
                >
                    Welcome to chat box
                </span>
            </div>
        </div>
    );
};

export default User;
