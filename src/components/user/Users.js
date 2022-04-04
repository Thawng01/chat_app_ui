import { useLocation } from "react-router-dom";

import "./users.css";
import UserHeader from "./UserHeader";
import UserSearch from "./UserSearch";
import UserList from "./UserList";
import useDimension from "../../hook/useDimension";
import useSideContext from "../../hook/useSideContext";
import useMyContext from "../../hook/useMyContext";

const Users = () => {
    const location = useLocation();
    const widthDimension = useDimension();
    const { setActiveIndex, activeIndex } = useSideContext();
    const { dark } = useMyContext();

    let path = location.pathname.includes("chat");

    const handleRemove = () => {
        if (activeIndex !== null) {
            setActiveIndex(null);
        }
    };

    return (
        <div
            className="user"
            style={{
                display: widthDimension <= 900 && path ? "none" : "flex",
                backgroundColor: dark ? "#333" : "#f1f1f1",
            }}
            onClick={handleRemove}
        >
            <UserHeader />
            <div className="user-header-body-wrapper">
                <UserSearch />
                <UserList />
            </div>
        </div>
    );
};

export default Users;
