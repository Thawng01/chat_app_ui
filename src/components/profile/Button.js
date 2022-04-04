import "./button.css";
const Button = ({ title, onClick }) => {
    return (
        <button className="profile-info-btn" onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;
