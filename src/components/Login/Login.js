// components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import edulogo from "../../assets/edulogo.png";
import { LuAsterisk } from "react-icons/lu";
import axios from "axios";

const Login = ({setLoggedIn}) => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    account: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.account === "School") {    
      axios
        .post("http://localhost:3002/schoolLogin", formData)
        .then((res) => {
          if (res.data.Status === "Success") {
            setLoggedIn(res.data.user);
            /* const id = res.data.id; */
            localStorage.setItem("valid", true);
            history("/schooldashboard");
          } else {
            setError(res.data.Error);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setError("Invalid Account Type!");
    }
  };

  return (
    <div id="Login">
      <div className="log-flex">
        <div className="log-logo">
          <a href="/">
            <img src={edulogo} alt="edulogo" height="50px"></img>
          </a>
        </div>
        <div className="log-form">
          <h2>One Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email Address or Phone Number
              <LuAsterisk style={{ color: "red" }} />
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email or Phone Number"
              required
            />
            <br />

            <label htmlFor="account">Account Type</label>
            <br />
            <input
              type="account"
              id="account"
              name="account"
              value={formData.account}
              onChange={handleChange}
              placeholder="Student, School or Ministry"
              required
            />

            <br />

            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            {error && <div style={{ color: "red" }}>{error}</div>}
            <br />
            <br />

            <button className="l-button" type="submit">
              Sign In
            </button>
          </form>
          <p>
            Don't have an account? <a href="/choice">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
