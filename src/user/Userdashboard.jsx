// src/UserDashboard.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import LeftSidebar from './Leftsidebar'

const UserDashboard = () => {
  const courses = [
    {
      id: 1,
      title: 'Introduction to JavaScript',
      progress: 75,
      assignments: 2,
    },
    {
      id: 2,
      title: 'HTML and CSS Fundamentals',
      progress: 90,
      assignments: 1,
    },
    // Add more courses...
  ];

  return (
    <section className="user-dashboard-section pb-5 ">
      <div className=' container-fluid'>
        <Row>
          <Col md={2} className=' bg-primary vh-100'>
            <LeftSidebar />
          </Col>
          <Col md={9} className='mt-5'>
            {/* Main content of the user dashboard */}
            <h2 className="text-center mb-4 mt-3" style={{color:"#fa9191"}}>User Dashboard</h2>
            <Row>
              {courses.map((course) => (
                <Col key={course.id} md={6} >
                  <Card className="mb-4 ms-md-4 shadow-lg">
                    <Card.Body >
                      <Card.Title>{course.title}</Card.Title>
                      <Card.Text>
                        Progress: {course.progress}%<br />
                        Assignments: {course.assignments}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default UserDashboard;
