import {
    MdAccountCircle,
    MdEmail,
    MdHome,
    MdPhone,
    MdWallpaper,
} from "react-icons/md";

import ProfileInfoItem from "./ProfileInfoItem";

const ProfileInfo = ({ user }) => {
    return (
        <>
            <ProfileInfoItem
                label="Username"
                value={user?.username}
                Icon={MdAccountCircle}
            />
            <ProfileInfoItem label="Email" value={user?.email} Icon={MdEmail} />
            <ProfileInfoItem
                label="Phone"
                value={user?.phone ? user?.phone : "No phone number provided"}
                Icon={MdPhone}
            />
            <ProfileInfoItem
                label="Website"
                value={user?.website ? user?.website : "No website provided"}
                Icon={MdWallpaper}
            />
            <ProfileInfoItem
                label="Home"
                value={user?.address ? user?.address : "No address provided"}
                Icon={MdHome}
            />
        </>
    );
};

export default ProfileInfo;
