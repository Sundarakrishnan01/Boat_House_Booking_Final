import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

const About = () => {
    return (
        
        <div style={{backgroundImage: "url('/src/assets/Images/about.jpg')", backgroundSize: 'cover', paddingBottom: '5%'}}>
            <h1 style={{textAlign: 'center', marginBottom: '5%'}}>About</h1>
            <div style={{marginLeft: '5%', marginRight: '5%'}}>

    <Grid container spacing={2}>
        <Grid item xs={7} style={{minWidth: '300px'}}>
            <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%', backgroundColor: 'lightyellow'}}>
                <h1 style={{marginBottom: '2%', fontFamily: 'fantasy'}}>Mission Statement</h1>
                <h4>Our misssion is to provide customers with utmost qualities and service in Boat House, also providing unbeatable discounts</h4>
            </Card>
        </Grid>
        <Grid item xs={5} style={{minWidth: '300px'}}>
            <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%', backgroundColor: 'lightgreen'}}>
                <h1 style={{marginBottom: '2%', fontFamily: 'fantasy'}}>Vision Statement</h1>
                <h4>Our Vidion is to provide customers with utmost qualities and service in Boat House, also providing unbeatable discounts</h4>
            </Card>
        </Grid>
    </Grid>
    <Grid container spacing={2} style={{marginTop: '2%', minWidth: '300px'}}>
        <Grid item xs={4} style={{minWidth: '300px'}}>
            <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%', backgroundColor:'lightgray'}}>
                <h1>Target Market Value</h1>
                <img src="/src/assets/Images/boat2.jpg" alt="Not avail" style={{height: '250px', padding: '5px'}}/>
            </Card>
        </Grid>
        <Grid item xs={8} style={{minWidth: '300px'}}>
            {/* <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%'}}>
                <h1>Second</h1>
            </Card> */}
             <Grid container direction="column" justifyContent="center" alignItems="center" style={{minWidth: '300px'}}>
                        <Grid item xs={8} style={{minWidth: '100px'}}>
                        <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%'}}>
                            {/* <img src="/src/assets/Images/corevalues1.png" alt="Not avail"/> */}
                           {/* <h1>Three</h1> */}
                           {/* <div style={{display: 'flex'}}> */}
                           <Grid container spacing={4} style={{minWidth: '100px'}}>
                            <Grid item xs={2} style={{minWidth: '150px'}}>
                                <img src="/src/assets/Images/innovation.png" alt="not avail"/>
                            </Grid>
                            <Grid item xs={2} style={{minWidth: '150px'}}>
                                <img src="/src/assets/Images/creativity.png" alt="not avail"/>
                            </Grid>
                            <Grid item xs={2} style={{minWidth: '150px'}}>
                                <img src="/src/assets/Images/quality.png" alt="not avail"/>
                            </Grid>
                            <Grid item xs={2} style={{minWidth: '150px'}}>
                                <img src="/src/assets/Images/trust.png" alt="not avail"/>
                            </Grid>
                            <Grid item xs={2} style={{minWidth: '150px'}}>
                                <img src="/src/assets/Images/clients.png" alt="not avail"/>
                            </Grid>
                            {/* <Grid item xs={2} style={{minWidth: '100px'}}>
                                <img src="/src/assets/Images/clients.png" alt="not avail"/>
                            </Grid> */}
                           </Grid>
 
                           {/* </div> */}

                        </Card>
                        </Grid>
                        <Grid item xs={12} sm={8} style={{ marginTop: '40px', minWidth: '200px', display: 'flex', justifyContent: 'center' }}>
    <Card border="light" className="bg-white shadow-sm mb-4" style={{ padding: '2%', width: '100%', maxWidth: '600px' }}>
        <h3 style={{ textAlign: 'center', margin: 0 }}>&copy; 2024 BoatHouse. All rights reserved.</h3>
    </Card>
</Grid>
                    </Grid>
        </Grid>
    </Grid>
        </div>
        </div>
    )
}

export default About
