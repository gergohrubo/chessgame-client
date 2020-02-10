import React, { Component } from 'react';
import Gamelist from './layout'
import { connect } from 'react-redux'
import { joinGame } from '../../actions'

class GamelistContainer extends Component {
  render() {
    return (
      <Gamelist games={this.props.games} />
    );
  }
}

const mapStateToProps = (state) => ({
  games: state.listOfGames,
  user: state.currentUser
})

export default connect(mapStateToProps)(GamelistContainer);