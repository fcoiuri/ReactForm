import React from "react";
import { Button, TextField } from "@material-ui/core";

function DadosUsuario() {
    return (
        <form>
            <TextField
                id="email"
                label="E-mail"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                id="password"
                label="Senha"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
            >Cadastrar</Button>
        </form>
    )
}

export default DadosUsuario;