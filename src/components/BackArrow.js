import React from "react";
import { IoArrowBack, IoEllipsisVertical } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import "./backarrow.css";

const BackArrow = () => {
    const navigate = useNavigate();

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
            <IoEllipsisVertical className="back-dot-icon" />
        </div>
    );
};

export default BackArrow;
