import React, { Component } from 'react';
import Gamelist from './Gamelist'
import { connect } from 'react-redux'
import { getAllGames } from '../actions'

class GamelistContainer extends Component {
  state = {
    games: [
      {
        id: 1,
        user_id_1: 2,
        user_id_2: 5,
        isOpen: false,
        hasFinished: false
      },
      {
        id: 2,
        user_id_1: 1,
        user_id_2: 3,
        isOpen: false,
        hasFinished: true
      },
      {
        id: 3,
        user_id_1: 4,
        user_id_2: null,
        isOpen: true,
        hasFinished: false
      }
    ]
  }
  componentDidMount() {
    this.props.dispatch(getAllGames())
  }
  render() {
    return (
      <div className="gamelist-container">
        <Gamelist games={this.props.games} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  games: state.listOfGames
})

export default connect(mapStateToProps)(GamelistContainer);