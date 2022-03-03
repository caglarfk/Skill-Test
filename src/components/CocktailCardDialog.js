import React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Grid, FormControl, InputLabel, OutlinedInput} from '@mui/material';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';



function CocktailCardDialog(props) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    
    const handleSaveClick=()=>{
        let data={
            email,
            name,
            surname,
            product:props.oneData.strDrink
        }
        props.onSave(data)
    }
    
  const handleClose = () => {
    props.onOut();
  };
  return (
    <div>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
             
             {props.oneData.strDrink}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSaveClick}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
        <Grid item xs={12}>
                    <FormControl fullWidth sx={{ m: 1 }} onChange={(e) => setName(e.target.value)}>
                        <InputLabel htmlFor="outlined-adornment-amount"
                        >
                            Name
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="Name"
                            value={name}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ m: 1 }} onChange={(e) => setSurname(e.target.value)}>
                        <InputLabel htmlFor="outlined-adornment-amount"
                        >
                            Surname
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="Surname"
                            value={surname}
                            
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ m: 1 }} onChange={(e) => setEmail(e.target.value)}>
                        <InputLabel htmlFor="outlined-adornment-amount"
                        >
                            email
                        </InputLabel>
                        <OutlinedInput                       
                            id="outlined-adornment-amount"
                            label="email"
                            
                            value={email}
                        />
                    </FormControl>
                </Grid>
        </List>
     
    </div>
  )
}

export default CocktailCardDialog;
