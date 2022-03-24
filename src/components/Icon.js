import "./icon.css";
const Icon = ({ onClick, MyIcon }) => {
    return (
        <div className="user-header-setting-container" onClick={onClick}>
            <MyIcon className="user-header-setting" />
        </div>
    );
};

export default Icon;
