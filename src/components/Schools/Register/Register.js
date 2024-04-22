// components/Register.js
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import edulogo from "../../../assets/edulogo.png";
import { LuAsterisk } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SchoolRegister = () => {
  const [fullname, setFullname] = useState("");
  const [schoolcode, setSchoolcode] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const [error, setError] = useState(null);
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === cpassword) {
      try {
        const response = await axios.post("http://localhost:3002/register", {
          fullname,
          schoolcode,
          department,
          email,
          password,
        });
        console.log(response.data);
        history("/login");
      } catch (error) {
        console.error(error.response.data.error);
      }
    } else {
      setError("Passwords Do not Match!");
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
            <h2>School Officials</h2>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">
            Full Name
            <LuAsterisk style={{ color: "red" }} />
          </label>
          <br />
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          <br />

          <label htmlFor="schoolcode">
            School Code
            <LuAsterisk style={{ color: "red" }} />
          </label>
          <br />
          <input
            type="text"
            id="schoolcode"
            name="schoolcode"
            value={schoolcode}
            onChange={(e) => setSchoolcode(e.target.value)}
            required
          />
          <br />

          <label htmlFor="department">
            Department
            <LuAsterisk style={{ color: "red" }} />
          </label>
          <br />
          <input
            type="text"
            id="department"
            name="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
          <br />

          <label htmlFor="email">
            Email Address
            <LuAsterisk style={{ color: "red" }} />
          </label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            required
          />
          <br />
          <br />
          {error && <div style={{ color: "red" }}>{error}</div>}
          <button className="l-button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SchoolRegister;
