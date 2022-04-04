import { IoArrowBack, IoEllipsisVertical } from "react-icons/io5";

import "./chatHeader.css";
import useNavigation from "../../hook/useNavigation";
import Icon from "../Icon";
import Image from "../Image";
import useMyContext from "../../hook/useMyContext";

const BackArrow = ({ username, avatar, onIsOpen }) => {
    const navigate = useNavigation();
    const { dark } = useMyContext();
    const backgroundColor = dark ? "#000" : "#fff";

    const handleNavigate = () => navigate(-1);

    return (
        <div
            className="back-arrow"
            style={{ backgroundColor: dark ? "#333" : "#f1f1f1" }}
        >
            <div className="back-arrow-left">
                <div className="chat-header-back-icon-container">
                    <Icon
                        MyIcon={IoArrowBack}
                        onClick={handleNavigate}
                        backgroundColor={backgroundColor}
                    />
                </div>
                <Image avatar={avatar} />
                <span
                    className="chat-active-username"
                    style={{ color: dark ? "#fff" : "#000" }}
                >
                    {username}
                </span>
            </div>
            <Icon
                MyIcon={IoEllipsisVertical}
                onClick={onIsOpen}
                backgroundColor={backgroundColor}
            />
        </div>
    );
};

export default BackArrow;
