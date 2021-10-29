import React from "react";
import { Container, Row, Col } from "reactstrap";
import Welcome from "./../components/Welcome";
//stle
import "../styles/welcomePg.scss";
//components
const WelcomePg = () => {
  return (
    <div className="wrapper">
      <Container>
        <Row>
          <Col xs="12" md="12">
            <Welcome />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomePg;
