// src/components/AboutUsPage.js
import React from 'react';
import { motion } from 'framer-motion';
import Features from './Features';
import SystemRequirements from './SystemRequirements ';
import PolicySecurity from './PolicySecurity';
const AboutUsPage = (props) => {
  const {color,bg}=props;
let width=0;
window.screen.width==1366?width="100%":width="100%"

return (
<>
<section className="about-us-page  ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
          <figure className="img-fluid">
                <img src='./about.svg' alt="banner"/>
              </figure>
          </div>
          <div className="col-lg-6">
          <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
       <h1 className=" mb-4 typo-space-line" style={{color:"#fa9191"}}>Welcome to Our LMS</h1></motion.h1>
            <p className={`lead text-${color} mt-5`}>
              Our Learning Management System (LMS) is dedicated to providing a seamless and
              interactive learning experience for students and professionals alike. With a focus on
              innovation and personalized education, we empower individuals to achieve their
              learning goals and unlock their potential.
            </p>
            <p className=' lead'>
              Whether you're looking to enhance your skill set, embark on a new career path, or
              simply explore your passions, our platform offers a diverse selection of courses
              taught by industry experts.
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-6 mb-4">
            <h3 className=' text-info'>Our Mission</h3>
            <p className={`  lead text-${color}`}>
              Our mission is to democratize education by making high-quality learning accessible
              to all. We aim to bridge the gap between learners and experts, creating a vibrant
              community of knowledge seekers and sharers.
            </p>
          </div>
          <div className="col-lg-6">
            <h3 className=' text-info'>Our Team</h3>
            <p className={` lead mb-4 text-${color}`}>
              Our team is comprised of passionate educators and technologists who are committed to
              reimagining the learning experience. Together, we're dedicated to fostering an
              inclusive and supportive environment that fosters growth and empowers learners to
              thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
<section>
<div className=" container">
  <div className="row">


<div className="  col-md-5 ">
<iframe className=' rounded ' width={width}   height="315" src="https://www.youtube.com/embed/ezbJwaLmOeM" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>  
<div className="col-md-6 ">
  <p className='lead' >
LMS stands for <p className=' text-info d-inline '>Learning Management System.</p> It is a software application or platform designed to facilitate the management, delivery, tracking, and assessment of educational content and training programs. LMSs are commonly used in educational institutions, businesses, and organizations to offer online courses, training modules, and learning experiences.</p>
</div>
</div>
</div>
</section>
<section>
  <Features/>
</section>
<section>
  <SystemRequirements/>
</section>
<section>
  <PolicySecurity/>
</section>
    </>
  );
};

export default AboutUsPage;
