import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

import "./userSearch.css";
import useMyContext from "../../hook/useMyContext";
const UserSearch = () => {
    const navigate = useNavigate();
    const { dark } = useMyContext();

    const handleFocus = () => navigate("/search");

    return (
        <div className="user-search">
            <div
                className="user-search-container"
                style={{ backgroundColor: dark ? "#000" : "#fff" }}
            >
                <IoSearch
                    className="user-search-icon"
                    style={{ color: dark ? "lightgray" : "gray" }}
                />
                <input
                    className="user-search-input"
                    placeholder="Search a friend"
                    onFocus={handleFocus}
                />
            </div>
        </div>
    );
};

export default UserSearch;
