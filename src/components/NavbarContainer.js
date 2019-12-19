import React, { Component } from 'react';
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { logOut } from '../actions'

class NavbarContainer extends Component {
  onClick = () => {
    console.log('logout')
    this.props.dispatch(logOut())
  }
  render() {
    return (
      <div>
        <Navbar user={this.props.user} onClick={this.onClick} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser
})

export default connect(mapStateToProps)(NavbarContainer);