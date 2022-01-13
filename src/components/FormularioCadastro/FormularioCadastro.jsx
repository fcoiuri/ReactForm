import React, { useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import { Typography } from '@material-ui/core';

function FormularioCadastro({ submit, validateCPF }) {

    const [actualStep, setActualStep] = useState(0);

    const forms = [
        <DadosUsuario submit={next}/>,
        <DadosPessoais  submit={next} validateCPF={validateCPF}/>,
        <DadosEntrega submit={submit}/>
    ]

    function next(){
        setActualStep(actualStep+1);
    }
    
    
    return (
        <>
            {forms[actualStep]}
        </>
    )
}

export default FormularioCadastro;
