import React from 'react';
import { Typography, makeStyles  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
      backgroundColor: "#757ce8"
    },
  }));

function Ending(){
    const classes = useStyles();
    return(
        <div className={classes.root} 
        variant="h5">
            Dados coletados com sucesso!
        </div>
    )
}

export default Ending;
