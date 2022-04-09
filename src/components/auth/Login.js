import * as Yup from "yup";

import "./login.css";
import AuthButton from "./AuthButton";
import AuthFormField from "./AuthFormField";
import FormContainer from "./FormContainer";
import useAuth from "../../hook/useAuth";
import Error from "./Error";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
});

const Login = () => {
    const { authenticate, error, loading } = useAuth();

    return (
        <>
            <Error error={error} visible={error ? true : false} />
            <FormContainer
                initialValues={{ email: "", password: "" }}
                onSubmit={(data) => authenticate(data)}
                validationSchema={validationSchema}
            >
                <AuthFormField label="Email" type="email" name="email" />

                <AuthFormField
                    label="Password"
                    type="password"
                    name="password"
                />

                <AuthButton text={loading ? "Logging in..." : "Login"} />
            </FormContainer>
        </>
    );
};

export default Login;
