import React from 'react';
import './App.css';

const Login = () => {

  const handleLogin = () => {
    window.location.href = "http://localhost:8081/oauth2/authorization/google";
  }

  return (
    <>
  <div className="center-container">
    <button className="google-login-button" onClick={handleLogin}>
      Sign in with Google
    </button>
  </div>
</>

  );
}

export default Login;
