import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios'
import Swal from 'sweetalert2'

    const theme = createTheme();

    export default function RegisterUser() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const register = async(e) => {
        e.preventDefault();
        const user = { name, email, password }
        const answer = await Axios.post('./user/create', user)
        console.log(answer)
        const msg = answer.data.msg
    
        if (msg!=='Bienvenido') {
            Swal.fire({
                icon: 'error',
                title: msg,
                showConfirmButton: false,
                timer: 1500
            })
        } else {

            Swal.fire({
                icon:'success',
                title:"Usuario creado correctamente",
                showConfirmButton:false,
                timer:1500
            })
        
        
            setTimeout(()=>{
                window.location.href='/'
            },1600)
        }
    
    }



    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Regístrate
            </Typography>
            <Box component="form" noValidate onSubmit={register} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        autoComplete="given-name"
                        name="userName"
                        required
                        fullWidth
                        id="userName"
                        label="Nombre de Usuario"
                        autoFocus
                        onChange={(e)=>setName(e.target.value)}
                        />
                    </Grid>
                
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="email"
                        label="Correo Electrónico"
                        name="email"
                        autoComplete="email"
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Regístrate
                </Button>

                <Grid container justifyContent="flex-end">

                <Grid item>
                    <Link to="/login" variant="body2">
                    Ya tienes una Cuenta? Conéctate
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
    );
}