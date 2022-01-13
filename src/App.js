import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto';
import {validateCPF, validatePassword} from './models/register';
import RegisterValidation from './contexts/RegisterValidation';

function App() {

  function submit(dados) {
    //Posso tratar os dados da forma que quiser
    console.log(dados);
  }

  return (
    <Container
      component="article"
      maxWidth="sm">
      <Typography
        variant="h3"
        component="h1"
        align="center"
      >Formulário de Cadastro</Typography>
      <RegisterValidation.Provider value={{cpf: validateCPF, 
      password: validatePassword}}>

      <FormularioCadastro submit={submit} 
      />
      </RegisterValidation.Provider>
    </Container>
  );
}

export default App;
