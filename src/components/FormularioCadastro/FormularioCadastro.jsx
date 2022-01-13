import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';

function FormularioCadastro({ submit, validateCPF }) {

    const [collectedData, setCollectedData] = useState({});
    const [actualStep, setActualStep] = useState(0);

    useEffect(()=>{
        if(actualStep === forms.length-1){
            submit(collectedData);
        }
    })

    const forms = [
        <DadosUsuario submit={collectData}/>,
        <DadosPessoais  submit={collectData} validateCPF={validateCPF}/>,
        <DadosEntrega submit={collectData}/>,
        <Typography variant="h5">Dados coletados com sucesso!</Typography>
    ]

    function collectData(data){
        setCollectedData({
            ...collectedData,
            ...data

        });
        next();
    }
    
    function next(){
        setActualStep(actualStep+1);
    }
    
    
    return (
        <>
            <Stepper activeStep={actualStep}>
                <Step>
                    <StepLabel>Login</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Pessoal</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Entrega</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Finalização</StepLabel>
                </Step>
            </Stepper>
            {forms[actualStep]}
        </>
    )
}

export default FormularioCadastro;
