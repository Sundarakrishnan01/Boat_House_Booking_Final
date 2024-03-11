import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const AddTicket=()=> {
   const [boatId, setBoatId] = useState('');
//    const [date, setDate] = useState('');
   const [avail, setAvail] = useState('');
   const [type, setType] = useState('');
   const [value, setValue] = React.useState(dayjs());
   const navigate = useNavigate();

    const add =async() => {
        const data = {
            boatId : boatId,
            date : value.format('YYYY-MM-DD'), 
            avail : avail,
            type : type
        }
        event.preventDefault();
        console.log(value.format('YYYY-MM-DD'));  
        const response = await axios.post('http://127.0.0.1:8081/ticket/add', data).then(resp => {
            console.log(resp);
            navigate('/admin/ticket')
        });
    }

    return (
        <div style={{ width: '1000px'}}>
            <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%'}}>
            <h1>Add Ticket</h1>
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
                                type="number"
                                value={boatId}
                                style={{width: '100%'}}
                                onChange={e => setBoatId(e.target.value)}
                                // disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Ticket numbers</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="number"
                                value={avail}
                                style={{width: '100%'}}
                                onChange={e => setAvail(e.target.value)}
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
                        {/* <div>
                            <TextField
                                id="outlined-required"
                                type="number"
                                value={capacity}
                                style={{width: '100%'}}
                                onChange={e => setCapacity(e.target.value)}
                                // disabled
                            />
                        </div> */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Pick Date" value={value} onChange={(newValue) => setValue(newValue)}/>
                    </DemoContainer>
                </LocalizationProvider>
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
                                value={type}
                                style={{width: '100%'}}
                                onChange={e => setType(e.target.value)}
                                // disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>

            <div>
            <   Button color='secondary' variant="contained" type="submit" style={{marginRight: '15px'}} onClick={()=>navigate('/admin/ticket')}>Back</Button>
            <   Button variant="contained" type="submit" onClick={add}>Add Tickets</Button>
            </div>
        </form>
            </Card>
        </div>
    )
}

export default AddTicket
