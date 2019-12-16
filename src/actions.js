import request from 'superagent'

const baseUrl = 'https://glacial-stream-52474.herokuapp.com'

export const LOGGED_IN = 'LOGGED_IN'

function saveJWT(username, jwt) {
  return {
    type: LOGGED_IN,
    payload: { username, jwt }
  }
}

export const sendLogin = (username, password, push) => dispatch => {
  const data = { name: username, password }
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      dispatch(saveJWT(username, response.body.jwt))
      if (push) {
        push('/')
      }
    })
    .catch(console.error)
}

export const signUp = (username, password, push) => () => {
  const data = { name: username, password }
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      if (push) {
        push('/')
      }
    })
    .catch(console.error)
}

export const SAVE_USERS = 'SAVE_USERS'

function saveUsers(users) {
  return {
    type: SAVE_USERS,
    payload: users
  }
}

export const getAllUsers = () => dispatch => {
  request
    .get(`${baseUrl}/user`)
    .then(response => {
      const users = response.body.map(user => ({ id: user.id, name: user.name }))
      dispatch(saveUsers(users))
    })
    .catch(console.error)
}

export const SAVE_GAMES = 'SAVE_GAMES'

function saveGames(games) {
  return {
    type: SAVE_GAMES,
    payload: games
  }
}

export const getAllGames = () => dispatch => {
  request
    .get(`${baseUrl}/game`)
    .then(response => {
      dispatch(saveGames(response.body))
    })
    .catch(console.error)
}

export const createGame = (username, push) => dispatch => {
  const data = { name: username }
  request
    .post(`${baseUrl}/game`)
    .send(data)
    .then(response => {
      dispatch(getAllGames())
      if (push) {
        push('/')
      }
    })
}