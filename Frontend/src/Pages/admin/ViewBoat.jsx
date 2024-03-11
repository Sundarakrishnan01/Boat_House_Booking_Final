import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const ViewBoat=()=> {
    const {id} = useParams();
    const [data, setData] = useState('');
    const navigate = useNavigate();
    console.log("id : " ,id)
    useEffect(()=> {
        axios.get(`http://127.0.0.1:8081/boats/${id}`).then(response => {
            setData(response.data);
            console.log(data);
        }
        )
    }, [])
    return (
        <div style={{ width: '1000px'}}>
            <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%'}}>
            <h1>View Boat</h1>
            <form>
            <Grid container spacing={2} direction="row">
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Incharge</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={data.incharge}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Boat Type</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={data.boattype}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={2} direction="row">
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Boat Capacity</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={data.capacity}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Price</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={data.price}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>

            {/* <Grid container spacing={2} direction="row">
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Price</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="gokugokul185@gmail.com"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Phone no</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="9344704998"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid> */}
            {/* <h1>Address</h1>

            <Grid container spacing={2} direction="row">
                <Grid item xs={10} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Address</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="2/6, Kumaran Nagar, Cheran Maanagar"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Resident Type</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="Permanent"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={2} direction="row">
                <Grid item xs={4} style={{minWidth: '200px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Email</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="gokugokul185@gmail.com"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4} style={{minWidth: '200px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Phone no</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="9344704998"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4} style={{minWidth: '200px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Phone no</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="9344704998"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid> */}
            <div>
            <Button color='secondary' variant="contained" type="submit" onClick={()=>navigate('/admin/Boats')}  style={{marginRight: '15px'}}>Back</Button>

            <Button variant="contained" type="submit" onClick={()=>navigate(`/admin/editboat/${id}`)}>Edit Boat</Button>
            </div>
        </form>
            </Card>
        </div>
    )
}

export default ViewBoat
