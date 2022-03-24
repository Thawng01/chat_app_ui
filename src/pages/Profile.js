import { MdArrowBack } from "react-icons/md";

import "./profile.css";
import Icon from "../components/Icon";
import useNavigation from "../hook/useNavigation";
import Image from "../components/Image";

const Profile = () => {
    const navigate = useNavigation();

    const handleNavigation = () => navigate(-1);

    return (
        <div className="profile-container">
            <div className="profile">
                <div className="profile-icon-container">
                    <Icon MyIcon={MdArrowBack} onClick={handleNavigation} />
                </div>
                <Image width={80} height={80} />
                <div className="profile-detail-container">
                    <span className="profile-username">
                        Salai Lian Cung Thawng
                    </span>
                    <span className="profile-joined-date">
                        Joined : 20 days ago
                    </span>
                </div>

                <button className="profile-message-btn">Message</button>
            </div>
        </div>
    );
};

export default Profile;
