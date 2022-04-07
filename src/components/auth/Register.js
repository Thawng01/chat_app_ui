import * as Yup from "yup";

import AuthButton from "./AuthButton";
import AuthFormField from "./AuthFormField";
import FormContainer from "./FormContainer";
import Error from "./Error";
import useAuth from "../../hook/useAuth";

const validationSchema = Yup.object().shape({
    username: Yup.string().required().min(4).max(25).label("Username"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).max(225).label("Password"),
    cpassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords are not matching")
        .required("Passwords are not matching"),
});

const Register = () => {
    const { authenticate, error, loading } = useAuth();

    const handleSubmit = async ({ username, email, password }) => {
        const data = { username, email, password };
        authenticate(data, "register");
    };

    return (
        <>
            <Error error={error} visible={error ? true : false} />
            <FormContainer
                initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    cpassword: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmit(values)}
            >
                <AuthFormField label="Username" type="text" name="username" />
                <AuthFormField label="Email" type="email" name="email" />
                <AuthFormField
                    label="Password"
                    type="password"
                    name="password"
                />
                <AuthFormField
                    label="Confirm password"
                    type="password"
                    name="cpassword"
                />

                <AuthButton text={loading ? "Signing up..." : "Sign up"} />
            </FormContainer>
        </>
    );
};

export default Register;
