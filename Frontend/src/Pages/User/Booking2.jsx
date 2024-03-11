import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import '../../assets/css/home.css'
import dayjs from 'dayjs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Booking2 = () => {
    const [value, setValue] = React.useState(dayjs());
    const [data, setData] = useState([]);
    const type = useParams();
    const [view, setView] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [valuea, setValuea] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleClickOpen = (data) => {
        setView(data);
        console.log(data)
      setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }
    const handleSubmit = async() => {
        if(valuea>view.avail){
            setError("Ticket not Available");
        } else{

            const data3 = {
                email : localStorage.getItem('email'),
                boattype : view.type,
        boatId : view.boatId,
        date : view.date,
        price : view.price,
        tickets : valuea,
        tprice : view.price*valuea,
        incharge : view.incharge
    }
    event.preventDefault();
    console.log("Data : ", data[0]);
    const data2 = {
        id : data[0].id,
        avail : data[0].avail-valuea,
        boatId : data[0].boatId,
        date : data[0].date,
        type : data[0].type
    }
    
    event.preventDefault();
    
    const response = await axios.post(`http://127.0.0.1:8081/booking/add`, data3);
    console.log(response);
    console.log(data2);
    const response2 = await axios.post(`http://127.0.0.1:8081/ticket/add`, data2);
    console.log("response 2 : ", response2);
    navigate('/user/booking');
}
};

    useEffect(() => {

        console.log(type.id, value.format('YYYY-MM-DD'));
        axios.get(`http://127.0.0.1:8081/ticket/${type.id}/${value.format('YYYY-MM-DD')}`).then(response => {
            setData(response.data);
            console.log(response.data);
        }).catch(error => {
            console.error("Test Error : " ,error);
        })
    },[])

 

    const handleSearch = () => {
        console.log(type, value.format('YYYY-MM-DD'));
        axios.get(`http://127.0.0.1:8081/ticket/${type.id}/${value.format('YYYY-MM-DD')}`).then(response => {
            setData(response.data);
            console.log(response.data);
        }).catch(error => {
            console.error("Test Error : " ,error);
        })
    }
    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Pick Date" defaultValue={value} onChange={(newValue) => setValue(newValue)}/>
                    </DemoContainer>
                </LocalizationProvider>
                <Button size="small" onClick={handleSearch}>Search</Button>
            </div>
            {data.map(d => {
                return(

                    <div key={d.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2.5%', marginBottom: '2.5%' }}>
            
                <div style={{ backgroundColor: 'lightgrey', width: '70%', height: '100%' }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={4} style={{minWidth: '300px'}}>
                            <img src="/src/assets/Images/boat2.jpg" alt="Description of the image" style={{ width: '100%', height: '100%' }} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={8} style={{minWidth: '300px'}}>
                            <Grid container spacing={2} direction="row">
                                <Grid item xs={4} style={{minWidth: '200px'}}>
                                <div>
                                <div style={{fontSize: '24px', padding: '5.5%', fontFamily: 'Graphik-Semibold,sans-serif'}}>
                                    <h2>{d.boattype}</h2>
                                </div>
                                <div style={{marginTop: '5%'}}>
                                    <div style={{display: 'flex', padding: '5.5%'}}>
                                        <PersonIcon/>
                                        <h3>{d.avail} left</h3> 
                                    </div>
                                    <div style={{display: 'flex', padding: '5.5%'}}>
                                        <PersonIcon/>
                                        <h3>{d.capacity} Capacity</h3> 
                                    </div>
                                </div>
                                <div style={{marginTop: '5%', padding: '5.5%'}}>
                                    <h3>Date:</h3>
                                    <h4>{d.date}</h4>
                                </div>
                            </div>
                                </Grid>
                                <Grid item xs={4} style={{minWidth: '100px', marginLeft: '50%'}}>
                                <div>
                                <div style={{fontSize: '15px',padding: '5.5%', fontFamily: 'Graphik-Semibold,sans-serif', marginTop: '15%'}}>
                                    <h2>Rs. {d.price}</h2>
                                </div>
                                <div style={{marginTop: '5%'}}>
                                    <div style={{display: 'flex', padding: '5.5%'}}>
                                        {/* <PersonIcon/> */}
                                        <h4>Per Day</h4>
                                        {/* <p>Excludes taxes and fees</p> */}
                                    </div>
                                </div>
                                <div style={{marginTop: '5%', padding: '5.5%'}}>
                                    {/* <h3>Description:</h3> */}
                                    <Button  variant="contained" onClick={() =>handleClickOpen(d)}>Book Now</Button>
                                </div>
                            </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
            
            
            )
        })}
        <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Review And Confirm Your Booking
        </DialogTitle>
        {error && <p>{error}</p>}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {/* <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography> */}
          {/* <h3>Boat Type : {view.boattype}</h3> */}
          {/* <h3 style={{marginTop: '30px'}}>Boat Capacity : {view.capacity}</h3> */}
          {/* <h3 style={{marginTop: '30px'}}>Available Ticket : {view.avail}</h3> */}
          <Grid container spacing={2} direction="row">
        <Grid item xs={6} style={{minWidth: '100px'}}>

                    <div className="1form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Boat Capacity</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value={view.capacity}
                                style={{width: '100%'}}
                                disabled
                                />
                        </div>
                    </div>
        </Grid>
          <Grid item xs={6} style={{minWidth: '100px'}}>

          <div className="1form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Available Ticket</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={view.avail}
                                style={{width: '100%'}}
                                disabled
                                />
                        </div>
                    </div>

        </Grid>
            </Grid>

                    <div className="1form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Boat Type</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={view.boattype}
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                    <Grid container spacing={2} direction="row">

                    <Grid item xs={6} style={{minWidth: '100px'}}>
                    <div className="1form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Date</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={view.date}
                                style={{width: '100%'}}
                                disabled
                                />
                        </div>
                    </div>
                    </Grid>
                    <Grid item xs={6} style={{minWidth: '100px'}}>
                    <Autocomplete
                        value={valuea}
                        onChange={(event, newValue) => {
                        setValuea(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={options}
                        sx={{ width: 220 , marginTop: '17px'}}
                        renderInput={(params) => <TextField {...params} label="No of ticket Required" />}
                    />
                    </Grid>
                </Grid>
                <Grid container spacing={2} direction="row">
                    <Grid item xs={6} style={{minWidth: '100px'}}>
                    <div className="1form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Price Per Head</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={view.price}
                                style={{width: '100%'}}
                                disabled
                                />
                        </div>
                    </div>
                    </Grid>
                    <Grid item xs={6} style={{minWidth: '100px'}}>
                    <div className="1form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Total Price</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value={view.price*valuea}
                                style={{width: '100%'}}
                                disabled
                                />
                        </div>
                    </div>
                    </Grid>
                </Grid>
                
          {/* <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography> */}
          {/* <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography> */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit}>
            Confirm Booking
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
        </div>
    )
}

export default Booking2
