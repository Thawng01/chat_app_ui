import "./floatError.css";

const FloatError = ({ error, onDismiss }) => {
    if (!error) return null;

    if (error) setTimeout(() => onDismiss(), 3000);
    return (
        <div className="error">
            <span>{error}</span>
        </div>
    );
};

export default FloatError;
