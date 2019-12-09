import React from 'react';

const runControlValidation = (value, validations) => {
    return validations.validate(value, { abortEarly: false });
};

export const getValidationsRunnerForSchema = schema => form => {
    if (!schema) { return Promise.resolve(); }
    return schema.validate(form, { abortEarly: false })
        .then(() => form).catch(err => {
            const errors = err.inner.reduce((acc, { path, message }) => {
                acc[path] = (acc[path] || []).concat(message);
                return acc;
            }, {});
            return Promise.reject(errors);
        });
}

const getControlChangeHandler = (validations, setValue, setErrors) => {
    let id;
    return e => {
        const newValue = e.target.value;
        if (id) { clearTimeout(id); id = null; }
        id = setTimeout(() => {
            setValue(newValue);
            runControlValidation(newValue, validations)
                .then(() => {
                    setErrors(undefined);
                })
                .catch(err => {
                    setErrors(err.errors);
                });
            id = null;
        }, 200);
    };
};

export const useFormControl = (defaultValue, validations) => {
    const [value, setValue] = React.useState(defaultValue);
    const [errors, setErrors] = React.useState(undefined);

    const changeHandler = React.useCallback(
        getControlChangeHandler(validations, setValue, setErrors),
        [validations, setValue, setErrors]
    );

    return React.useMemo(() => ({
        value,
        setValue,
        errors,
        setErrors,
        changeHandler
    }), [value, setValue, errors, setErrors, changeHandler]);
};