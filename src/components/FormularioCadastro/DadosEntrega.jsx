import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import cep from "cep-promise";
import brazilianStates from "brazilian-states";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(1),
    width: "95%",
    flexGrow: 1,
    // width: '25ch',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function DadosEntrega({ submit }) {
  const [CEP, setCEP] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const classes = useStyles();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        submit({ CEP, address, district, number, complement, city, state });
      }}
    >
      <Grid item xs={6}>
        <TextField
          id="cep"
          label="CEP"
          fullWidth
          type="text"
          variant="outlined"
          margin="normal"
          value={CEP}
          onChange={(event) => {
            cep(event.target.value).then((value) => {
              setAddress(value.street);
              setDistrict(value.neighborhood);
              setCity(value.city);
              let codeState = value.state;
              let nameState = brazilianStates.get(codeState).name;
              setState(nameState);
            });
            setCEP(event.target.value);
          }}
        />
      </Grid>
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
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <TextField
            id="district"
            label="Bairro"
            type="district"
            variant="outlined"
            margin="normal"
            fullWidth
            value={district}
            onChange={(event) => {
              setDistrict(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="number"
            fullWidth
            label="Número"
            type="number"
            variant="outlined"
            margin="normal"
            value={number}
            onChange={(event) => {
              setNumber(event.target.value);
            }}
          />
        </Grid>
      </Grid>

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
      <Grid container spacing={1}>
        <Grid item xs={7}>
      <TextField
        id="city"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        className={classes.root}
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
      />
      </Grid>
      <Grid item xs={5}>
      <TextField
        id="state"
        label="Estado"
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
        type="text"
        variant="outlined"
        margin="normal"
        className={classes.root}
      />
      </Grid>
      </Grid>

      <Button variant="contained" color="primary" type="submit" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
