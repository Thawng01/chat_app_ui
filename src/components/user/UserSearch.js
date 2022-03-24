import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

import "./userSearch.css";
const UserSearch = () => {
    const navigate = useNavigate();
    const handleFocus = () => navigate("/search");

    return (
        <div className="user-search">
            <div className="user-search-container">
                <IoSearch className="user-search-icon" />
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
