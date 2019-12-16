import React, { Component } from 'react';
import Gamelist from './Gamelist'
import { connect } from 'react-redux'
import { getAllGames, joinGame } from '../actions'

class GamelistContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getAllGames())
  }
  joinHandle = id => {
    this.props.dispatch(joinGame(this.props.user.username, id))
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
  user: state.currentUser
})

export default connect(mapStateToProps)(GamelistContainer);