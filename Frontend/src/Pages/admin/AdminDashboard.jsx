import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CallIcon from '@mui/icons-material/Call';
import Sales from './Sales';
import Piechart from './Piechart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SailingIcon from '@mui/icons-material/Sailing';

const AdminDashboard = () => {
   

    return (
        <div>
            <div>
            {/* <h1 >Dashboard</h1> */}
            <Grid className="grid-container" container rowSpacing={1} columnSpacing={{ xs: 6, sm: 6, md: 6 }}>
                <Grid className='grid1' item xs={3} style={{minWidth: '400px', marginRight: '50px'}}>
                    {/* <img style={{height: '100%', width: '100%'}} src="/src/assets/Images/home1resize.png" alt="Description of the image" />
                        <div className='paper' style={{backgroundColor: 'lightblue', padding: '5px', borderRadius: '5px'}}>
                            <h1>Search Simply</h1>
                            <h3>Search through 100s of BoatHouse in just a few seconds.</h3>
                        </div> */}
                        {/* <Paper elevation={3}  style={{backgroundColor: 'black'}}/> */}
                        <div style={{height: "300px", width: '400px', left: '10px', bottom: '100px', zIndex: '1'}}>
                            <div>

                            <Card sx={{ maxWidth: "100%", backgroundColor: 'rgb(240,203,95)'}}>
                                <CardActionArea>
                                    
                                <CardContent>
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <AttachMoneyIcon sx={{fontSize: '60px'}}/>
                                    </div>
                                <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
                                        Weekly Sales
                                    </Typography>
                                    <Typography variant="h5" color="text.secondary" style={{paddingTop: '20px', textAlign: 'center'}}>
                                        $15000
                                    </Typography>
                                    <Typography  variant="body2" color="text.secondary" style={{textAlign: 'center', marginTop: '5%'}}>
                                        Talk To Customer Service
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                            </div>
                        <div style={{backgroundColor : 'rgba(255, 255, 255, 0.5)',position: 'relative',height: '150px', width: '150px', borderRadius: '100px', bottom: '250px', left: '300px', zIndex: 1}}>
    
                        </div>
                        <div style={{backgroundColor : 'rgba(255, 255, 255, 0.5)',position: 'relative',height: '150px', width: '150px', borderRadius: '100px', bottom: '300px', left: '250px'}}>
    
                        </div>
                </div>
                </Grid>
                <Grid className='grid1' item xs={3} style={{minWidth: '400px', marginRight: '50px'}}>
                <div style={{height: "300px", width: '400px', left: '10px', bottom: '100px', zIndex: '1'}}>
                    <div>

                            <Card sx={{ maxWidth: "100%",backgroundColor: 'lightpink'}}>
                                <CardActionArea>
                                    
                                <CardContent>
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <TrendingUpIcon sx={{fontSize: '60px'}}/>
                                    </div>
                                <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
                                        Boats Booked
                                    </Typography>
                                    <Typography variant="h5" color="text.secondary" style={{paddingTop: '20px', textAlign: 'center'}}>
                                        120
                                    </Typography>
                                    <Typography  variant="body2" color="text.secondary" style={{textAlign: 'center', marginTop: '5%'}}>
                                        Talk To Customer Service
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                    </div>
                    <div style={{backgroundColor : 'rgba(255, 255, 255, 0.5)',position: 'relative',height: '150px', width: '150px', borderRadius: '100px', bottom: '250px', left: '300px', zIndex: 1}}>
    
                        </div>
                        <div style={{backgroundColor : 'rgba(255, 255, 255, 0.5)',position: 'relative',height: '150px', width: '150px', borderRadius: '100px', bottom: '300px', left: '250px'}}>
    
                        </div>
                </div>
                </Grid>
                <Grid className='grid1' item xs={3} style={{minWidth: '400px', marginRight: '50px'}}>
                <div style={{height: "300px", width: '400px', left: '10px', bottom: '100px', zIndex: '1'}}>
                    <div>

                            <Card sx={{ maxWidth: "100%",backgroundColor: 'lightgreen'}}>
                                <CardActionArea>
                                    
                                <CardContent>
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <SailingIcon sx={{fontSize: '60px'}}/>
                                    </div>
                                <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
                                        Boats Available
                                    </Typography>
                                    <Typography variant="h5" color="text.secondary" style={{paddingTop: '20px', textAlign: 'center'}}>
                                        42
                                    </Typography>
                                    <Typography  variant="body2" color="text.secondary" style={{textAlign: 'center', marginTop: '5%'}}>
                                        Talk To Customer Service
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                    </div>
                    <div style={{backgroundColor : 'rgba(255, 255, 255, 0.5)',position: 'relative',height: '150px', width: '150px', borderRadius: '100px', bottom: '250px', left: '300px', zIndex: 1}}>
    
                        </div>
                        <div style={{backgroundColor : 'rgba(255, 255, 255, 0.5)',position: 'relative',height: '150px', width: '150px', borderRadius: '100px', bottom: '300px', left: '250px'}}>
    
                        </div>
                </div>
                </Grid>
            </Grid>
                {/* <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '10px'}}> */}
                    
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>

            <Grid container spacing={2} style={{minWidth: '600px'}}>
                <Grid item xs={5} sm={7} style={{minWidth: '600px'}}>
                    <h2>Graph</h2>
                    <div style={{ overflowX: 'auto', width: '100%' }}>
                        <Sales />
                    </div>
                </Grid>
                <Grid item xs={7} sm={5} style={{minWidth: '600px'}}>
                    <h2>Profits</h2>
                    <div style={{ overflowx: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '0px' }}>
                        <Piechart />
                    </div>
                </Grid>
            </Grid>
            </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default AdminDashboard
