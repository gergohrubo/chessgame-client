import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  square: {
    display: 'inline-block',
    width: '7vw',
    height: '7vw',
    zIndex: 2
  },
  squareBlack: {
    display: 'inline-block',
    width: '7vw',
    height: '7vw',
    backgroundColor: '#D18B46',
    zIndex: 2
  },
  squareWhite: {
    display: 'inline-block',
    width: '7vw',
    height: '7vw',
    backgroundColor: '#FECEA0'
  },
  chessboardRow: {
    height: '7vw'
  },
  pieceImg: {
    width: '7vw',
    height: '7vw',
    zIndex: 1,
    opacity: 1
  }
}));