// components/Welcome.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Get the token from the cookie
    const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];

    // Decode the token to get the username
    const decodedToken = parseJwt(token);

    // Set the username in the state
    setUsername(decodedToken.username);
  }, []);

  // Function to decode JWT token (simplified)
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return {};
    }
  };
  const history = useNavigate();

  const handleLogout = () => {
    // Clear the token from cookies
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';

    // Redirect the user to the login page

    history('/login');
  };

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <button onClick={handleLogout}>Logout</button>
      {/* Your welcome page content */}
    </div>
  );
};

export default Dashboard;
