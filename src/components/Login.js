import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Login.css'

function Login(props) {
  return (
    <div className="login-container">
      <form onSubmit={props.onSubmit}>
        <h2>Login</h2>
        <p>User name:</p>
        <input name="username" placeholder="garry_kasparov" onChange={props.onChange} className="login-input" />
        <p>Password:</p>
        <input name="password" placeholder="1234" onChange={props.onChange} className="login-input" /><br />
        <button type="submit">Log in</button>
      </form>
      <p>Don't have an account yet? <Link to="/signup">Sign up!</Link></p>
    </div>
  );
}

export default Login;