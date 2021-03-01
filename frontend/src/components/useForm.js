import React,{ useState, useEffect } from "react";




const useForm = (initialFieldValue, validate) => {
    const [values, setValues] = useState(initialFieldValue)
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const {name, value} = e.target
        const fieldValues = {[name] : value}
        setValues({
            ...values,
            ...fieldValues
        })
        validate(fieldValues)
    }

    const resetForm = () => {
        setValues({
            ...initialFieldValue
        })
        setErrors({})
        
    }

    return{
        values,
        setValues,
        handleInputChange,
        errors,
        setErrors,
        resetForm,
    };

    
}

export default useForm ;