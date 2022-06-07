import React , {useState} from 'react'
import Navbar from './Navbar'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Select } from '@mui/material';
import { Link  } from 'react-router-dom';
const theme = createTheme();

const names = [
  'Maadi',
  'Haram',
  'Faisal',
  'Zayed',
  'Dokki',
  'Mohandseen',
  
];

const na = [
  {area_name: "maadi",
    id: "1"
  }
]
 


const Signup = () => {
  const [areaNames, setAreaNames] = useState('')
  
  const handleAreaChange = (event) => {
    setAreaNames(event.target.value);
  };
  

  const getArea = (area) => {

  }
  const handleSubmit = (e) => {
      e.preventDefault();

      let data = new FormData(e.currentTarget)
      
      let formData = {
        full_name : data.get('firstName')+" "+data.get('lastName'),
        phone: data.get('number'),
        address: data.get('address'),
        area: data.get('area'),
        password: data.get('password'),

      }

      console.log(formData)
  }
  
  return (
    <>
        

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
            Sign up
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Home Address"
                  name="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}  >
              <TextField
                  label="Area"
                  sx={{ width: 400 }}
                  select
                  value={areaNames}
                  placeholder="Area"
                  onChange={handleAreaChange}
                  name='area'
                  
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      
                      {name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  label="Phone Number"
                  name="number"
                  autoComplete="number"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="area_id"
                  label="Area id"
                  name="area_id"
                  autoComplete="area_id"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <Link to='/Signin' style={{
                fontSize: "0.875rem",
                lineHeight: "1.43",
                letterSpacing: "0.01071em",
                textDecoration: "underline",
                textDecorationColor: "rgba(25,118,210,0.4)"
              }}>Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>

    </>
  )
}

export default Signup