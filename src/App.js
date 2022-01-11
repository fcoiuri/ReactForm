import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto';
import { cpf } from 'cpf-cnpj-validator';

function App() {

  function OnSubmit(dados) {
    //Posso tratar os dados da forma que quiser
    console.log(dados);
  }

  function validateCPF(num) {
    if (!cpf.isValid(num)){
      return {
        valid: false,
        text: "CPF inválido"
      }
    }
    else{
        return {
          valid: true,
          text: ""
        }
    }
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
      <FormularioCadastro OnSubmit={OnSubmit} validateCPF={validateCPF}/>

    </Container>
  );
}

export default App;
