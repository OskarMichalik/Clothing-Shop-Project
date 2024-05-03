'use client';
import { useState } from "react";

export function useInput(defaultValue, validationFn){
    const [enteredValue,setEnteredValue] = useState(defaultValue);
    const [inputEdited,setIntupEdited] = useState(false);

    const valueIsValid = validationFn(enteredValue);

    function handleInputChange(event){
        setEnteredValue(event.target.value);
        setIntupEdited(false);
    }
    function handleBlur(){
        setIntupEdited(true);
    }

    return {
        value: enteredValue,
        handleInputChange: handleInputChange,
        handleBlur: handleBlur,
        hasError: inputEdited && !valueIsValid
    }
}