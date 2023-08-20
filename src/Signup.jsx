// src/components/SignUpPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const SignUpPage = () => {
  let navigate=useNavigate();
 
  const [data, setdata] = useState({
  name:'',
  email:'',
  password:"",
  cpassword:"",
  file:""


  })
  axios.defaults.withCredentials=true;
  const Change=(e)=>{

    setdata({...data,[e.target.name]:e.target.value})
    
  
      }
  const handleSignUp =async (e) => {
    e.preventDefault();
    
    
    if (data.cpassword!==data.password) {
     alert('Password does not match...')      
    }
    
    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
       
      },
     
      body: JSON.stringify({name:data.name,email:data.email,password:data.password,file:data.file}),
    });
     
  const resp=await response.json(); 
  if (resp.success==true) {
    localStorage.setItem('token',resp.token);
    navigate('/');


  }
  console.log(resp);
  
   setdata({
    name:"",
    email:'',
    password:"",
    cpassword:"" ,
    file:""
  })


  };

  return (
    <section className="signup-page   ">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-8">
          <div className="col-md-12 text-center mt-5">
          <img src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png" alt="" className=' text-center'  style={{width:'100px'}}/>
          </div>
          <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      ><h2 className="text-center mb-3 mt-5 " style={{color:"#fa9191"}}>Welcome to Lifelong Learning – Register Now</h2></motion.h1>
            <form onSubmit={handleSignUp}>
             
            <div className="form-floating my-4">
  <input type="text" className="form-control form-control-lg" id='name'  placeholder='name' required onChange={ Change} value={data.name } name='name'/>
  <label htmlFor="email"  >Your Name*</label>
</div>
    <div className="form-floating my-4">
  <input type="email" className="form-control form-control-lg" id='name'  placeholder='name' required onChange={ Change} value={data.email } name='email'/>
  <label htmlFor="email"  >Your Email*</label>
</div> 
<div className="form-floating my-4">
  <input type='file' className="form-control form-control-lg" id='name'  placeholder='name' required  name='file'  onChange={ Change} value={data.file}/>
  <label htmlFor="profile Image"  >Your Image*</label>
</div>
              
              <div className="form-floating my-4">
  <input type="password" className="form-control form-control-lg" id='name'  placeholder='name' required onChange={ Change} value={data.password } name='password'/>
  <label htmlFor="email"  >Your Password*</label>
</div>
        <div className="form-floating my-4">
  <input type="password" className="form-control form-control-lg" id='name'  placeholder='name' required onChange={ Change} value={data.cpassword } name='cpassword'/>
  <label htmlFor="email"  >Confirm Password*</label>
</div>

  
              
              <button type="submit" className="btn btn-info text-white px-5 ms-3 mb-5 rounded rounded-4">
                SignUp
              </button>
            </form>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
