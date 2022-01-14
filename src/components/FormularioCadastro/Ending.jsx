import React from 'react';
import { Typography, makeStyles  } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
    root: {
      
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
      backgroundColor: "#DED9D8"
    },
    size:{
      fontSize: "2em",
      textAlign: 'center',
    },
    textingTitle:{
      ...theme.typography.button,
      fontSize: "1.8em",
      textAlign: 'center',

    },
    texting:{
      textAlign: 'center',

    },
  }));

function Ending(){
    const classes = useStyles();
    return(
        <div className={classes.root} 
        >
          <Typography className={classes.texting} variant="h3">

            <CheckCircleIcon
            color="action"
            className={classes.size}
            />
          </Typography>
          <Typography  className={classes.textingTitle} variant="h5">
          Obrigado
          </Typography>
          <Typography className={classes.texting} variant="h6">
          Dados coletados com sucesso
          </Typography>
        </div>
    )
}

export default Ending;
