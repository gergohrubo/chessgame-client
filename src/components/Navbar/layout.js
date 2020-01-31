import React from 'react';
import { Link } from 'react-router-dom'
import { useStyles } from './style'

function Navbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <Link to="/"> Homepage</Link>
      {!props.user.username && <Link to="/login"> Login</Link>}
      {props.user.username && <div className={classes.logout} onClick={props.onClick}><Link to='/'> Logout</Link></div>}
      {props.user.username && <p className={classes.navbarUsername}>{props.user.username}</p>}
    </div>
  );
}

export default Navbar;