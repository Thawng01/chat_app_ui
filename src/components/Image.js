import "./image.css";
const Image = ({ width = 40, height = 40, onClick }) => {
    return (
        <div
            style={{ width, height }}
            className="user-image"
            onClick={onClick}
        />
    );
};

export default Image;
