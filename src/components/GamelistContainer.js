import React, { Component } from 'react';
import Gamelist from './Gamelist'
import { connect } from 'react-redux'
import { getAllGames, joinGame, fetchAllPlayers } from '../actions'

class GamelistContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getAllGames())
    this.props.dispatch(fetchAllPlayers())
  }
  joinHandle = (id, color) => {
    this.props.dispatch(joinGame(this.props.user.jwt, id, color))
  }
  render() {
    return (
      <div className="gamelist-container">
        <Gamelist games={this.props.games} onClick={this.joinHandle} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  games: state.listOfGames,
  //players: state.listOfPlayers,
  user: state.currentUser
})

export default connect(mapStateToProps)(GamelistContainer);