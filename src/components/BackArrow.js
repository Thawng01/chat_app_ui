import { IoArrowBack, IoEllipsisVertical } from "react-icons/io5";

import "./backarrow.css";
import useNavigation from "../hook/useNavigation";
import Icon from "./Icon";
import Image from "./Image";

const BackArrow = ({ onIsOpen }) => {
    const navigate = useNavigation();

    const handleNavigate = () => navigate(-1);

    return (
        <div className="back-arrow">
            <div className="back-arrow-left">
                <Icon MyIcon={IoArrowBack} onClick={handleNavigate} />
                <Image />
                <span className="chat-active-username">Lian</span>
            </div>
            <IoEllipsisVertical className="back-dot-icon" onClick={onIsOpen} />
        </div>
    );
};

export default BackArrow;
