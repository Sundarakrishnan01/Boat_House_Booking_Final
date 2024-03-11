import React from 'react';
import Grid from '@mui/material/Grid';
import '../../assets/css/booking.css'; // Corrected CSS import
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const BookingDetails = {
    1: {
        title: 'cruise houseboat',
        description: 'luxury boathouses with topmost quality and services',
        images: '/src/assets/Images/boat1.png'
    },
    2: {
        title: 'Non-Cruise houseboat',
        description: 'semi luxury boathouses with  quality and food',
        images: '/src/assets/Images/boat1.png'
    },
    3: {
        title: 'Canal Style houseboat',
        description: 'Canstyled boathouses with canel & waterroute trips',
        images: '/src/assets/Images/boat1.png'
    },
    4: {
        title: 'Catamaran styled houseboat',
        description: 'Traditional katamaram styled boathouses with topmost quality and services',
        images: '/src/assets/Images/boat1.png'
    },
    5: {
        title: 'Pontoon houseboat',
        description: 'House styled boathouses with night stay facilities djnfdnflzknefjansdkfjnk',
        images: '/src/assets/Images/boat1.png'
    }
}

const Booking = () => {
    const navigate = useNavigate();
    return (
        // <div style={{}}>

        <div style={{marginBottom: '0%', backgroundImage: "url('/src/assets/Images/booking.jpg')", backgroundSize: 'cover'}}>
            <h1 style={{textAlign: 'center'}}>Booking</h1>
            <div className='booking-grid'>
                <Grid className="grid-container" container rowSpacing={1} justifyContent="center">
                    {Object.keys(BookingDetails).map(id => {
                        const houseboat = BookingDetails[id];
                        return (
                            <Grid key={id} className='grid1' item>
                                {/* <div style={{ width: '440px', textAlign: 'center' }}>
                                    <h2>{houseboat.title}</h2>
                                    <p>{houseboat.description}</p>
                                    <img src={houseboat.images} alt={houseboat.title} style={{ height: "250px", maxWidth: '100%' }} />
                                </div> */}
                                <div style={{ width: '440px', textAlign: 'center', marginBottom: '5%' , marginRight: '25px', marginLeft: '25px'}}>
                                <Card sx={{ maxWidth: 435 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image={houseboat.images}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        {houseboat.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        {houseboat.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={()=>navigate(`/user/booking/type/${houseboat.title.split(" ")[0]}`)}>Book now</Button>
                                        {/* <Button size="small">Learn More</Button> */}
                                    </CardActions>
                                    </Card>
                                    </div>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        </div>
                    // </div>
    )
}

export default Booking;
