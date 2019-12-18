import { combineReducers } from "redux";
import loginReducer from './loginReducer'
import userlistReducer from './userlistReducer'
import gamelistReducer from './gamelistReducer'
import playerlistReducer from './playerlistReducer'

export default combineReducers({
  currentUser: loginReducer,
  // listOfUsers: userlistReducer,
  listOfGames: gamelistReducer,
  // listOfPlayers: playerlistReducer
});