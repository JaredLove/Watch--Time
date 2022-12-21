import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <Container fluid id="footer">
      <Row>
        <Col>
          <div className=" pt-3">&copy;2022 by WATCHTIME</div>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
