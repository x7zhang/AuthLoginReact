import React, { useState, useEffect } from 'react';

function useForm(type, callback, validate) {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    function handleSubmit(event) {
        event.preventDefault();
        setErrors(validate(type, values));
        setIsSubmitting(true);
    };

    function hanleChange(event) {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    return {
        values,
        errors,
        hanleChange,
        handleSubmit
    };
}

export default useForm;