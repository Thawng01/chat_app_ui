import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./auth.css";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import AuthHeader from "../components/auth/AuthHeader";

const Auth = () => {
    const [isRegister, setIsRegister] = useState(false);

    const handleSignUp = () => setIsRegister(true);
    const handleSignIn = () => setIsRegister(false);

    return (
        <div className="auth">
            <AuthHeader onSignUp={handleSignUp} onSignIn={handleSignIn} />
            <div className="auth-outer-container">
                <div className="auth-container">
                    <div className="auth-form-container">
                        <CSSTransition
                            in={!isRegister}
                            timeout={400}
                            unmountOnExit
                            classNames="auth-login"
                        >
                            <div className="auth-login">
                                <Login />
                            </div>
                        </CSSTransition>

                        <CSSTransition
                            in={isRegister}
                            timeout={400}
                            unmountOnExit
                            classNames="auth-register"
                        >
                            <div className="auth-register">
                                <Register />
                            </div>
                        </CSSTransition>
                    </div>
                </div>

                <p className="auth-text">
                    Stay connected with your friends around the world.
                </p>
            </div>
        </div>
    );
};

export default Auth;
