import React from "react";
import { useFormikContext } from "formik";

import "./authFormField.css";
import Error from "./Error";
import useMyContext from "../../hook/useMyContext";

const AuthFormField = ({ label, name, ...otherProps }) => {
    const { handleChange, setFieldTouched, touched, errors } =
        useFormikContext();

    const { dark } = useMyContext();

    return (
        <div className="auth-form-group">
            <Error error={errors[name]} visible={touched[name]} />
            <label style={{ color: dark ? "#fff" : "#000" }}>{label}</label>

            <input
                style={{
                    backgroundColor: dark ? "#333" : "#f1f1f1",
                    color: dark ? "#fff" : "#000",
                }}
                className="auth-form-input"
                {...otherProps}
                onChange={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
            />
        </div>
    );
};

export default AuthFormField;
