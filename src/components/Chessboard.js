import React from 'react';
import '../styles/Chessboard.css'

function Chessboard(props) {
  const boardBackground = Array(4).fill([[0, 1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1, 0]]).flat()
  console.log(boardBackground)
  return (
    <div className="chessboard">
      <p>Chessboard comes here</p>
      {boardBackground.map((row, indexRow) => {
        return <div className="chessboard-row">{row.map((square, indexColumn) => (
          square ?
            <div className="square-black"></div> : <div className="square-white"></div>))}</div>
      })}
    </div>
  );
}

export default Chessboard;