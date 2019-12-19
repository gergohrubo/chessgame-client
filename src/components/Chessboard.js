import React from 'react';
import '../styles/Chessboard.css'


function Chessboard(props) {
  return (
    <div className="chessboard">
      <br />
      {props.whoseTurnIsIt && <h3>Whose turn is it? {props.whoseTurnIsIt}</h3>}
      {props.errors.notYourMove && props.errors.notYourMove}
      {props.errors.invalidMove && props.errors.invalidMove}
      {props.board.map((row, indexRow) => {
        return <div className="chessboard-row">{row.map((square, indexColumn) => (
          ((indexRow + indexColumn) % 2 === 1) ?
            <div key={indexRow * 8 + indexColumn} className="square-black" onClick={() => props.onClick(square)}>
              {square.imgsrc && <img key={indexRow * 8 + indexColumn + 100} className="piece-img" src={square.imgsrc} />}
            </div>
            : <div key={indexRow * 8 + indexColumn} className="square-white" onClick={() => props.onClick(square)}>
              {square.imgsrc && <img key={indexRow * 8 + indexColumn + 100} className="piece-img" src={square.imgsrc} />}
            </div>
        ))}
        </div>
      })}
    </div>
  );
}

export default Chessboard;