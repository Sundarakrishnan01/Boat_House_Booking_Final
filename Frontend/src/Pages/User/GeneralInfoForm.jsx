import React , {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const GeneralInfoForm=()=> {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birth, setBirth] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [atype, setAtype] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const user = localStorage.getItem('email');
    // const user = "gokugokul186@gmail.com"
    useEffect(() => {
        axios.get(`http://127.0.0.1:8081/user/${user}`).then(response => {
            console.log(response.data.email);
            setEmail(response.data.email);
            setFirstName(response.data.firstname);
            setLastName(response.data.lastname);
            setBirth(response.data.birthday);
            setGender(response.data.gender);
            setPhone(response.data.phoneno);
            setAddress(response.data.address);
            setAtype(response.data.residenttype);
            setCity(response.data.city);
            setPincode(response.data.zipcode);
        })
        
    },[])


    return (
        <div  className="eprofile" style={{ marginLeft: '5%', marginRight: '5%'}}>
            <Card  border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%'}}>
            <h1>General Info</h1>
            <form>
            <Grid container1 spacing={2} direction="row">
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="1form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>First Name</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={firstName}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="1form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Last Name</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={lastName}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={2} direction="row">
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="1form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Birthday</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={birth}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="1form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Gender</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={gender}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={2} direction="row">
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="1form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Email</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value={email}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="1form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Phone no</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value={phone}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
            <h1>Address</h1>

            <Grid container spacing={2} direction="row">
                <Grid item xs={10} style={{minWidth: '400px'}}>
                    <div className="1form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Address</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={address}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2} style={{minWidth: '400px'}}>
                    <div className="1form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Resident Type</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={atype}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={2} direction="row">
                <Grid item xs={4} style={{minWidth: '200px'}}>
                    <div className="1form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>City</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={city}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4} style={{minWidth: '200px'}}>
                    <div className="1form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Pincode</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="number"
                                value={pincode}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4} style={{minWidth: '200px'}}>
                    <div className="1form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Phone no</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={pincode}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div>
            <   Button variant="contained" type="submit" onClick={()=> navigate('/user/editUser')}>Edit</Button>
            </div>
        </form>
            </Card>
        </div>
    )
}

export default GeneralInfoForm
