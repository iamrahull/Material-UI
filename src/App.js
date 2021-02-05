import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
//import {orange, green} from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6888, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }

})

const theme = createMuiTheme({

  typography: {
    h2: {
      fontSize: 50,
      marginBottom: 2,
    }
  },
  // palette: {
  //   primary:{
  //     main: green[400],
  //   },
  //   secondary: {
  //     main: orange[500],
  //   }
  // }
})

function ButtonStyled() {
  const classes= useStyles();
  return <Button className ={classes.root}> Test Styled Button</Button>
}

function CheckboxExample()
{
  const [checked, setChecked] =React.useState(true)
  return (
    
    <FormControlLabel
    control={
      <Checkbox
      checked={checked}
      icon={<DeleteIcon/>}
      checkedIcon={<SaveIcon/>} 
      onChange={(e)=> setChecked(e.target.checked)}
      inputProps={{
        'aria-label':'secondary checkbox'
      }}
     />
    }
    label= "Testing Checkbox"
    />
    
  )
}
// sm for small md for medium lg for large 
// xs for mobile sized version 

//Grid can be a container and an item

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth='lg'> 
      <div className="App">
        <header className="App-header">
          <AppBar color="secondary">
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant='h6'>
                MUI Themeing
              </Typography>
              <Button>
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Typography variant="h2">
            Welcome to MUI
          </Typography>

          <Typography variant="subtitle1" component="p">
            Learning to use material UI
          </Typography>

          <ButtonStyled/>
          <Grid container spacing={2} justify="center">
            <Grid item xs>
              <Paper style ={{
                height: 74,
                width: 50,
              }}/>
            </Grid>

           

            <Grid item>
              <Paper style ={{
                height: 74,
                width: 50,
              }}/>
            </Grid>
          </Grid>
           <br/>
          <TextField 
              variant="filled"
              color="secondary"
              type="email" //date , time
              label="Current"
              placeholder="email@domain.com"

          />
          <CheckboxExample />
          <ButtonGroup variant ="contained" color="primary">
            <Button 
            startIcon={<SaveIcon />}
            //endIcon={<SaveIcon />}
          
              // disabled for Disabling the button
              // style ={{
              //   fontSize: 24
              // }}
              >
              Save
            </Button>

            <Button  startIcon={<DeleteIcon />}>
              Discard
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
      </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
