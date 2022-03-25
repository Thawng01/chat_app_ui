import "./authHeader.css";
const AuthHeader = ({ onSignIn, onSignUp }) => {
    return (
        <div className="auth-header">
            <span className="auth-sign-in" onClick={onSignIn}>
                Sign in
            </span>
            <span className="auth-sign-up" onClick={onSignUp}>
                Sign up
            </span>
        </div>
    );
};

export default AuthHeader;
