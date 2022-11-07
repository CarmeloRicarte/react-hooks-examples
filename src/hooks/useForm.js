import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setformState] = useState(initialForm);

    /**
     * When the input changes, update the state of the form with the new value of the input.
     */
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setformState({
            ...formState, // maintain state of other form fields
            [name]: value, // update state of field that is changed
        });
    };
    return {
        ...formState, // for return every form control of state
        formState,
        onInputChange,
    }
}
