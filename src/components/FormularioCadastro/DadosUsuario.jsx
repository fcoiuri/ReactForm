import React, { useState, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import RegisterValidation from "../../contexts/RegisterValidation";
import useErrors from '../../hooks/useErrors';


function DadosUsuario({submit}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validations = useContext(RegisterValidation);
    const [errors, validateFields, sending] = useErrors(validations);

    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(sending()){
                submit({email, password});
            }
        }}
        >
            <TextField
                id="email"
                name="email"
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
                name="password"
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
                onBlur={validateFields}
                error={!errors.password.valid}
                helperText={errors.password.text}
            />
            <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
            >Próximo</Button>
        </form>
    )
}

export default DadosUsuario;