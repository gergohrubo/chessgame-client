import React, { Component } from 'react';
import Chessboard from './Chessboard'

class ChessboardContainer extends Component {
  state = [
    {
      id: 1,
      type: 'K',
      color: 'black',
      column: 1,
      row: 0,
      game_id: 1
    }
  ]
  render() {
    return (
      <div>
        <Chessboard />
      </div>
    );
  }
}

export default ChessboardContainer;