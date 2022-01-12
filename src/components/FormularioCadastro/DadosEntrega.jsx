import React, { useState } from "react";
import { TextField, Button, MenuItem } from "@material-ui/core";

const states = [
    {
        value: 'Acre',
        label: 'AC',
    },
    {
        value: 'Alagoas',
        label: 'AL',
    },
    {
        value: 'Amapá',
        label: 'AP',
    },
    {
        value: 'Amazonas',
        label: 'AM',
    },
    {
        value: 'Bahia',
        label: 'BA',
    },
    {
        value: 'Ceará',
        label: 'CE',
    },
    {
        value: 'Distrito Federal',
        label: 'DF',
    },
    {
        value: 'Espírito Santo',
        label: 'ES',
    },
    {
        value: 'Goiás',
        label: 'GO',
    },
    {
        value: 'Maranhão',
        label: 'MA',
    },
    {
        value: 'Mato Grosso',
        label: 'MT',
    },
    {
        value: 'Mato Grosso do Sul',
        label: 'MS',
    },
    {
        value: 'Minas Gerais',
        label: 'MG',
    },
    {
        value: 'Pará',
        label: 'PA',
    },
    {
        value: 'Paraíba',
        label: 'PB',
    },
    {
        value: 'Paraná',
        label: 'PA',
    },
    {
        value: 'Pernambuco',
        label: 'PE',
    },
    {
        value: 'Piauí',
        label: 'PI',
    },
    {
        value: 'Rio de Janeiro',
        label: 'RJ',
    },
    {
        value: 'Rio Grande do Norte',
        label: 'RN',
    },
    {
        value: 'Rio Grande do Sul',
        label: 'RS',
    },
    {
        value: 'Rondônia',
        label: 'RO',
    },
    {
        value: 'Roraima',
        label: 'RR',
    },
    {
        value: 'Santa Catarina',
        label: 'SC',
    },
    {
        value: 'São Paulo',
        label: 'SP',
    },
    {
        value: 'Sergipe',
        label: 'SE',
    },
    {
        value: 'Tocantins',
        label: 'TO',
    },
];

function DadosEntrega() {
    const [state, setState] = useState("");

    const handleChange = (event) => {
        setState(event.target.value);
        console.log(event.target.value);
      };

    return (
        <form>
            <TextField
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
            />
            <TextField
                id="address"
                label="Endereço"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                id="number"
                label="Número"
                type="number"
                variant="outlined"
                margin="normal"
            />
            <TextField
                id="complement"
                label="Complemento"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                id="city"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
            />
            <TextField
                id="state"
                select
                label="Selecione"
                value={state}
                onChange={handleChange}
                helperText="Selecione seu estado"
                type="text"
                variant="outlined"
                margin="normal"
                >

                {states.map((option)=>(
                    <MenuItem
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </MenuItem>
                ))}

                </TextField>

            <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
            >
                Finalizar Cadastro
            </Button>
        </form>
    )
}

export default DadosEntrega;