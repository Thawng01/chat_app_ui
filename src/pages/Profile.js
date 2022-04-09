import { MdArrowBack } from "react-icons/md";
import { useLocation } from "react-router-dom";

import "./profile.css";
import Icon from "../components/Icon";
import useNavigation from "../hook/useNavigation";

import ProfileInfoContainer from "../components/profile/ProfileInfoContainer";
import useMyContext from "../hook/useMyContext";

const Profile = () => {
    const navigate = useNavigation();
    const { state } = useLocation();
    const { dark } = useMyContext();

    const handleNavigation = () => navigate(-1);

    return (
        <div
            className="profile-container"
            style={{ backgroundColor: dark ? "#000" : "#fff" }}
        >
            <div className="profile">
                <div className="profile-icon-container">
                    <Icon
                        MyIcon={MdArrowBack}
                        backgroundColor={dark ? "#333" : "#f1f1f1"}
                        onClick={handleNavigation}
                    />
                </div>

                <ProfileInfoContainer state={state} />
            </div>
        </div>
    );
};

export default Profile;
