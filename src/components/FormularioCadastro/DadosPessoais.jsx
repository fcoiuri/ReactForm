import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel, Grid } from '@material-ui/core';
import RegisterValidation from '../../contexts/RegisterValidation';
import useErrors from '../../hooks/useErrors';

function DadosPessoais({ submit }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cpf, setCpf] = useState("");
    const [promotions, setPromotions] = useState(true);
    const [news, setNews] = useState(true);
    const validations = useContext(RegisterValidation);
    const [errors, validateFields, sending] = useErrors(validations);

    return (
        <form 
            onSubmit={(event) => {
                event.preventDefault();
                if(sending()){
                    submit({ name, lastName, cpf, promotions, news });
                }
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
                name="name"
                onBlur={validateFields}
                error={!errors.name.valid}
                helperText={errors.name.text}
                required
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
                name="lastname"
            />
            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={validateFields}
                error={!errors.cpf.valid}
                helperText={errors.cpf.text}
                id="cpf"
                name="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                required
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
                Próximo
            </Button>
        </form>
    )
}

export default DadosPessoais;
