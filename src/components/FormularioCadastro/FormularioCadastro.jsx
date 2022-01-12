import React, { useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ OnSubmit, validateCPF }) {

    return (
        <>
            <DadosPessoais OnSubmit={OnSubmit} validateCPF={validateCPF} />
            <DadosUsuario />
            <DadosEntrega/>
        </>
    )
}

export default FormularioCadastro;
