import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';


const ViewTicket=()=> {
    const {id} = useParams();
    const [data, setData] = useState('');
    const navigate = useNavigate();
//     const [boatId, setBoatId] = useState('');
//     const [avail, setAvail] = useState('');
//    const [value, setValue] = React.useState(dayjs());

    console.log("id : " ,id)
    useEffect(()=> {
        console.log(id);
        axios.get(`http://127.0.0.1:8081/ticket/${id}`).then(response => {
            setData(response.data);
            console.log(data);
        }
        )
    }, [])
    return (
        <div style={{ width: '1000px'}}>
            <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%'}}>
            <h1>View Ticket</h1>
            <form>
            <Grid container spacing={2} direction="row">
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Boat Id</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={data.boatId}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Ticket Numbers</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={data.avail}
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
                        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Pick Date" value={data.date} disabled/>
                    </DemoContainer>
                </LocalizationProvider> */}
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={data.date}
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
                                value={data.type}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                
            </Grid>

            <div>
            <Button color='secondary' variant="contained" type="submit" onClick={()=>navigate('/admin/ticket')}  style={{marginRight: '15px'}}>Back</Button>

            <Button variant="contained" type="submit" onClick={()=>navigate(`/admin/editTicket/${id}`)}>Edit Tickets</Button>
            </div>
        </form>
            </Card>
        </div>
    )
}

export default ViewTicket
