import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';

function createData(id, boattype, capacity, incharge, price) {
  return { id, boattype, capacity, incharge, price };
}

const columns = [
  { id: 'id', label: 'TicketId', minWidth: 170 },
  { id: 'boatId', label: 'boatId', minWidth: 100 },
  { id: 'type', label: 'type', minWidth: 100 },
  {
    id: 'date',
    label: 'date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'avail',
    label: 'avail',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

];

const rows = [
  createData('Gokul', 'cruise', '26-02-2024', '8.00 am', 4000),
  createData('Sriram', 'non cruise', '26-02-2024', '8.00 am', 4300),
  createData('Sundar', 'pantoon', '26-02-2024', '8.00 am', 6000),
  createData('Srihari', 'cruise', '26-02-2024', '8.00 am', 4500),
  createData('Surya', 'pantoon', '26-02-2024', '8.00 am', 3900),
  createData('Surya', 'pantoon', '26-02-2024', '8.00 am', 3900),
  createData('Surya', 'pantoon', '26-02-2024', '8.00 am', 3900),
  createData('Surya', 'pantoon', '26-02-2024', '8.00 am', 3900),
  createData('Surya', 'pantoon', '26-02-2024', '8.00 am', 3900),
  createData('Surya', 'pantoon', '26-02-2024', '8.00 am', 3900),
  createData('Surya', 'pantoon', '26-02-2024', '8.00 am', 3900),
  
  createData('Surya', 'pantoon', '26-02-2024', '8.00 am', 3900),
  
];

const Ticket = () => {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [data,setData] = useState([]);


    useEffect(() => {
      axios.get('http://127.0.0.1:8081/ticket/get').then(response => {
        console.log(response.data)
        setData(response.data);
      })
    },[])
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    return (
        <div>
            <Button variant="contained" color='secondary' onClick={()=>navigate('/admin/addticket')}>Add Ticket</Button>
            <h1>Ticket Details</h1>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', marginLeft: '0%'}}>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table"> */}
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow style={{backgroundColor: 'lightgray'}}>
            <TableCell style={{minWidth: 100}}>Ticket ID</TableCell>
            <TableCell align="right" style={{minWidth: 100}}>Boat Id</TableCell>
            <TableCell align="right" style={{minWidth: 100}}>Boat Type</TableCell>
            <TableCell align="right" style={{minWidth: 100}}>Date</TableCell>
            <TableCell align="right" style={{minWidth: 100}}>Ticket Available</TableCell>
            <TableCell align="center" style={{minWidth: 100}}>View Details</TableCell>
            <TableCell align="center" style={{minWidth: 100}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
              <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right"><Button variant="contained" color='secondary'>View Booking</Button></TableCell>
              <TableCell align="right"><Button variant="contained">Edit Booking</Button></TableCell>
            </TableRow>
          ))} */}
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={data.id}>
                    {columns.map((column) => {
                      const value = data[column.id];
                      // console.log("Column" ,column.id);
                      // setTemp(column.id);
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell align="right"><Button variant="contained" color='secondary' onClick={()=>navigate(`/admin/viewTicket/${data.id}`)}>View Ticket</Button></TableCell>
                <TableCell align="right"><Button variant="contained" onClick={()=>navigate(`/admin/editTicket/${data.id}`)}>Edit Ticket</Button></TableCell>
                  </TableRow>
                );
              })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Paper>
          </div>
        </div>
    )
}

export default Ticket
