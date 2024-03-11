// import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
const Home = () => {
    const navigate = useNavigate();
    return (
        <div>

      
        <div className="home-container" >
            <video className="video-bg" autoPlay loop muted >
            <source src="/src/assets/Videos/home.mp4" type="video/mp4" />
        </video>
            <h1>Welcome to Boat House Booking</h1>
            <div style={{display: 'flex', marginTop: '2%'}}>

            <Grid className="grid-container" container rowSpacing={1} columnSpacing={{ xs: 6, sm: 6, md: 6 }}>
                {/* <div  className="grid"> */}

                <Grid className='grid1' item xs={3} style={{minWidth: '400px'}}>
                    <img style={{height: '100%', width: '100%'}} src="/src/assets/Images/home1resize.png" alt="Description of the image" />
                    <div className='paper' style={{backgroundColor: 'lightblue', padding: '5px', borderRadius: '5px'}}>
                        <h1>Search Simply</h1>
                        <h3>Search through 100s of BoatHouse in just a few seconds.</h3>
                    </div>
                </Grid>
                <Grid className='grid2' item xs={3} style={{minWidth: '400px'}}>
                    <img style={{height: '100%', width: '100%'}} src="/src/assets/Images/homepage2resize.png" alt="Description of the image" />
                    <div className='paper' style={{backgroundColor: 'lightblue', padding: '5px', borderRadius: '5px'}}>
                        <h1>Quality Service</h1>
                        <h3>Experiece our impeckable service & quality of our Boathouses</h3>
                    </div>
                </Grid>
                <Grid className='grid3' item xs={3} style={{minWidth: '400px'}}>
                    <img style={{height: '100%', width: '100%'}} src="/src/assets/Images/homepage3resize.png" alt="Description of the image" />
                    {/* <Paper elevation={0} style={{padding: '5px', backgroundColor: 'lightblue'}}> */}
                    <div className='paper' style={{backgroundColor: 'lightblue', padding: '5px', borderRadius: '5px'}}>
                        <h1>Save big</h1>
                        <h3>Discover a great deal to book on our site and get unbeatable discounts</h3>
                    </div>
                    {/* </Paper> */}
                </Grid>
                {/* </div> */}
            </Grid>
            </div>
            <div style={{marginTop: '2%', paddingBottom: '15%'}}>
            <Button startIcon={<DirectionsBoatIcon/>} variant="contained" color="success" size="large"   onClick={()=>navigate("/user/booking")}>
                Book BoatHouse now!
                </Button>
            </div>
            
        </div>

        </div>
    )
}

export default Home
