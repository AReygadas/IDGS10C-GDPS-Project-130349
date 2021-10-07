//import logo from './logo.svg';

import React , {useState}   from 'react'
import {Grid,Container,Paper,Avatar, Typography,TextField,Button  } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
//import fondo from '../assets/image/fondo.jpg'


const useStyles=makeStyles(theme=>({

root:{
//backgroundImage: `url (${fondo}) `,
backgroundRepeat:'no-repeat',
backgroundSize: 'cover',
backgroundPosition:'center',
height: '100vh'


},

container:{

height:'60%',
marginTop:theme.spacing(10),
[theme.breakpoints.down(400+theme.spacing(2) +2  )]: {

marginTop:0,
with:'100%',
height:'100%'

}


},

div:{
marginTop:theme.spacing(8),
display:'flex',
flexDirection: 'column',
alignItems:'center'
},

form:{
width:'100%',
marginTop:theme.spacing(1)
////


},
button:{
margin:theme.spacing(3,0,2)


}








}))

const App = () => {

  const[body, setBody]=useState({username:'',password:''})

  const classes = useStyles()
  const handleChange = e => {

    console.log(e.target.value)
    setBody({
      ...body,
      [e.target.name]: e.target.value


    })


  }

const onSubmit =() =>{

  console.log(body)

}




  return (
  

<Grid  container component="main" className={classes.root}    >

<Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}     >

<div   className={classes.div}  >

<Typography component='h1' variant='h5'  >
Sign In
</Typography>

<form  className={classes.form}  >

<TextField fullWidth autoFocus color='primary' margin='normal' variant='outlined' 
label='Username' name='username' onChange={handleChange}   value={body.username}  >

</TextField>

<TextField fullWidth type='password' color='primary' margin='normal' variant='outlined' 
label='Password'  name='password'
onChange={handleChange}  value={body.password}  >

</TextField>

<Button fullWidth variant='contained' onClick={() => onSubmit()   }    color='primary' className={classes.button}  >
Sign In
</Button>



</form>




</div>

</Container>

</Grid>



  )
}

export default App
