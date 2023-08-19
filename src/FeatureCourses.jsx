import React from 'react'

import { Row ,Col} from 'react-bootstrap';
import Card from './Card';

const FeatureCourses = () => {
   


    const data = [
      {
        id: 1,
        name: 'Jane Smith',
        course: 'React',
        text: 'I loved the interactive coding exercises in the course. It helped me grasp the concepts better.',
        image:'download.png'
      },
      {
        id: 2,
        name: 'John Doe',
        course: 'Javascript',
        text: "The course content was well-structured and easy to follow. I'm seeing results already!",
        image:"./down.png"
      },
      {
        id: 3,
        name: 'Sarah Johnson',
        course: 'Node',
        text: 'The real-world projects and datasets made this course a fantastic learning experience.',
        image:'./node.png'
      },
      {
        id: 4,
        name: 'Michael Brown',
        course: 'Next',
        text: 'The hands-on assignments improved my design skills significantly.',
        image:"./next.jfif"
      },
     
    ]
    return (
    <div>
         <section className="py-5 ">
        <div className=' container'>
      <div className=" d-flex">
      <h2 className='  text-center    ms-4' style={{color:"#fa9191"}}>Featured Courses</h2> 
          <button className='btn btn-dark  text-light ms-auto'>See All </button>
      </div>
        <div className="row py-3">
        {data.map((data)=><>
        
        <div className="col-md-3 my-3">
         <Card course={data.course} image={data.image} name={data.name}  key={data.id}/>
          </div>
         </>
         )} 
        </div>
         

           <div className=" d-flex mt-4">
      <h2 className='  text-center    ms-4' style={{color:"#fa9191"}}>Popular Courses</h2> 
          <button className='btn btn-dark  text-light ms-auto'>See All </button>
      </div>
        <div className="row py-3">
        {data.map((data)=><><div className="col-md-3 my-3" >
         <Card course={data.course} image={data.image} name={data.name} key={data.id}/>
          </div>
         </>
         )} 
        </div>
         
          <div className="row mt-4">
            
   <h2 className=' mt-5 text-center' style={{color:"#fa9191"}}>Student Testimonial</h2> 
  {/* <div className="row">
  
 
  <div id="carouselExampleDark" className="carousel  slide mt-2 mb-5 gx-0" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner  ">
    <div className="carousel-item active " data-bs-interval="10000">
      <img src="" className="d-block w-100 bg-dark " alt=""  style={{paddingTop:'70px',paddingBottom:"70px"}}/>
      <div className="carousel-caption d-none d-md-block   ">
        <h5  className='  fw-bold' >"The LMS platform has greatly improved our employees' learning experience."</h5>
        <p className=''>- John Doe, Company ABC.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="" className="d-block w-100 bg-dark " alt="" style={{paddingTop:'70px',paddingBottom:"70px"}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className=' fw-bold'>"The courses offered are top-notch and highly relevant to my career."</h5>
        <p>- Jane Smith, Learner</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="" className="d-block w-100 bg-dark" alt="" style={{paddingTop:'70px',paddingBottom:"70px"}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className=' mt-3 fw-bold'>"The courses offered are top-notch and highly relevant to my career."</h5>
        <p>- Jane Smith, Learner</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </div> */}
         <Row>
         <Col md={6} className='mb-5'>
         <img src="https://media.istockphoto.com/id/1069674124/photo/young-male-college-student.jpg?s=1024x1024&w=is&k=20&c=waHuE_3ixDLMUro8gZUf_5Qou-llXooYhR8KqFrm8xk=" alt="" className=' w-100 rounded rounded-5'/>

         </Col>
            <Col md={6} className='  mt-md-5'>
              <div className={`testimonial  text-center mt-md-5`}>
                <p className='fw-bold'>"The LMS platform has greatly improved our employees' learning experience."</p>
                <p className="testimonial-author">- John Doe, Company ABC</p>
              </div>
            </Col>
            <hr />
            <Col md={6} className=' mt-md-5'>
              <div className={`testimonial text-center mt-md-5`}>
                <p className=' fw-bold mt-5'>"The courses offered are top-notch and highly relevant to my career."</p>
                <p className="testimonial-author">- Jane Smith, Learner</p>
              </div>
            </Col>
            <Col md={6}>
              <img src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/testimonial-request-template-1.jpg?width=595&height=400&name=testimonial-request-template-1.jpg" alt="" className=' w-100 rounded rounded-5'/>
            </Col>
          </Row> 
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeatureCourses
