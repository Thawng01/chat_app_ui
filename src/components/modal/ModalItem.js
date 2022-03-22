import "./modalItem.css";

const ModalItem = ({ Icon, title, RightIcon, onClick }) => {
    return (
        <div className="user-header-modal-item" onClick={onClick}>
            <div className="user-header-modal-icon-container">
                <div className="user-header-modal-icon-inner-container">
                    <Icon className="user-header-modal-icon" />
                </div>
                <span>{title}</span>
            </div>
            {RightIcon && <RightIcon />}
        </div>
    );
};

export default ModalItem;
