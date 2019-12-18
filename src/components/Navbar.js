import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar(props) {
  return (
    <div className="navbar">
      <Link to="/"> Homepage</Link>
      {!props.user.username && <Link to="/login"> Login</Link>}
      {props.user.username && <p className='navbar-username'>{props.user.username}</p>}
    </div>
  );
}

export default Navbar;