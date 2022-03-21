import { useLocation } from "react-router-dom";
import "./user.css";
import UserHeader from "../components/user/UserHeader";
import UserSearch from "../components/user/UserSearch";
import UserList from "../components/user/UserList";
import useDimension from "../hook/useDimension";

const User = () => {
    const location = useLocation();
    const widthDimension = useDimension();
    let getPath = location.pathname.includes("chat");

    return (
        <div
            className="user"
            style={{
                display: widthDimension <= 900 && getPath ? "none" : "",
            }}
        >
            <UserHeader />
            <UserSearch />
            <UserList />
        </div>
    );
};

export default User;
