import React from 'react';
import { useStyles } from './style'

function Chessboard(props) {
  const classes = useStyles();
  return (
    <div className={classes.chessboard}>
      <br />
      {props.whoseTurnIsIt && <h3>Whose turn is it? {props.whoseTurnIsIt}</h3>}
      {props.errors.notYourMove && props.errors.notYourMove}
      {props.errors.invalidMove && props.errors.invalidMove}
      {props.errors.isCheck && <h1>{props.errors.isCheck}</h1>}
      {props.board.map((row, indexRow) => {
        return <div className={classes.chessboardRow}>{row.map((square, indexColumn) => (
          ((indexRow + indexColumn) % 2 === 1) ?
            <div key={indexRow * 8 + indexColumn} className={classes.squareBlack} onClick={() => props.onClick(square)}>
              {square.imgsrc && <img key={indexRow * 8 + indexColumn + 100} className={classes.pieceImg} src={square.imgsrc} alt={square.imgsrc} />}
            </div>
            : <div key={indexRow * 8 + indexColumn} className={classes.squareWhite} onClick={() => props.onClick(square)}>
              {square.imgsrc && <img key={indexRow * 8 + indexColumn + 100} className={classes.pieceImg} src={square.imgsrc} alt={square.imgsrc} />}
            </div>
        ))}
        </div>
      })}
    </div>
  );
}

export default Chessboard;