import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import dayjs from 'dayjs';
import { useNavigate, useParams } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const EditTicket=()=> {
    const {id} = useParams();
    // const [data, setData] = useState('');
    const navigate = useNavigate();
    const [boatId, setBoatId] = useState('');
    const [avail, setAvail] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
   const [value, setValue] = React.useState(dayjs());
    useEffect(() => {
        axios.get(`http://127.0.0.1:8081/ticket/${id}`).then(response => {
            setBoatId(response.data.boatId);
            setAvail(response.data.avail);
            setType(response.data.type);
            setDate(dayjs(response.data.date));
        })
    },[])

    const handleSave = async() => {
        const data = {
            id : id,
            boatId : boatId,
            date : date.format('YYYY-MM-DD'), 
            avail : avail,
            type : type
        }
        event.preventDefault();
        try{
            const response = await axios.post("http://127.0.0.1:8081/ticket/add", data);
            console.log(response.data);
            navigate('/admin/ticket');
        } catch(error){
            console.log("error : "  + error);
        }
    }

    const handleDelete = async()=> {
        event.preventDefault();
        const response = await axios.delete(`http://127.0.0.1:8081/ticket/delete/${id}`);
        console.log(response);
        navigate('/admin/ticket');
    }
    return (
        <div style={{ width: '1000px'}}>
            <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%'}}>
            <h1>Edit Ticket</h1>
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
                            <label>Ticket Numbers</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
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
                        <DatePicker label="Pick Date" value={date} onChange={(newValue) => setDate(newValue)}/>
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
            <Button color='secondary' variant="contained" type="submit" style={{marginRight: '15px'}} onClick={()=>navigate('/admin/ticket')}>Back</Button>
            <Button color='error' variant="contained" type="submit" style={{marginRight: '15px'}} onClick={handleDelete}>Delete Ticket</Button>
            <Button variant="contained" type="submit" onClick={handleSave}>Save Ticket</Button>
            </div>
        </form>
            </Card>
        </div>
    )
}

export default EditTicket
