import Icon from "../Icon";
import "./modalItem.css";
import useMyContext from "../../hook/useMyContext";

const ModalItem = ({ icon, title, RightIcon, onClick }) => {
    const { dark } = useMyContext();
    return (
        <div className="modal-item" onClick={onClick}>
            <div className="modal-item-container">
                {icon && (
                    <Icon
                        MyIcon={icon}
                        backgroundColor={dark ? "#333" : "#f1f1f1"}
                    />
                )}
                <span style={{ color: dark ? "#fff" : "#000" }}>{title}</span>
            </div>
            {RightIcon && (
                <RightIcon style={{ color: dark ? "#fff" : "#000" }} />
            )}
        </div>
    );
};

export default ModalItem;
