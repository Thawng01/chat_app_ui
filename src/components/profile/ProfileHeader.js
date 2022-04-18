import { IoCamera } from "react-icons/io5";
import { useRef, memo, useState } from "react";

import "./profileHeader.css";
import Image from "../Image";
import useMyContext from "../../hook/useMyContext";
import { updateUserProfile } from "../../api/user";
import FloatError from "../FloatError";
import useToken from "../../hook/useToken";
import Loading from "../Loading";

const ProfileHeader = ({ user }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const me = useToken();
    const { dark } = useMyContext();
    const ref = useRef();

    const handleChooseImage = () => {
        ref.current.click();
    };

    const handleImageChange = async (e) => {
        try {
            setLoading(true);
            const avatar = e.target.files[0];
            await updateUserProfile(user._id, avatar);
            setLoading(false);
        } catch (error) {
            setError(error.response?.data);
            setLoading(false);
        }
    };

    const handleErrorDismiss = () => setError(null);

    return (
        <>
            <FloatError error={error} onDismiss={handleErrorDismiss} />
            <div className="profile-image-container">
                {loading ? (
                    <Loading />
                ) : (
                    <Image
                        width={"100%"}
                        height={"100%"}
                        avatar={user?.avatar}
                    />
                )}
                {me === user?._id && (
                    <span
                        className="profile-img-change-icon-container"
                        style={{
                            backgroundColor: dark
                                ? "rgba(225, 225, 225, 0.3)"
                                : "rgba(0,0,0,0.14)",
                        }}
                        onClick={handleChooseImage}
                    >
                        <input
                            onChange={handleImageChange}
                            ref={ref}
                            name="avatar"
                            type="file"
                            style={{ display: "none" }}
                        />
                        <IoCamera
                            style={{ color: dark ? "#fff" : "#000" }}
                            className="profile-img-change-icon"
                        />
                    </span>
                )}
            </div>
            <div className="profile-detail-container">
                <span
                    className="profile-username"
                    style={{ color: dark ? "#fff" : "#000" }}
                >
                    {user?.username}
                </span>
            </div>
        </>
    );
};

export default memo(ProfileHeader);
