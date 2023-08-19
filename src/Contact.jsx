import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
const ContactUs = () => {
  const [data, setdata] = useState({
    name:'',
    email:'',
    phone:'',
    subject:'',
    message:"",
    address:"",


  })
  const Change=(e)=>{

setdata({...data,[e.target.name]:e.target.value})


  }
  const handle=(e)=>{
e.preventDefault();
console.log(data);
setdata({
  name:'',
  email:'',
  phone:'',
  subject:'',
  message:"",
  address:"",


})


  }
  return (
    <Container className="my-5 mt-5">
       <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
style={{marginBottom:"-0.5rem"}}      ><h2 className=' text-center mt-3' style={{color:"#fa9191"}}>Have a Question? Let's Talk – Contact Us Today</h2></motion.h1>
     <form action="" onSubmit={handle}>
      
<div className="container">
  <div className="row">
    <div className="col-md-6">
    <div className="form-floating my-3">
  <input type="text" className="form-control form-control-lg" id='name'  placeholder='name' required onChange={ Change} value={data.name } name='name'/>
  <label htmlFor="email"  >Your Name*</label>
</div>
    </div>
     <div className="col-md-6 my-3">
    <div className="form-floating">
  <input type="eamil" className="form-control" placeholder=' Your email' name='email' onChange={Change} value={data.email}/>
  <label htmlFor="email" className=' form-label'>Your Email*</label>
</div>
    </div>
     <div className="col-md-6 my-3">
    <div className="form-floating">
  <input type="number" className="form-control" placeholder='Your phone' name='phone'  onChange={Change} value={data.phone}/>
  <label htmlFor="phone" className=' form-label' >Your Phone*</label>
</div>
    </div>
    <div className="col-md-6 my-3">
    <div className="form-floating">
  <input type="text" className="form-control"  name='address' placeholder='address' onChange={Change} value={data.address}/>
  <label htmlFor="address" className=' form-label'>Your Address</label>
</div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12 my-3">
    <div className="form-floating">
  <input type="text" className="form-control"  placeholder='subject' name='subject' onChange={Change} value={data.subject}/>
  <label htmlFor="subject" className=' form-label'>Subject</label>
</div>

    </div>
      <div className="col-md-12 my-3">
      <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} onChange={Change} value={data.message} name='message'></textarea>
  <label htmlFor="floatingTextarea2">Your Message*</label>
</div>

    </div>
  </div>
<button className=' btn btn-info text-white ms-3 rounded rounded-4   px-4'>Send Message</button>
</div>
     </form>


</Container>      
  );
};

export default ContactUs;
