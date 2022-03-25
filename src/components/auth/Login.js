import React from "react";
import * as Yup from "yup";

import "./login.css";
import AuthButton from "./AuthButton";
import AuthFormField from "./AuthFormField";
import FormContainer from "./FormContainer";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
});

const Login = () => {
    return (
        <>
            <FormContainer
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AuthFormField label="Email" type="email" name="email" />

                <AuthFormField
                    label="Password"
                    type="password"
                    name="password"
                />

                <AuthButton text="Login" />
            </FormContainer>
        </>
    );
};

export default Login;
