import { IoArrowBack, IoEllipsisVertical } from "react-icons/io5";

import "./chatHeader.css";
import useNavigation from "../../hook/useNavigation";
import Icon from "../Icon";
import Image from "../Image";

const BackArrow = ({ onIsOpen }) => {
    const navigate = useNavigation();

    const handleNavigate = () => navigate(-1);

    return (
        <div className="back-arrow">
            <div className="back-arrow-left">
                <div className="chat-header-back-icon-container">
                    <Icon MyIcon={IoArrowBack} onClick={handleNavigate} />
                </div>
                <Image />
                <span className="chat-active-username">Lian</span>
            </div>
            <Icon MyIcon={IoEllipsisVertical} onClick={onIsOpen} />
        </div>
    );
};

export default BackArrow;
