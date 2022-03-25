import { useFormikContext } from "formik";
import "./authButton.css";

const AuthButton = ({ text }) => {
    const { handleSubmit } = useFormikContext();
    return (
        <button
            className="auth-submit-btn"
            onClick={handleSubmit}
            type="submit"
        >
            {text}
        </button>
    );
};

export default AuthButton;
