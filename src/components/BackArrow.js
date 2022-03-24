import { IoArrowBack, IoEllipsisVertical } from "react-icons/io5";

import "./backarrow.css";
import useNavigation from "../hook/useNavigation";

const BackArrow = ({ onIsOpen }) => {
    const navigate = useNavigation();

    const handleNavigate = () => navigate(-1);

    return (
        <div className="back-arrow">
            <div className="back-arrow-left">
                <IoArrowBack
                    className="back-arrow-icon"
                    onClick={handleNavigate}
                />
                <div className="chat-active-user-img" />
                <span className="chat-active-username">Lian</span>
            </div>
            <IoEllipsisVertical className="back-dot-icon" onClick={onIsOpen} />
        </div>
    );
};

export default BackArrow;
