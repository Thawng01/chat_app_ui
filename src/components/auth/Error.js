import "./error.css";

const Error = ({ error, visible }) => {
    if (!visible || !error) return null;
    return <span className="auth-validation-error">{error}</span>;
};

export default Error;
