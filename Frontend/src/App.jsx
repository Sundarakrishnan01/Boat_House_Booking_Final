import { BrowserRouter, Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import { lazy } from 'react'
import LazyLayout from './Components/LazyLayout'
const LazyLogin = lazy(()=> import("./Pages/auth/Login"))
const LazySignup = lazy(()=> import("./Pages/auth/Signup"))
const LazyHome = lazy(() => import("./Pages/User/Home"))
const LazyBooking = lazy(() => import("./Pages/User/Booking"))
const LazyProfile = lazy(() => import("./Pages/User/Profile"))
import UserLayout from './Pages/User/UserLayout'
import Footer from './Components/Footer'
import { Element } from "react-scroll";
const LazyAbout = lazy(() => import("./Pages/User/About"))
import Grid from '@mui/material/Grid';
const LazyContact = lazy(() => import("./Pages/User/Contact"))
import AdminLayout from './Pages/admin/AdminLayout'
// import AdminHome from './Pages/admin/AdminHome'
const LazyAdmin = lazy(() => import("./Pages/admin/Admin"))
const LazyDashboard = lazy(()=> import("./Pages/admin/AdminDashboard"))
const LazyAdminBooking = lazy(()=> import("./Pages/admin/BookingHistory"))
const LazyUserDetails = lazy(() => import("./Pages/admin/ViewUser"))
const LazyBoat = lazy(() => import("./Pages/admin/Boats"))
const LazyAddBoat = lazy(() => import("./Pages/admin/AddBoat"))
const LazyAddTicket = lazy(() => import("./Pages/admin/AddTicket"))
const LazyViewBoat = lazy(()=> import("./Pages/admin/ViewBoat"))
const LazyEditBoat = lazy(()=>import("./Pages/admin/EditBoat"))
const LazyViewUserDetails = lazy(() => import("./Pages/admin/viewUser1"))
const LazyEditUser = lazy(() => import("./Pages/admin/EditUserDetails"))
const LazyBookingType = lazy(() => import('./Pages/User/Booking2'))
const LazyTicket = lazy(() => import('./Pages/admin/Ticket'));
const LazyViewTicket = lazy(() => import('./Pages/admin/ViewTicket'))
const LazyEditTicket = lazy(() => import('./Pages/admin/EditTicket'))
const LazyEditBooking = lazy(() => import('./Pages/admin/EditBooking'))

import { useEffect } from "react";
import { useState } from "react";
import Login from './Pages/auth/Login'
const UserRoutes = () => {
  return(
    <UserLayout>
      <Routes>
        <Route path="/home" element={<Element name="home-section">
                    <Home />
                  </Element>}/>
        {/* <Route path="/home" element={<LazyLayout component={LazyHome}/>}/> */}
        <Route path="/booking" element={<LazyLayout component={LazyBooking}/>}/>
        <Route path="/booking/type/:id" element={<LazyLayout component={LazyBookingType}/>}/>
        <Route path="/profile" element={<LazyLayout component={LazyProfile}/>}/>
        <Route path="/about" element={<LazyLayout component={LazyAbout}/>}/>
        <Route path="/contact" element={<LazyLayout component={LazyContact}/>}/>
        <Route path="/editUser" element={<LazyLayout component={LazyProfile}/>}/>
        <Route path="/Logout" element={<Navigate to="/"/>}/>
      </Routes>
      <Footer/>
    </UserLayout>
  )
}

const AdminRoutes = () => {
  return (
    <AdminLayout>
    <Routes>
      <Route path="/home" element={<LazyLayout component={LazyAdmin}/>}/>
      {/* <Route path="/Bookings" element={<LazyLayout component={LazyAdmin}/>}/> */}
      <Route path="/DashBoard" element={<LazyLayout component={LazyDashboard}/>}/>
      <Route path="/Bookings" element={<LazyLayout component={LazyAdminBooking}/>}/>
      <Route path="/Users" element={<LazyLayout component={LazyUserDetails}/>}/>
      <Route path="/Boats" element={<LazyLayout component={LazyBoat}/>}/>
      <Route path="/addboat" element={<LazyLayout component={LazyAddBoat}/>}/>
      <Route path="/addticket" element={<LazyLayout component={LazyAddTicket}/>}/>
      <Route path="/viewboat/:id" element={<LazyLayout component={LazyViewBoat}/>}/>
      <Route path="/viewTicket/:id" element={<LazyLayout component={LazyViewTicket}/>}/>
      <Route path="/editBooking/:id" element={<LazyLayout component={LazyEditBooking}/>}/>
      <Route path="/editboat/:id" element={<LazyLayout component={LazyEditBoat}/>}/>
      <Route path="/editTicket/:id" element={<LazyLayout component={LazyEditTicket}/>}/>
      <Route path="/viewUserDetails/:email" element={<LazyLayout component={LazyViewUserDetails}/>}/>
      <Route path="/editUser/:email" element={<LazyLayout component={LazyEditUser}/>}/>
      <Route path="/ticket" element={<LazyLayout component={LazyTicket}/>}/>
      <Route path="/Logout" element={<Navigate to="/"/>}/>
    </Routes>
    {/* <Footer/> */}
  </AdminLayout>
)
}
function App() {
  // const [count, setCount] = useState(0)
  // const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(true);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      // No token found,set the setLoginStatus to false
      setLoginStatus(false);
    } else {
      // Token found, check if it's expired
      const tokenExpiration = sessionStorage.getItem("tokenExpiration");
      if (tokenExpiration && Date.now() > tokenExpiration) {
        setLoginStatus(false);
      } else {
        setLoginStatus(true);
      }
    }
  }, []);

  // if (!loginStatus) {
  //   return <Login setLoginStatus={setLoginStatus} />;
  // }


  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        {/* <Route path="/" element={<LazyLayout component={LazyLogin}/>}/> */}
        <Route path="/" element={<Login setLoginStatus={setLoginStatus}/>}/>
        <Route path="/signup" element={<LazyLayout component={LazySignup}/>}/>
        <Route path="/user/*" element={ loginStatus ? <UserRoutes/> : <Login setLoginStatus={setLoginStatus}/>}/>
        <Route path="/admin/*" element={ loginStatus ? <AdminRoutes/> : <Login setLoginStatus={setLoginStatus}/>}/>
        {/* {loginStatus ? (
            <>
              <Route path="/user/*" element={<UserRoutes />}/>
              <Route path="/admin/*" element={<AdminRoutes />}/>
            </>
          ) : (
            <Navigate to="/" />
          )} */}
      </Routes>
      
    </div>
    
     </BrowserRouter>
   
  )
}

const Home = () => {
  return(
    <>
      <LazyHome/>
      <LazyAbout/>
      <LazyContact/>
    </>
  )
}


export default App
