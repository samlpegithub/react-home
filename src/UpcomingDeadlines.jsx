import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const UpcomingDeadlines = ({ deadlines }) => {
  return (
    <section className="upcoming-deadlines my-5">
      <Container>
        <h2 className=' text-center ' style={{color:"#fa9191"}}>Upcoming Deadlines</h2>
        <Row>
          {deadlines.map(deadline => (
            <Col key={deadline.id} xs={12} md={6} lg={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title>{deadline.assignment}</Card.Title>
                  <Card.Text>
                    <strong>Course:</strong> {deadline.course}<br />
                    <strong>Due Date:</strong> {new Date(deadline.dueDate).toLocaleString()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default UpcomingDeadlines;
