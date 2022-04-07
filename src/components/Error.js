import "./error.css";

const Error = ({ error }) => {
    if (!error) return null;
    return (
        <div className="error">
            <span>{error}</span>
        </div>
    );
};

export default Error;
