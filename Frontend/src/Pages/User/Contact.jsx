import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GestureIcon from '@mui/icons-material/Gesture';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Contact = () => {
    return (
        <div >
            {/* <h1>Contact</h1> */}
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Grid container spacing={2} style={{backgroundColor: 'lightgray'}}>

                    <Grid item xs={8}  style={{minWidth: '500px'}}>
                    <div style={{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{display: 'block'}}>
                        <div>
                            <h1 style={{marginTop: '10%', fontSize: '40px'}}>Get in Touch</h1>
                        </div>
                        <div>
                            <h3 style={{ paddingBottom: '10%'}}>Want to get in touch?, we Love to hear from you. Here is how you can reach us</h3>
                        </div>
                        </div>
                    </div>
                    </Grid>
                    <Grid item xs={4}  style={{minWidth: '500px'}}>
                        {/* <h1>Again</h1> */}
                <img src="/src/assets/Images/home.jpg" alt="Not avail" style={{width: '100%',top: 0, borderTopLeftRadius: '100px', borderBottomLeftRadius: '200px'}}/>
                    </Grid>
                </Grid>
            </div>
            <div style={{display: 'flex'}}>
            
            <Grid container spacing={2} style={{backgroundColor: 'white',  paddingLeft: '5%', minWidth: '400px' }}>

            <Grid item xs={6}  style={{minWidth: '400px'}}>

                <div style={{height: "300px", width: '400px', position: 'relative', left: '10%', bottom: '100px', zIndex: '1'}}>
                    <Card sx={{ maxWidth: "100%"}}>
                        <CardActionArea>
                            
                        <CardContent>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <CallIcon sx={{fontSize: '60px'}}/>
                            </div>
                        <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
                                Talk To Customer Service
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{paddingTop: '40px'}}>
                                Interested in Boathouse Booking? just Pick up the phone
                                to chat with a member of our Service Team.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions style={{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                            <Button size="small" color="primary">
                            +91 9344704998
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </Grid>
            <Grid item xs={6}  style={{minWidth: '400px'}}>

                <div style={{height: "300px", width: '400px', position: 'relative', left: '10%', bottom: '100px', zIndex: '1'}}>
                <Card sx={{ maxWidth: "100%" }}>
                        <CardActionArea>
                            
                        <CardContent>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <QuestionAnswerIcon sx={{fontSize: '60px'}}/>
                            </div>
                        <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
                                Get Connected With us!!!
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary" style={{paddingTop: '40px'}}>
                                Interested in Boathouse Booking? just Pick up the phone
                                to chat with a member of our Service Team.
                            </Typography> */}
                            <div style={{display: 'flex'}}>
                                <div >
                                    <InstagramIcon sx={{fontSize: '60px'}}/>
                                </div>
                                <div>
                                    <FacebookIcon sx={{fontSize: '60px'}}/>
                                </div>
                                <div>
                                    <GestureIcon sx={{fontSize: '60px'}}/>
                                </div>
                                <div>
                                    <XIcon sx={{fontSize: '60px'}}/>
                                </div>
                                <div>
                                    <LinkedInIcon sx={{fontSize: '60px'}}/>
                                </div>
                                <div>
                                    <WhatsAppIcon sx={{fontSize: '60px'}}/>
                                </div>
                            </div>
                        </CardContent>
                        </CardActionArea>
                        <CardActions style={{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                            <Button size="small" color="primary">
                            Get Connected
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default Contact
