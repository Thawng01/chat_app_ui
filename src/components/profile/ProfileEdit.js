import React, { useState } from "react";
import { MdAccountCircle, MdEmail, MdHome, MdPhone } from "react-icons/md";

import "./profileEdit.css";
import ProfileEditItem from "./ProfileEditItem";
import Button from "./Button";
import { updateUserInfo } from "../../api/user";
import { IoLinkOutline } from "react-icons/io5";

const ProfileEdit = ({ user }) => {
    const [username, setUsername] = useState(user?.username);
    const [email, setEmail] = useState(user?.email);
    const [phone, setPhone] = useState(user?.phone);
    const [website, setWebsite] = useState(user?.website);
    const [address, setAddress] = useState(user?.address);

    const handleNameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleWebsiteChange = (e) => setWebsite(e.target.value);
    const handleAddressChange = (e) => setAddress(e.target.value);

    const handleSaveChange = async (e) => {
        e.preventDefault();
        const info = {
            username,
            email,
            phone,
            website,
            address,
        };
        await updateUserInfo(user._id, info);
    };

    return (
        <div className="profile-edit-container">
            <form className="profile-edit-form">
                <ProfileEditItem
                    Icon={MdAccountCircle}
                    label="Username"
                    value={username}
                    onChange={handleNameChange}
                />
                <ProfileEditItem
                    Icon={MdEmail}
                    label="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <ProfileEditItem
                    Icon={MdPhone}
                    label="Phone"
                    value={phone}
                    placeholder="No phone number provided"
                    onChange={handlePhoneChange}
                />
                <ProfileEditItem
                    Icon={IoLinkOutline}
                    label="Website"
                    value={website}
                    placeholder="No phone website provided"
                    onChange={handleWebsiteChange}
                />
                <ProfileEditItem
                    Icon={MdHome}
                    label="Home"
                    value={address}
                    placeholder="No phone address provided"
                    onChange={handleAddressChange}
                />
                <div className="profile-edit-btn-container">
                    <Button title="Save changes" onClick={handleSaveChange} />
                </div>
            </form>
        </div>
    );
};

export default ProfileEdit;
