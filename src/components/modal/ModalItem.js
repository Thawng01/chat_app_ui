import "./modalItem.css";

const ModalItem = ({ Icon, title, RightIcon, onClick }) => {
    return (
        <div className="modal-item" onClick={onClick}>
            <div className="modal-item-container">
                <div className="modal-item-icon-container">
                    <Icon className="modal-item-icon" />
                </div>
                <span>{title}</span>
            </div>
            {RightIcon && <RightIcon />}
        </div>
    );
};

export default ModalItem;
