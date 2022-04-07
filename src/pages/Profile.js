import { MdArrowBack } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./profile.css";
import Icon from "../components/Icon";
import useNavigation from "../hook/useNavigation";
import useUser from "../hook/useUser";
import useToken from "../hook/useToken";
import ProfileInfoContainer from "../components/profile/ProfileInfoContainer";
import Button from "../components/profile/Button";
import useMyContext from "../hook/useMyContext";
import ProfileHeader from "../components/profile/ProfileHeader";
import { source } from "../api/apiClient";

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
        return () => source.cancel();
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
                <ProfileHeader user={user} />
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
