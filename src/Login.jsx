// src/components/SignUpPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const SignUpPage = () => {
  let navigate=useNavigate();
 
  const [data, setdata] = useState({
   
    email:'',
   password:""


  })
  axios.defaults.withCredentials=true;
  const Change=(e)=>{

    setdata({...data,[e.target.name]:e.target.value})
      }


      const handleSignUp = async(e) => {
      e.preventDefault();
     const response =await fetch('https://localhost:3000/api/auth/login', {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
       
      },
     
      body: JSON.stringify({email:data.email,password:data.password}),
    });
        
  const resp=await response.json(); 
  if (resp.success) {
    localStorage.setItem('token',resp.token);
    navigate('/');


  }


    setdata({
   
      email:'',
     password:""
  
  
    })
  };

  return (
    <section className="signup-page   vh-100">
      <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-12 text-center mt-5">
        <img src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png" alt="" className=' text-center'  style={{width:'100px'}}/>
        </div>
          <div className="col-md-6 col-lg-8">
        
          <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      ><h2 className="text-center mb-5 mt-5 " style={{color:"#fa9191"}}>Your Learning Starts Here – Log In to Begin </h2></motion.h1>
            <form onSubmit={handleSignUp}>
             
            <div className="form-floating my-5">
  <input type="email" className="form-control form-control-lg" id='name'  placeholder='name' required onChange={ Change} value={data.email } name='email'/>
  <label htmlFor="email"  >Your Email*</label>
</div>
              
              <div className="form-floating my-5">
  <input type="password" className="form-control form-control-lg" id='name'  placeholder='name' required onChange={ Change} value={data.password } name='password'/>
  <label htmlFor="email"  >Your Password*</label>
</div>

  
            
              <button type="submit" className="btn btn-info text-white px-5 ms-3 rounded rounded-4">
                Login
              </button>
            </form>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
