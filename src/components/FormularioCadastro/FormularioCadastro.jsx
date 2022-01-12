import React, { useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import { Typography } from '@material-ui/core';

function FormularioCadastro({ OnSubmit, validateCPF }) {

    const [actualStep, setActualStep] = useState(0);
    
    function actualForm(step){
        switch(step){
            case 0:
                return <DadosUsuario />;
            case 1:
                return <DadosPessoais  OnSubmit={OnSubmit} validateCPF={validateCPF}/>
            case 2:
                return <DadosEntrega/>;
            default:
                return <Typography>
                    Erro ao selecionar o Formulário
                </Typography>
        }
    }
    return (
        <>
            {actualForm(actualStep)}
        </>
    )
}

export default FormularioCadastro;
