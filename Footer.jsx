// 
import React from 'react';

// Define your Footer component
const Footer = () => {
  return (
    <>

    <footer className="footer mt-auto py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4  style={{color:"#fa9191"}}>About Us</h4>
            <p>Your LMS description goes here.</p>
          </div>
          <div className="col-md-3">
            <h4 style={{color:"#fa9191"}}>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a className=' text-decoration-none text-white' href="/"><span className='me-2'>&gt;</span>Home</a></li>
              <li><a className=' text-decoration-none text-white' href="/courses"><span className='me-2'>&gt;</span>Courses</a></li>
              <li><a className=' text-decoration-none text-white' href="/about"><span className='me-2'>&gt;</span>About</a></li>
              <li><a className=' text-decoration-none text-white' href="/contact"><span className='me-2'>&gt;</span>Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 style={{color:"#fa9191"}}>Contact Us</h5>
            <ul  className="list-unstyled">
              <li><a href="" className='text-decoration-none text-white'><span className='me-2'>&gt;</span> Email </a></li>
              <li><a href="" className='text-decoration-none text-white'><span className='me-2'>&gt;</span> Phone </a></li>
              <li><a href="" className='text-decoration-none text-white'><span className='me-2'>&gt;</span> Address </a></li>
            </ul>
          
          </div>
          <div className="col-md-3">
            <h5 style={{color:"#fa9191"}}>Social Media</h5>
            <ul className="list-unstyled">
              
               <li><a className=' text-decoration-none text-white' href="#"><i className="fab mx-2   fa-facebook"></i> Facebook</a></li> 
               <li><a className=' text-decoration-none text-white' href="#"><i className="fab mx-2 fa-twitter"></i> Twitter</a></li> 
               <li><a className=' text-decoration-none text-white' href="#"><i className="fab mx-2 fa-instagram"></i> Instagram</a></li> 
            </ul>
          </div>
        </div>
      </div>
    </footer>
      <div className="text-center py-2  bg-dark  text-white">
        <p>&copy; {new Date().getFullYear()} Your LMS. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
