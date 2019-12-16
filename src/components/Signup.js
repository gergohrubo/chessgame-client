import React from 'react';

function Signup(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <h2>Signup</h2>
        <p>User name:</p>
        <input name="username" placeholder="garry_kasparov" onChange={props.onChange} />
        <p>Password:</p>
        <input name="password" placeholder="1234" onChange={props.onChange} /><br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Signup;