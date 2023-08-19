// src/Events.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const Events = ({eventsData}) => {
  return (
    <section className="events-section my-5">
      <Container>
        <h2 className=' text-center' style={{color:"#fa9191"}}>Upcoming Events</h2>
        <Row>
          {eventsData.map(event => (
            <Col key={event.id} xs={12} md={6} lg={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>
                    <strong>Date:</strong> {new Date(event.date).toLocaleString()}<br />
                    <strong>Location:</strong> {event.location}
                  </Card.Text>
                  <Card.Text>{event.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Events;
