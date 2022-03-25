import { MdAccountCircle } from "react-icons/md";

import "./image.css";

const Image = ({ width = 40, height = 40, onClick }) => {
    return (
        <MdAccountCircle
            style={{ width, height }}
            className="user-image"
            onClick={onClick}
        />
    );
};

export default Image;
