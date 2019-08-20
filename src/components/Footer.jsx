import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Footer extends Component {
  render = () => {
    return (
      <footer>
        <Container>
          <Row>
            <Col xs={12}>
              <p className="footer-text">
                Made in <a href="https://en.wikipedia.org/wiki/Seattle">Seattle</a> with <span className="heart">&hearts;</span>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };
}

export default Footer;
