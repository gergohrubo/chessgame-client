import { SAVE_GAMES } from '../actions'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_GAMES:
      return action.payload
    default:
      return state
  }
}