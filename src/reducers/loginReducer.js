import { LOGGED_IN, LOG_OUT } from '../actions'

const initialState = {
  username: '',
  jwt: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      const { username, jwt } = action.payload
      return { username, jwt }
    case LOG_OUT:
      return { username: '', jwt: '' }
    default:
      return state
  }
}