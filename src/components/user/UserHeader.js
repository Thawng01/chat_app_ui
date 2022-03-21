import { IoSettingsOutline } from "react-icons/io5";

import "./userHeader.css";

const UserHeader = () => {
    return (
        <div className="user-header">
            <div className="user-header-img" />
            <div className="user-header-setting-container">
                <IoSettingsOutline className="user-header-setting" />
            </div>
        </div>
    );
};

export default UserHeader;
