import React from 'react';
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <div>
      <Link to="/"> Homepage</Link>
      <Link to="/login"> Login</Link>
      <Link to="/signup"> Signup</Link>
    </div>
  );
}

export default Navbar;