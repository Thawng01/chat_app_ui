import Icon from "../Icon";
import "./modalItem.css";

const ModalItem = ({ icon, title, RightIcon, onClick }) => {
    return (
        <div className="modal-item" onClick={onClick}>
            <div className="modal-item-container">
                {icon && <Icon MyIcon={icon} backgroundColor="#f1f1f1" />}
                <span>{title}</span>
            </div>
            {RightIcon && <RightIcon />}
        </div>
    );
};

export default ModalItem;
