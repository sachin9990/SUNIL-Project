import React, { Component } from "react";
import './Home.css';
import { Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home-div-conatiner">
        <Container>
          <Row>
            <Col>
              <h1>Laibrary Management System (React)</h1>
            </Col>
          </Row>
          <Row>
          <Col md="2">
              <Link to="/">
                <Button variant="success">Home</Button>
              </Link>
            </Col>
            <Col md="2">
              <Link to="/classexample">
                <Button variant="success">Class Example</Button>
              </Link>
            </Col>
            <Col md="2">
              <Link to="/functionexample">
                <Button variant="success">Function Example</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
