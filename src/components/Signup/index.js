import React, { Component } from 'react';
import Signup from './layout'
import { connect } from 'react-redux'
import { signUp } from '../../actions'

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
    this.props.dispatch(signUp(this.state.username, this.state.password, this.props.history.push))
    this.setState({ username: '', password: '' })
  }
  render() {
    return (
      <div>
        <Signup onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect()(SignupContainer);