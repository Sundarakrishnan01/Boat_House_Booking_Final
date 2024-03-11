import React from 'react'
import Card from '@mui/material/Card';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const RecentBooking =()=> {
    return (
        <div>
            {/* <h1>Recent Booking</h1> */}
                <h1>Upcoming Booking</h1>
            <Card border="light" className="text-center p-0 mb-4" style={{display: 'flex', marginTop: '3%'}}>
                <div>

                <TableContainer component={Paper}>
                    <TableHead>
                        <TableRow>
                            <TableCell>BoatHouse Type</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>

                    <TableCell component="th" scope="row">
                        Cruise BoatHouse
                    </TableCell>
                    <TableCell align="right">25/02/2024</TableCell>
                    <TableCell align="right">5500</TableCell>
                        </TableRow>
                    </TableBody>
                </TableContainer>
                
                </div>
            </Card>
        </div>
    )
}

export default RecentBooking
