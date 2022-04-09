import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./profileInfoContainer.css";
import ProfileInfo from "./ProfileInfo";
import ProfileEdit from "./ProfileEdit";
import { source } from "../../api/apiClient";
import useUser from "../../hook/useUser";
import useToken from "../../hook/useToken";
import ProfileHeader from "./ProfileHeader";
import Button from "./Button";

const ProfileInfoContainer = ({ state }) => {
    const [edit, setEdit] = useState(false);

    const { getUser, user } = useUser();
    const me = useToken();

    useEffect(() => {
        if (state) {
            getUser(state);
        }
        return () => source.cancel();
    }, [state, getUser]);

    const handleEdit = () => setEdit(!edit);

    return (
        <>
            <ProfileHeader user={user} />
            {me === state && (
                <Button
                    title={edit ? "Return to profile" : "Edit your infos"}
                    onClick={handleEdit}
                />
            )}
            <div className="profile-info-container">
                <CSSTransition
                    in={!edit}
                    timeout={300}
                    unmountOnExit
                    classNames="profile-info"
                >
                    <div className="profile-info">
                        <ProfileInfo user={user} />
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={edit}
                    timeout={300}
                    unmountOnExit
                    classNames="profile-edit"
                >
                    <div className="profile-edit">
                        <ProfileEdit user={user} onReturn={handleEdit} />
                    </div>
                </CSSTransition>
            </div>
        </>
    );
};

export default ProfileInfoContainer;
