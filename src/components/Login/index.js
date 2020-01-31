import React, { Component } from 'react';
import Login from './layout'
import { connect } from 'react-redux'
import { sendLogin } from '../../actions'

class LoginContainer extends Component {
  state = {
    username: '',
    password: ''
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  onSubmit = event => {
    event.preventDefault()
    this.props.dispatch(sendLogin(this.state.username, this.state.password, this.props.history.push))
    this.setState({ username: '', password: '' })
  }
  render() {
    return (
      <div>
        <Login onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}


export default connect()(LoginContainer);