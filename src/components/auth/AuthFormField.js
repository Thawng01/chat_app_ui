import React from "react";
import { useFormikContext } from "formik";

import "./authFormField.css";
import Error from "./Error";

const AuthFormField = ({ label, name, ...otherProps }) => {
    const { handleChange, setFieldTouched, touched, errors } =
        useFormikContext();

    return (
        <div className="auth-form-group">
            <Error error={errors[name]} visible={touched[name]} />
            <label>{label}</label>

            <input
                className="auth-form-input"
                {...otherProps}
                onChange={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
            />
        </div>
    );
};

export default AuthFormField;
