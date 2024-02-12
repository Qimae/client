import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import edulogo from "../../assets/edulogo.png";
import "./Choice.css";

const Choice = () => {
  return (
    <div id="Choice">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img src={edulogo} alt="edulogo" height="50px"></img>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="ch-flex">
        <div className="ch-text">
          <div className="ch-text-h1">
            <h1>Select account type</h1>
          </div>
          <div className="ch-text-signin">
            <p>
              or <a href="/login">Sign in</a>
            </p>
          </div>
        </div>
        <a href="/studentregister">
          <div className="ch-links">
            <h2>Student</h2>
            <p>For KCSE Students</p>
          </div>
        </a>
        <a href="/schoolregister">
          <div className="ch-links">
            <h2>School</h2>
            <p>For School Officials</p>
          </div>
        </a>
        <a href="/ministryregister">
          <div className="ch-links">
            <h2>Ministry</h2>
            <p>For Ministry Workers</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Choice;
