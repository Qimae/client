// components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import edulogo from "../../assets/edulogo.png";
import { LuAsterisk } from "react-icons/lu";

const Login = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
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
      document.cookie = `token=${data.token}; path=/`;
      history("/welcome");
    } catch (error) {
      console.error("Error during login:", error);
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
