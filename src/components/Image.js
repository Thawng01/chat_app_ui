import { memo } from "react";

import { MdAccountCircle } from "react-icons/md";

import "./image.css";

const Image = ({ width = 30, height = 30, avatar, onClick }) => {
    if (!avatar) {
        return (
            <MdAccountCircle
                style={{ width, height }}
                className="user-image"
                onClick={onClick}
            />
        );
    }

    return (
        <img
            src={avatar}
            style={{ width, height }}
            alt="profile"
            className="user-image"
            onClick={onClick}
        />
    );
};

export default memo(Image);
