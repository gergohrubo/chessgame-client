import React, { Component } from 'react';
import { connect } from 'react-redux'
import GamelistContainer from './GamelistContainer'
import UserlistContainer from './UserlistContainer'
import { createGame } from '../actions'

class Homepage extends Component {
  onClick = () => {
    this.props.dispatch(createGame(this.props.user.username, this.props.history.push))
  }
  render() {
    return (
      <div className="homepage-container">
        <h1>This is the homepage</h1>
        <GamelistContainer />
        <UserlistContainer />
        {this.props.user.username && <button onClick={this.onClick}>Create a new game!</button>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser
})

export default connect(mapStateToProps)(Homepage);