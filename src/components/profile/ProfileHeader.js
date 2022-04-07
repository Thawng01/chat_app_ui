import { IoCamera } from "react-icons/io5";
import { useRef, useState, memo } from "react";

import "./profileHeader.css";
import Image from "../Image";
import useMyContext from "../../hook/useMyContext";
import { updateUserProfile } from "../../api/user";

const ProfileHeader = ({ user }) => {
    const [avatar, setAvatar] = useState();

    const { dark } = useMyContext();
    const ref = useRef();

    const handleChooseImage = () => {
        ref.current.click();
    };

    const handleImageChange = async (e) => {
        setAvatar(URL.createObjectURL(e.target.files[0]));
        try {
            await updateUserProfile(user._id, e.target.files[0]);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    return (
        <>
            <div className="profile-image-container">
                <Image width={"100%"} height={"100%"} avatar={user?.avatar} />
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
