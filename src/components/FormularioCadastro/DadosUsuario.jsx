import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function DadosUsuario({submit}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            submit({email, password});
        }}
        >
            <TextField
                id="email"
                label="E-mail"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                value={email}
                onChange={(event)=>{
                    setEmail(event.target.value);
                }}
            />
            <TextField
                id="password"
                label="Senha"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                value={password}
                onChange={(event)=>{
                    setPassword(event.target.value);
                }}
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