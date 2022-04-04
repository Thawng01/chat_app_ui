import { MdAccountCircle } from "react-icons/md";

import "./image.css";

const Image = ({ width = 40, height = 40, avatar, onClick }) => {
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
            style={{ width, height }}
            alt="profile"
            className="user-image"
            onClick={onClick}
        />
    );
};

export default Image;
