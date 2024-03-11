import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBoat=()=> {
    const navigate = useNavigate();
    const {id} = useParams();
    const [incharge, setIncharge] = useState('');
    const [boattype, setBoattype] = useState('');
    const [capacity, setCapacity] = useState('');
    const [price, setPrice] = useState('');
    useEffect(() => {
        axios.get(`http://127.0.0.1:8081/boats/${id}`).then(response => {
            setIncharge(response.data.incharge);
            setBoattype(response.data.boattype);
            setCapacity(response.data.capacity);
            setPrice(response.data.price);
        })
    },[])

    const handleSave = async() => {
        const data = {
            id : id,
            incharge : incharge,
            boattype : boattype,
            capacity : capacity,
            price : price,
        }
        event.preventDefault();
        try{
            const response = await axios.put("http://127.0.0.1:8081/boats/update", data);
            console.log(response.data);
            navigate('/admin/boats');
        } catch(error){
            console.log("error : "  + error);
        }
    }

    const handleDelete = async()=> {
        event.preventDefault();
        const response = await axios.delete(`http://127.0.0.1:8081/boats/delete/${id}`);
        console.log(response);
        navigate('/admin/boats');
    }
    return (
        <div style={{ width: '1000px'}}>
            <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%'}}>
            <h1>Edit Boat</h1>
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
                                value={incharge}
                                style={{width: '100%'}}
                                onChange={e => setIncharge(e.target.value)}
                                // disabled
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
                                value={boattype}
                                style={{width: '100%'}}
                                onChange={e => setBoattype(e.target.value)}
                                // disabled
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
                                type="number"
                                value={capacity}
                                style={{width: '100%'}}
                                onChange={e => setCapacity(e.target.value)}
                                // disabled
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
                                type="number"
                                value={price}
                                style={{width: '100%'}}
                                onChange={e => setPrice(e.target.value)}
                                // disabled
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
                                // disabled
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
                                // disabled
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
            <Button color='secondary' variant="contained" type="submit" style={{marginRight: '15px'}} onClick={()=>navigate('/admin/boats')}>Back</Button>
            <Button color='error' variant="contained" type="submit" style={{marginRight: '15px'}} onClick={handleDelete}>Delete Boat</Button>
            <Button variant="contained" type="submit" onClick={handleSave}>Save Boat</Button>
            </div>
        </form>
            </Card>
        </div>
    )
}

export default EditBoat
