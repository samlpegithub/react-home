
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SystemRequirements = () => {
  return (
    <section className="system-requirements-section py-5">
      <Container>
        <h2 className="text-center mb-4" style={{color:"#fa9191"}}>System Requirements</h2>
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title style={{color:"#fa9191"}}>Operating System</Card.Title>
                <Card.Text>
                  Windows 10, macOS 10.14,Android or a recent version of Linux.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Add more cards for each requirement */}
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title  style={{color:"#fa9191"}}>Web Browser</Card.Title>
                <Card.Text>
                  Google Chrome (recommended), Mozilla Firefox, Safari, Microsoft Edge.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Add more cards for each requirement */}
          </Col>
        </Row>
        {/* Add more rows for additional requirements */}
        <p className="text-muted">
          Please note that these are the minimum requirements. For the best experience, we recommend using up-to-date hardware and software.
        </p>
      </Container>
    </section>
  );
};

export default SystemRequirements;
