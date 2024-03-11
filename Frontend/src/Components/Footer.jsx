// import React from "react";
import "../assets/css/Footer.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import $ from 'jquery';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// const Footer = () => {
//   return (
//          <div className="footer-clean">
//         <footer>
//             <div className="container">
//                 <div className="row justify-content-center">
//                     <div className="col-sm-4 col-md-3 item">
//                         <h3>Services</h3>
//                         <ul>
//                             <li><a href="#">Web design</a></li>
//                             <li><a href="#">Development</a></li>
//                             <li><a href="#">Hosting</a></li>
//                         </ul>
//                     </div>
//                     <div className="col-sm-4 col-md-3 item">
//                         <h3>About</h3>
//                         <ul>
//                             <li><a href="#">Company</a></li>
//                             <li><a href="#">Team</a></li>
//                             <li><a href="#">Legacy</a></li>
//                         </ul>
//                     </div>
//                     <div className="col-sm-4 col-md-3 item">
//                         <h3>Careers</h3>
//                         <ul>
//                             <li><a href="#">Job openings</a></li>
//                             <li><a href="#">Employee success</a></li>
//                             <li><a href="#">Benefits</a></li>
//                         </ul>
//                     </div>
//                     <div className="col-lg-3 item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a>
//                         <p className="copyright">Company Name © 2018</p>
//                     </div>
//                 </div>
//             </div>
//         </footer>
        
//     </div>
//   );
// };

// export default Footer;

// import React from 'react';


// const Footer = () => {
//   return (
//     <div>
//     <footer className="container-footer">
     
//         <p>&copy; 2024 Boat House Boooking. All rights reserved.</p>

//     </footer>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
// import "/src/assets/Css/footer.css";
const Footer = () => {
  return (
    <footer className="footer" style={{position: 'relative'}}>
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-section-title">For Businesses</h3>
          <ul className="footer-links">
            <li><a href="#">Feature Overview</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Case Studies</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Resources</h3>
          <ul className="footer-links">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Partners</h3>
          <ul className="footer-links">
            <li><a href="#">Become a Partner</a></li>
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">Partner Resources</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Contact Us</h3>
          <ul className="footer-links">
            <li>Email: osama@alquada.com</li>
            <li>Phone: +94 9234567890</li>
            <li>Address: 123 Dubai Street, Kabul, Afganisthan</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Boat House Booking System. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;