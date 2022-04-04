import useMyContext from "../../hook/useMyContext";
import "./profileInfoItem.css";

const ProfileInfoItem = ({ label, value, Icon }) => {
    const { dark } = useMyContext();
    return (
        <div
            className="profile-info-item-container"
            style={{ backgroundColor: dark ? "#333" : "#f1f1f1" }}
        >
            <div className="profile-info-text">
                <p
                    className="profile-info-label"
                    style={{ color: dark ? "#fff" : "#000" }}
                >
                    {label}
                </p>
                <p
                    className="profile-info-value"
                    style={{ color: dark ? "lightgray" : "gray" }}
                >
                    {value}
                </p>
            </div>
            <Icon className="profile-info-item-icon" />
        </div>
    );
};

export default ProfileInfoItem;
