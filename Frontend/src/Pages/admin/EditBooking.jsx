import React , {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditBooking=()=> {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [boattype, setBoattype] = useState('');
    const [date, setDate] = useState('');
    const [tickets, setTickets] = useState('');
    const [price, setPrice] = useState('');
    const [tprice, setTprice] = useState('');
    const [incharge, setIncharge] = useState('');
    const [boatId, setBoatId] = useState('');
    // console.log(email)
    const {id} = useParams();

    useEffect(() => {
        // if (email) {
            axios.get(`http://127.0.0.1:8081/booking/${id}`).then(response => {
                console.log(response.data);
                setEmail(response.data.email);
                setBoattype(response.data.boattype);
                setDate(response.data.date);
                setTickets(response.data.tickets);
                setPrice(response.data.price);
                setTprice(response.data.tprice);
                setIncharge(response.data.incharge);
                setBoatId(response.data.boatId);
            });
        // }
        
    },[])

    const handleSave = async() => {
        const data = {
            id : id,
            email : email,
            boattype : boattype,
            date : date,
            tickets : tickets,
            price : price,
            tprice : tprice,
            incharge : incharge,
            boatId: boatId
        }
        event.preventDefault();
        const response = await axios.post('http://127.0.0.1:8081/booking/add', data);
        console.log(response.data);
        navigate('/admin/Bookings');
    }

    return (
        <div style={{ width: '1000px'}}>
            <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%'}}>
            <h1>Edit Booking    </h1>
            <form>
            <Grid container spacing={2} direction="row">
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>User Email</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value={email}
                                style={{width: '100%'}}
                                onChange={e => setEmail(e.target.value)}
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
                            <label>Date</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={date}
                                style={{width: '100%'}}
                                onChange={e => setDate(e.target.value)}
                                // disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>No of Tickets</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="number"
                                value={tickets}
                                style={{width: '100%'}}
                                onChange={e => setTickets(e.target.value)}
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
                            <label>Price Per Head</label>
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
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Total Price</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="number"
                                value={tprice}
                                style={{width: '100%'}}
                                onChange={e => setTprice(e.target.value)}
                                // disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
            <h1>Company Side</h1>

            <Grid container spacing={2} direction="row">
                <Grid item xs={10} style={{minWidth: '400px'}}>
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
               
            </Grid>

           
            <div>
            <Button color='secondary' variant="contained" type="submit" style={{marginRight: '15px'}} onClick={()=>navigate("/admin/Bookings")}>Back</Button>
            <Button variant="contained" type="submit" onClick={handleSave}>Save Booking</Button>
            </div>
        </form>
            </Card>
        </div>
    )
}

export default EditBooking
