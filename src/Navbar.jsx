import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {



  const handle=()=>{

    localStorage.removeItem('token')
    navigate('/login')
  
    }

    


  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg shadow-lg   `}>
  <div className="container-fluid">
 

  
  <Link className="navbar-brand  display-6 fw-bold text-info" to="/">
           Learning-Management-System
         </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
       
      <li className="nav-item active">
           <Link className="nav-link active"  to="/">
             Home
           </Link>
         </li>
        
         <li className="nav-item">
           <Link className="nav-link active " to="/about">
             About Us
           </Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link active" to="/contact">
             Contact Us
           </Link>
         </li>
         {localStorage.getItem('token')?<div className=" d-flex"><ul className='list-unstyled ms-3  me-4'>
         <li className="nav-item dropdown ">
         
         <a className="nav-link dropdown-toggle text-primary " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a> 
         
          <ul className="dropdown-menu me-5">
            <li><Link className="dropdown-item me-4" to="/profile"> <i className="bi bi-person-fill me-3 "></i>Profile</Link></li>
            <li><Link className="dropdown-item" to="/user-dashbaord"> <i className="bi bi-building-fill-dash me-3"></i>Dashbaord</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className='  fst-italic  text-decoration-none text-dark ms-4 fs-5' onClick={handle}>LogOut <i className="bi bi-box-arrow-right text-danger ms-2 fs-4"></i></Link></li>
          </ul>
        </li>
        
         </ul><img src="./malik.jpeg" alt=""   className='img-fluid rounded-circle ms-3 cursor-pointer' style={{width:"50px",height:"60px",cursor:"pointer"}}/> </div>:<> <Link className="btn btn-info text-light fw-bold fst-italic mx-1" to='login'>Login</Link>
        </>}
      
         
        
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
