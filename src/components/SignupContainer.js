import React, { Component } from 'react';
import Signup from './Signup'

class SignupContainer extends Component {
  state = {
    username: '',
    password: ''
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  onSubmit = event => {
    event.preventDefault()
    this.setState({ username: '', password: '' })
    console.log('form submitted')
  }
  render() {
    return (
      <div>
        <Signup onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default SignupContainer;