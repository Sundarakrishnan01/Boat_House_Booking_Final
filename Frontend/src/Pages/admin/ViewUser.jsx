import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TablePagination from '@mui/material/TablePagination';

function createData(email, firstname,lastname, username,address,birthday, city, gender, phoneno,residenttype,zipcode) {
  return { email, firstname,lastname,username, address,birthday,  city, gender,phoneno, residenttype,zipcode};
}

const columns = [
  { id: 'email', label: 'email', minWidth: 170 },
  { id: 'firstname', label: 'firstname', minWidth: 170 },
  { id: 'lastname', label: 'lastname', minWidth: 170 },
  { id: 'username', label: 'username', minWidth: 100 },
  { id: 'gender', label: 'gender', align: 'center',minWidth: 100 },

  {
    id: 'birthday',
    label: 'birthday',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'phoneno',
    label: 'phoneno',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'address',
    label: 'address',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'residenttype',
    label: 'residenttype',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'city',
    label: 'city',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'zipcode',
    label: 'zipcode',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

const rows = [
  createData('Gokul', 'cruise', '26-02-2024', '8.00 am', 4000),
  createData('Sriram', 'non cruise', '26-02-2024', '8.00 am', 4300),
  createData('Sundar', 'pantoon', '26-02-2024', '8.00 am', 6000),
  createData('Srihari', 'cruise', '26-02-2024', '8.00 am', 4500),
  createData('Surya', 'pantoon', '26-02-2024', '8.00 am', 3900),
];

const ViewUser = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(()=>{
    axios.get('http://127.0.0.1:8081/user').then(response => {
      console.log(response.data);
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
        <div >
            <h1>Registered User</h1>
            {/* <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', marginLeft: '0%'}}>

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor: 'lightgray'}}>
            <TableCell>User Email</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Phone No</TableCell>
            <TableCell align="right">No of boats booked</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="center">View User</TableCell>
            <TableCell align="center">Edit User</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
              <TableRow
              key={row.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.phno}</TableCell>
              <TableCell align="right">{row.booked}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right"><Button variant="contained" color='secondary' onClick={()=>navigate('/admin/viewUserDetails')}>View User</Button></TableCell>
              <TableCell align="right"><Button variant="contained" onClick={()=> navigate("/admin/editUser")}>Edit User</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </div> */}
          {/* <h1>Boat Details</h1> */}

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', marginLeft: '0%'}}>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table"> */}
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow style={{backgroundColor: 'lightgray'}}>
            <TableCell style={{minWidth: 100}}>Email</TableCell>
            <TableCell align="right" style={{minWidth: 100}}>First Name</TableCell>
            <TableCell align="right" style={{minWidth: 100}}>Last Name</TableCell>
            <TableCell align="right" style={{minWidth: 100}}>User Name</TableCell>
            <TableCell align="right" style={{minWidth: 100}}>Gender</TableCell>
            <TableCell align="right" style={{minWidth: 100}}>Birthday</TableCell>
            <TableCell align="right" style={{minWidth: 100}}>Phone no</TableCell>
            <TableCell align="right" style={{minWidth: 100}}>Address</TableCell>
            <TableCell align="right" style={{minWidth: 100}}>Resident Type</TableCell>
            <TableCell align="center" style={{minWidth: 100}}>City</TableCell>
            <TableCell align="center" style={{minWidth: 100}}>Zipcode</TableCell>
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
                    <TableCell align="right"><Button variant="contained" color='secondary' onClick={()=>navigate(`/admin/viewUserDetails/${data.email}`)}>View User</Button></TableCell>
                <TableCell align="right"><Button variant="contained" onClick={()=>navigate(`/admin/editUser/${data.email}`)}>Edit User</Button></TableCell>
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

export default ViewUser
