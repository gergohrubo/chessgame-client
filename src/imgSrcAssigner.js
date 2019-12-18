import Pieces from './components/Pieces'

export default function imgSrcAssigner(type, color, coordinate_X, coordinate_Y) {
  switch (color) {
    case 'white': {
      switch (type) {
        case 'Pawn':
          switch ((coordinate_X + coordinate_Y) % 2) {
            case 0:
              return Pieces.whitePawn.black
            case 1:
              return Pieces.whitePawn.white
          }
        case 'Knight':
          switch ((coordinate_X + coordinate_Y) % 2) {
            case 0:
              return Pieces.whiteKnight.black
            case 1:
              return Pieces.whiteKnight.white
          }
        case 'Bishop':
          switch ((coordinate_X + coordinate_Y) % 2) {
            case 0:
              return Pieces.whiteBishop.black
            case 1:
              return Pieces.whiteBishop.white
          }
        case 'Rook':
          switch ((coordinate_X + coordinate_Y) % 2) {
            case 0:
              return Pieces.whiteRook.black
            case 1:
              return Pieces.whiteRook.white
          }
        case 'Queen':
          switch ((coordinate_X + coordinate_Y) % 2) {
            case 0:
              return Pieces.whiteQueen.black
            case 1:
              return Pieces.whiteQueen.white
          }
        case 'King':
          switch ((coordinate_X + coordinate_Y) % 2) {
            case 0:
              return Pieces.whiteKing.black
            case 1:
              return Pieces.whiteKing.white
          }
      }
    }
    case 'black': {
      switch (type) {
        case 'Pawn':
          switch ((coordinate_X + coordinate_Y) % 2) {
            case 0:
              return Pieces.blackPawn.black
            case 1:
              return Pieces.blackPawn.white
          }
        case 'Knight':
          switch ((coordinate_X + coordinate_Y) % 2) {
            case 0:
              return Pieces.blackKnight.black
            case 1:
              return Pieces.blackKnight.white
          }
        case 'Bishop':
          switch ((coordinate_X + coordinate_Y) % 2) {
            case 0:
              return Pieces.blackBishop.black
            case 1:
              return Pieces.blackBishop.white
          }
        case 'Rook':
          switch ((coordinate_X + coordinate_Y) % 2) {
            case 0:
              return Pieces.blackRook.black
            case 1:
              return Pieces.blackRook.white
          }
        case 'Queen':
          switch ((coordinate_X + coordinate_Y) % 2) {
            case 0:
              return Pieces.blackQueen.black
            case 1:
              return Pieces.blackQueen.white
          }
        case 'King':
          switch ((coordinate_X + coordinate_Y) % 2) {
            case 0:
              return Pieces.blackKing.black
            case 1:
              return Pieces.blackKing.white
          }
      }
    }
    default:
      return
  }
}