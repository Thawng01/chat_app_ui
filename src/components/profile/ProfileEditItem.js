import React from "react";
import useMyContext from "../../hook/useMyContext";

import "./profileEditItem.css";

const ProfileEditItem = ({ Icon, value, label, placeholder, onChange }) => {
    const { dark } = useMyContext();
    return (
        <div className="form-groups-container">
            <div className="form-groups">
                <span
                    className="profile-edit-label"
                    style={{ color: dark ? "#fff" : "#000" }}
                >
                    {label}
                </span>
                <input
                    className="profile-edit-form-input"
                    style={{ color: dark ? "lightgray" : "gray" }}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
            <Icon className="profile-edit-icon" />
        </div>
    );
};

export default ProfileEditItem;
