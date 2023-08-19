import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
const Features = () => {
  return (
    <div>
       <section className="py-5">
        <Container className='  g-0'>
          <h2 className=' text-center ' style={{color:"#fa9191"}}>Key Features</h2>
          <Row  className='  mx-1'>
            <Col md={3}  className={`  text-light   shadow-sm offset-md-1 bg-info border py-3 rounded rounded-2  me-2   my-2`}>
              <i className="bi bi-book-fill  display-5 "></i>
              <h5>Wide Range of Courses</h5>
              <p>Choose from a vast selection of courses in various disciplines.</p>
            </Col>
            <Col md={3} className={`  text-light bg-info  border py-3 rounded shadow-sm  me-2   my-2`}>
              <i className="bi bi-laptop-fill  display-5"></i>
              <h5>Flexible Learning</h5>
              <p>Learn at your own pace from anywhere using any device.</p>
            </Col>
            <Col md={3}  className={` text-light bg-info border py-3 rounded shadow-sm   me-2 my-2`}>
              <i className="bi bi-trophy-fill display-5 "></i>
              <h5>Certifications</h5>
              <p>Earn certificates upon successful completion of courses.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Features
