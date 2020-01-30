import React, { Component } from 'react';
import { connect } from 'react-redux'
import Gamelist from './Gamelist'
import { createGame } from '../actions'
import CreateGameButton from './CreateGameButton'
import { creategameStyle } from '../globalStyles'

class Homepage extends Component {
  onClick = () => {
    this.props.dispatch(createGame(this.props.user.username, this.props.history.push))
  }
  render() {
    return (
      <div>
        <div>
          <h1>These are the games you can join</h1>
          <Gamelist />
        </div>
        <div style={creategameStyle}>
          {this.props.user.username && <CreateGameButton onClick={this.onClick} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser
})

export default connect(mapStateToProps)(Homepage);