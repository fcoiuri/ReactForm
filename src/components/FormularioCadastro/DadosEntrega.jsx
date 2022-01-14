import React, { useState } from "react";
import { TextField, Button, MenuItem } from "@material-ui/core";
import cep from 'cep-promise';


import brazilianStates from "brazilian-states";




function DadosEntrega({submit}) {
    const [CEP, setCEP] = useState("");
    const [address, setAddress] = useState("");
    const [district, setDistrict] = useState("arroz");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");


    const handleChange = (event) => {
        setState(event.target.value);
        console.log(event.target)
        
        
      };

    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            submit({CEP, address, district, number,
                complement, city, state});
        }}
        >
            <TextField
                id="cep"
                label="CEP"
                type="text"
                variant="outlined"
                margin="normal"
                value={CEP}
                onChange={(event) => {   
                    // let result = cep(event.target.value).info();
                    // console.log(result.then());
                    // setCEP(event.target.value);
                    cep(event.target.value).then(
                        (value)=>{
                            setAddress(value.street);
                            setDistrict(value.neighborhood);
                            setCity(value.city);
                            setState(value.state);
                            
                        }
                    )
                   setCEP(event.target.value);
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
                id="district"
                label="Bairro"
                type="district"
                variant="outlined"
                margin="normal"
                value={district}
                onChange={(event) => {
                    setDistrict(event.target.value);
                }}
            />
            <TextField
                id="number"
                label="Número"
                type="number"
                variant="outlined"
                margin="normal"
                value={number}
                onChange={(event) => {
                    setNumber(event.target.value);
                }}
            />
            <TextField
                id="complement"
                label="Complemento"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
                value={complement}
                onChange={(event) => {
                    setComplement(event.target.value);
                }}
            />
            <TextField
                id="city"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
                value={city}
                onChange={(event) => {
                    setCity(event.target.value);
                }}
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
                name={state}
                >

                {brazilianStates.get().map((option)=>(
                    <MenuItem
                        key={option.name}
                        value={option.code}
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