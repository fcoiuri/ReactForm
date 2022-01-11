import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/';

function FormularioCadastro({ OnSubmit, validateCPF }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cpf, setCpf] = useState("");
    const [promotions, setPromotions] = useState(true);
    const [news, setNews] = useState(true);
    const [errors, setErrors] = useState({
        cpf: {
            valid: true,
            text: ""
        }
    })

    return (
        <form 
            onSubmit={(event) => {
                event.preventDefault();
                OnSubmit({ name, lastName, cpf, promotions, news });
            }}
        >
            <TextField
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
                }}
                id="name"
                label="Nome"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                value={lastName}
                onChange={(event) => {
                    setLastName(event.target.value);
                }}
                id="lastname"
                label="Sobrenome"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={(event) => {
                    const isValid = validateCPF(cpf)
                    setErrors({ cpf: isValid })
                }}
                error={!errors.cpf.valid}
                helperText={errors.cpf.text}
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
            />
            <Grid container justifyContent="flex-end" >

                <FormControlLabel
                    label="Promoções"
                    control={
                        <Switch
                            checked={promotions}
                            onChange={(event) => {
                                setPromotions(event.target.checked);
                            }}
                            name="promotions"
                            color="primary"
                        />
                    }
                />

                <FormControlLabel

                    label="Novidades"
                    control={
                        <Switch
                            checked={news}
                            onChange={(event) => {
                                setNews(event.target.checked);
                            }}
                            name="news"
                            color="primary"

                        />}
                />
            </Grid>

            <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
            >
                Cadastrar
            </Button>
        </form>
    )
}

export default FormularioCadastro;
