import React from 'react';

function Login(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <h2>Login</h2>
        <p>User name:</p>
        <input name="username" placeholder="garry_kasparov" onChange={props.onChange} />
        <p>Password:</p>
        <input name="password" placeholder="1234" onChange={props.onChange} /><br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;