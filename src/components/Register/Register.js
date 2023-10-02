// components/Register.js
import React, { useState } from "react";
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
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
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label><br/>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        /><br/>

        <label htmlFor="email">Email:</label><br/>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br/>

        <label htmlFor="password">Password:</label><br/>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        /><br/>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
