import "./icon.css";
const Icon = ({ onClick, MyIcon, backgroundColor = "#fff" }) => {
    return (
        <div
            style={{ backgroundColor }}
            className="user-header-setting-container"
            onClick={onClick}
        >
            <MyIcon className="user-header-setting" />
        </div>
    );
};

export default Icon;
