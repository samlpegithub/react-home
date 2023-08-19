// src/PolicySecurity.js

import React from 'react';
import { Container } from 'react-bootstrap';

const PolicySecurity = () => {
  return (
    <section className="policy-security-section py-5">
      <Container>
        <h2 className=' text-center ' style={{color:"#fa9191"}}>Policy and Security</h2>
      <div className="my-4">
      <h3 className=' text-info'>Terms of Use</h3>
        <p>
          Welcome to our Learning Management System (LMS). By accessing and using our LMS, you agree to comply with our terms of use. [Add specific terms of use here.]
        </p>
      </div>
       <div className="my-4">
       <h3  className=' text-info'>Privacy Policy</h3>
        <p>
          Your privacy is important to us. Our privacy policy outlines how we collect, use, and protect your personal information. [Add details about your privacy policy.]
        </p>
       </div>
        <div className="my-4">
        <h3  className=' text-info'>Security Measures</h3>
        <p>
          We take security seriously. Our LMS employs advanced security measures to protect your data and ensure a safe learning environment. [Provide information about security measures implemented.]
        </p>
        </div>
      </Container>
    </section>
  );
};

export default PolicySecurity;
