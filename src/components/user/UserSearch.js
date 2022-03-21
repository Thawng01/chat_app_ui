import React from "react";
import { IoSearch } from "react-icons/io5";

import "./userSearch.css";
const UserSearch = () => {
    return (
        <div className="user-search">
            <div className="user-search-container">
                <IoSearch className="user-search-icon" />
                <input
                    className="user-search-input"
                    placeholder="Search a friend"
                />
            </div>
        </div>
    );
};

export default UserSearch;
