import { combineReducers } from "redux";
import loginReducer from './loginReducer'
import gamelistReducer from './gamelistReducer'
import errorReducer from './errorReducer'

export default combineReducers({
  currentUser: loginReducer,
  listOfGames: gamelistReducer,
  errors: errorReducer
});