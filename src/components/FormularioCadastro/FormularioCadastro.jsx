import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import { Step, StepLabel, Stepper } from "@material-ui/core";
import Ending from "./Ending";

function FormularioCadastro({ submit, validations }) {
  const [collectedData, setCollectedData] = useState({});
  const [actualStep, setActualStep] = useState(0);

  useEffect(() => {
    if (actualStep === forms.length - 1) {
      submit(collectedData);
    }
  });

  const forms = [
    <DadosUsuario submit={collectData} validations={validations} />,
    <DadosPessoais submit={collectData} validations={validations} />,
    <DadosEntrega submit={collectData} validations={validations} />,
    <Ending />,
  ];

  function collectData(data) {
    setCollectedData({
      ...collectedData,
      ...data,
    });
    next();
  }

  function next() {
    setActualStep(actualStep + 1);
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
      </Stepper>
      {forms[actualStep]}
    </>
  );
}

export default FormularioCadastro;
