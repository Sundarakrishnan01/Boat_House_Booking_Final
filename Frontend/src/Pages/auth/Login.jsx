import React, {useState} from 'react'
import '/src/assets/css/Signup.css'
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";


const Login = ({ setLoginStatus }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const handleLogin= async() => {
        // console.log(email);
        if(email===null || password===null){
            setError("Provide all details")
        }
        // const user = await axios.get(`http://127.0.0.1:8081/${email}`);
        //     if(user.data.password===password){
        //         console.log('logged in')
        //         localStorage.setItem('email', email);
        //         if(email.includes('@skcetadmin.ac.in')){
        //             navigate('/admin/DashBoard')
        //         } else {
        //             navigate('/user/home')
        //         }
        //     } else {
        //         setError('Wrong password');
        //         return;
        //     }
        const data = {
            username: email,
            password: password
        }
        const user = await axios.post(`http://127.0.0.1:8081/products/authenticate`, data);
        console.log(user);
        // localStorage.setItem('token', user.data);
        sessionStorage.setItem("token", user.data);
        console.log(sessionStorage.getItem("token"));
        sessionStorage.setItem("tokenExpiration", Date.now() + 86400000);
        setLoginStatus(true);
        const decode = jwtDecode(user?.data);
        console.log("Decoded token:", decode);

        navigate('/user/home');
    }
    return (
        <div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center',minHeight: '100lvh'}}>
        {/* <video className="video-bg" autoPlay loop muted>
            <source src="/src/assets/Videos/videoplayback.webm" type="video/mp4" />
        </video> */}
        <div className='login'>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                <Grid item xs={12} sm={6} style={{minWidth: '300px'}}>
                <img style={{height: '100%', width: '100%'}} src="/src/assets/Images/boat2.jpg" alt="Description of the image" />
            </Grid>
            <Grid item xs={12} sm={6} style={{minWidth: '300px'}}>
            <div className="page-holder align-items-center py-4 bg-gray-100 vh-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="card">
                            <div className="card-header px-lg-5">
                                 <div className="card-heading text-primary">
                                    <h1>Welcome to Boat Housing!</h1>
                                </div>
                            </div>
                        <div >
                            <div className="loginform">
                                {error && <p style={{color: 'red', textAlign: 'center'}}>{error}</p>}
                                <div className="border border-dark pb-3 rounded-lg" style={{width: "100%" }}>
                                    <div className="text-center p-1 mb-2 text-light " >
                                        <div className="notice">
                                        <div>
                                            <h2>Sign In</h2>
                                        </div>
                                        <div>
                                            <h4>Its Quick and Easy</h4>
                                        </div>
                                        </div>
                                    </div>
                            <form id="logf">
                            <div className="form-group ml-3 mr-1">
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Email"
                                        // defaultValue="Hello World"
                                        type="email"
                                        style={{width: '80%'}}
                                        value={email}
                                        onChange={e => setEmail(e.target.value)} 
                                    />
                            </div>
                            <div className="form-group ml-3 mr-3">
                                <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        style={{width: '80%'}}
                                        label="Password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)} 
                                        required
                                        endAdornment={
                                            <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >   
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                        </InputAdornment>
                                        }
                                        // label="Password"
                                        />
                            </div>
                            <div className="form-group ml-3 mr-1">
                                    <div className='signin'><p>Dont have an account??</p><a href="/signup">Sign up</a></div>
                                </div>
                            <div className="form-group ml-3 mr-1">
                                <Button variant="contained" color="success" onClick={handleLogin}>
                                    Login
                                </Button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </Grid>
        </Grid>
        </div>
        </div>
    )
}

export default Login
