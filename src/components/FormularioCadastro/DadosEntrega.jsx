import React, { useState } from "react";
import { TextField, Button, MenuItem } from "@material-ui/core";

var brazilianStates = require('brazilian-states');




function DadosEntrega({submit}) {
    const [state, setState] = useState("");
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");


    const handleChange = (event) => {
        setState(event.target.value);
        
      };

    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            submit({cep, address, state});
        }}
        >
            <TextField
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value);
                }}
            />
            <TextField
                id="address"
                label="Endereço"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
                value={address}
                onChange={(event) => {
                    setAddress(event.target.value);
                }}
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

                {brazilianStates.get().map((option)=>(
                    <MenuItem
                        key={option.name}
                        value={option.name}
                    >
                        {option.name}
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