import { CSSTransition } from "react-transition-group";

import ProfileInfo from "./ProfileInfo";
import ProfileEdit from "./ProfileEdit";

import "./profileInfoContainer.css";

const ProfileInfoContainer = ({ user, isEdit }) => {
    return (
        <div className="profile-info-container">
            <CSSTransition
                in={!isEdit}
                timeout={300}
                unmountOnExit
                classNames="profile-info"
            >
                <div className="profile-info">
                    <ProfileInfo user={user} />
                </div>
            </CSSTransition>

            <CSSTransition
                in={isEdit}
                timeout={300}
                unmountOnExit
                classNames="profile-edit"
            >
                <div className="profile-edit">
                    <ProfileEdit user={user} />
                </div>
            </CSSTransition>
        </div>
    );
};

export default ProfileInfoContainer;
