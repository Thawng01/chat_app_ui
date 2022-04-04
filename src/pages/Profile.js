import { MdArrowBack } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";

import "./profile.css";
import Icon from "../components/Icon";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import useNavigation from "../hook/useNavigation";
import Image from "../components/Image";
import formatDate from "../components/formatDate";
import useUser from "../hook/useUser";
import useToken from "../hook/useToken";
import ProfileInfoContainer from "../components/profile/ProfileInfoContainer";
import Button from "../components/profile/Button";
import useMyContext from "../hook/useMyContext";

const Profile = () => {
    const [edit, setEdit] = useState(false);
    const navigate = useNavigation();

    const { state } = useLocation();
    const { getUser, user } = useUser();
    const me = useToken();
    const { dark } = useMyContext();

    useEffect(() => {
        if (state) {
            getUser(state);
        }
    }, [state, getUser]);

    const handleNavigation = () => navigate(-1);
    const handleEdit = () => setEdit(!edit);

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
                <Image width={100} height={100} avatar={user?.avatar} />
                <div className="profile-detail-container">
                    <span
                        className="profile-username"
                        style={{ color: dark ? "#fff" : "#000" }}
                    >
                        {user?.username}
                    </span>
                    <span className="profile-joined-date">
                        <span style={{ color: dark ? "lightgray" : "gray" }}>
                            Joined : {formatDate(user?.joinedAt)}{" "}
                        </span>
                        <FcCalendar />
                    </span>
                </div>

                {me === state && (
                    <Button
                        title={edit ? "Return to profile" : "Edit your infos"}
                        onClick={handleEdit}
                    />
                )}

                <ProfileInfoContainer user={user} isEdit={edit} />
            </div>
        </div>
    );
};

export default Profile;
