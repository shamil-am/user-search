import React from "react";
import { Row, Col } from "reactstrap";
import Welcome from "./../components/Welcome";

const WelcomePg = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#ccccff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row>
        <Col xs="12" md="12">
          <Welcome />
        </Col>
      </Row>
    </div>
  );
};

export default WelcomePg;
