import { Formik } from "formik";

const FormContainer = ({
    children,
    initialValues,
    validationSchema,
    onSubmit,
}) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {() => <>{children}</>}
        </Formik>
    );
};

export default FormContainer;
