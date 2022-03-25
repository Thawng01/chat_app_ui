import React from "react";
import * as Yup from "yup";

import AuthButton from "./AuthButton";
import AuthFormField from "./AuthFormField";
import FormContainer from "./FormContainer";

const validationSchema = Yup.object().shape({
    username: Yup.string().required().min(4).max(25).label("Username"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).max(225).label("Password"),
    cpassword: Yup.string().required().min(6).max(225),
});

const Register = () => {
    return (
        <FormContainer
            initialValues={{
                username: "",
                email: "",
                password: "",
                cpassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
        >
            <AuthFormField label="Username" type="text" name="username" />
            <AuthFormField label="Email" type="email" name="email" />
            <AuthFormField label="Password" type="password" name="password" />
            <AuthFormField
                label="Confirm password"
                type="password"
                name="cpassword"
            />

            <AuthButton text="Sign up" />
        </FormContainer>
    );
};

export default Register;
