import React, { useState } from 'react';

function useErrors(validations){
    const initalState = createInitialState(validations);
    const [errors, setErrors] = useState(initalState)

    function validateFields(event){
        const {name, value} = event.target;
        const newState = {...errors}
        newState[name] = validations[name](value);
        setErrors(newState);

    }

    function sending(){
        for(let item in errors){
            if(!errors[item].valid){
                return false;
            }
        }
        return true;
    }
    return [errors, validateFields, sending]

}

function createInitialState(validations){
    const initalState = {};
    for(let item in validations){
        initalState[item] = {
            valid: true,
            text: ""
        }
    }
    return initalState;
}

export default useErrors;
  