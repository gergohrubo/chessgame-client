import React, { Component } from 'react';
import GameDetailPage from './GameDetailPage'
import { connect } from 'react-redux'
import { getAllGames, joinGame, fetchAllPlayers } from '../actions'

class GameDetailPageContainer extends Component {
  joinHandle = (id, color) => {
    this.props.dispatch(joinGame(this.props.user.jwt, id, color))
  }
  render() {
    return (
      <div>
        <GameDetailPage pageID={this.props.match.params.id} games={this.props.games} onClick={this.joinHandle} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  games: state.listOfGames,
  //players: state.listOfPlayers,
  user: state.currentUser
})

export default connect(mapStateToProps)(GameDetailPageContainer);