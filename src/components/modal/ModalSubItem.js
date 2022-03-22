import React from "react";

import "./modalSubItem.css";
import ModalItem from "./ModalItem";
import Toggle from "../Toggle";

const ModalSubItem = ({ Icon, title }) => {
    return (
        <div className="modal-sub-item">
            <ModalItem Icon={Icon} title={title} />
            <Toggle />
        </div>
    );
};

export default ModalSubItem;
