// components/Register.js
import React, { useState } from "react";
import "./Register.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import edulogo from "../../../assets/edulogo.png";
import { LuAsterisk } from "react-icons/lu";

const StudentRegister = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error);
        return;
      }
      const data = await response.json();
      console.log(data); // Handle the response accordingly (e.g., show success message or error)
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="Register">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img src={edulogo} alt="edulogo" height="50px"></img>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="stu-register-container">
        <div className="stu-register-title">
          <div className="stu-register-title-text">
            <h2>Register</h2>
          </div>
          <div className="stu-register-title-for">
            <h2>KCSE Students</h2>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">
            Full Name as Per Index Number
            <LuAsterisk style={{ color: "red" }} />
          </label>
          <br />
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="index">
            Index Number
            <LuAsterisk style={{ color: "red" }} />
          </label>
          <br />
          <input
            type="text"
            id="index"
            name="index"
            value={formData.index}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="primary">
            Primary School
            <LuAsterisk style={{ color: "red" }} />
          </label>
          <br />
          <input
            type="text"
            id="primary"
            name="primary"
            value={formData.primary}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="email">
            Email Address or Phone Number
            <LuAsterisk style={{ color: "red" }} />
          </label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="password">
            Password
            <LuAsterisk style={{ color: "red" }} />
          </label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="cpassword">
            Confirm Password
            <LuAsterisk style={{ color: "red" }} />
          </label>
          <br />
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          {error && <div style={{ color: "red" }}>{error}</div>}
          <button className="l-button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;
