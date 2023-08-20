import React, { useEffect, useRef } from 'react';
import { Row,Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

import Features from './Features';

import FeatureCourses from './FeatureCourses';
import UpcomingDeadlines from './UpcomingDeadlines';
import Events from './Events';
import { Link } from 'react-router-dom';


const HomePage = (props) => {
let ref = useRef('')
  const upcomingDeadlines = [
    {
      id: 1,
      course: "Mathematics",
      assignment: "Homework #3",
      dueDate: "2023-08-20T23:59:59Z",
    },
    {
      id: 2,
      course: "Science",
      assignment: "Lab Report",
      dueDate: "2023-08-25T23:59:59Z",
    },
    {
      id: 3,
      course: "React JS",
      assignment: "Quiz",
      dueDate: "2023-08-25T23:59:59Z",
    },
    // Add more deadlines here
  ];
  
const eventsData = [
  {
    id: 1,
    title: "LMS Workshop",
    date: "2023-08-15T10:00:00Z",
    location: "Online",
    description: "Join us for an interactive workshop on using the LMS effectively.",
  },
  {
    id: 2,
    title: "Guest Speaker Series",
    date: "2023-08-20T15:30:00Z",
    location: "Lecture Hall",
    description: "Renowned expert John Doe will speak about the latest trends in technology.",
  },
  // Add more events...
  {
    id: 10,
    title: "Networking Event",
    date: "2023-09-05T18:00:00Z",
    location: "Student Center",
    description: "Connect with fellow students and professionals in the networking event.",
  },
];
  const {color,bg}=props;
  
const totalStudents = 0;
const totalCourses = 0;
const speed=150;
let url;
useEffect(() => {

  let count=document.querySelectorAll('.data-numbers')
  let user=document.querySelector('.user-section');
 let observer=new IntersectionObserver((entries,observer)=>{
const [entry]=entries;
if (entry.isIntersecting==false) return;
observer.observe(user)


count.forEach((count)=> {
const update=()=>{
const targetNumber=Number(count.dataset.number);
const initialNumber=Number(count.innerText);
const incrementNumber=Math.trunc(targetNumber/speed)

if(initialNumber<targetNumber){
  count.innerText=Number(count.innerText)+incrementNumber;
setTimeout(() => {
  update()
}, 10);


}
}
update();
})
observer.unobserve(user)
 },{
  root:null,
  threshold:0
 }
 )
 observer.observe(user)



})

setTimeout(() => {
 ref= ref.current.classList
 ref.add('d-none') 
 console.log(ref);


}, 5000);

  return (
    <div>
      <header className='header-top  vh-50' id={'top-header'} >
    
      <div className=" container-fluid    text-center   g-0 " >

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      ><h1 className=' pt-5  pb-2 heading' style={{color:"#fff"}}>Welcome To Learning-Management-System!</h1>
      </motion.h2>
      <p className={`lead   text-${color} `}>A platform for online learning</p>
    {localStorage.getItem('token')?<button className=' btn btn-light px-3 ' ref={ref}>Get started  <span className=' text-danger fw-bold fs-5 ms-2'>&gt;</span></button>:  <><Link to='/signup'><button className=' btn btn-light mx-2 px-4'>Register &gt;</button></Link>
    <Link to='/login'>  <button className=' btn btn-dark px-4'>login &gt;</button></Link></> }
    <div id="carouselExampleCaptions" className="carousel slide">
 

</div>
      </div>
       
      </header>

   <FeatureCourses color={color}/>
<div className="container-fluid">
  <div className="row bg-light py-5">
  <div className="  col-md-5   mx-md-5 py-3 ">
<img src="./certifications.png" alt=""  className=' w-100 h-100'/>

  </div>
  <div className="col-md-5 pt-md-5">
  <h2 className=' text-center' style={{color:'#fa9191'}}>Certifications</h2>
  <p className=' lead  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident velit impedit mollitia in nostrum animi, unde voluptates vero saepe, eaque quasi corrupti sequi neque natus dolor?  </p>

  </div>
</div>



</div>

<div className="container">
<div className="row  my-5">
  <div className="col-md-6 pt-md-5">
<h2 className=' text-center ' style={{color:"#fa9191"}}>Flexiable Learning</h2>
<p className=' lead  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident velit impedit mollitia in nostrum animi, unde voluptates vero saepe, eaque quasi corrupti sequi neque natus dolor?  </p>
  </div>

  <div className="col-md-5">
<img src="./flexible.png" alt=""  className=' w-100 h-100' />

  </div>
</div>
</div>



      <section className="bg-info">
        <div className="container py-5">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-2 col-12 text-light align-items-center">
              {/* <i className='display-1 bi-award-fill bi-lg'></i> */}
              <i className="bi bi-award-fill display-2"></i>
            </div>
            <div className="col-lg-8 col-12 text-light pt-2">
              <p className="light-300">Don't just study for certification</p>
              <h3 className="light-300">Get ready to become a professional</h3>
            </div>
            <div className="col-lg-2 col-12 text-light align-items-center">
              {/* <i className='display-1 bi-trophy bi-lg'></i> */}
              <i className="bi bi-trophy-fill display-2 "></i>
            </div>
          </div>
        </div>
      </section>j

     <Features/>

<Events eventsData={eventsData}/>
<UpcomingDeadlines  deadlines={upcomingDeadlines}/>

     <section className="stats">
          <div className=' container-fluid'>
            <Row className="justify-content-center text-light py-5 user-section">
              <Col md={4}  className="text-center py-4">
                <div className="stat ">
                <i className="bi bi-person-add display-3"></i>
                  <h1 number={totalStudents}  data-number={1990} className='data-numbers'>0</h1>
                  <p className='  lead'> Students</p>
                </div>
              </Col>
              <Col md={4}  className="text-center py-4">
                <div className="stat">
                <i className="bi bi-person-add  display-3"></i>
                  <h1 number={0}  data-number={200}  className='data-numbers'>0</h1>
                  <p className=' lead'> Teachers</p>
                </div>
              </Col>
              <Col md={4}  className="text-center  py-4">
                <div className="stat">
                <i className="bi bi-book display-3"></i>
                  <h1 number={totalCourses}  data-number={200}  className='data-numbers'>0</h1>
                  <p className=' lead'> Courses</p>
                </div>
              </Col>
            </Row>
          </div>
        </section>

      
    </div>
  );
}

export default HomePage;
