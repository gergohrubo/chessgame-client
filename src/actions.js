import request from 'superagent'

const baseUrl = 'https://chess-app-gh.herokuapp.com'

//const baseUrl = 'http://localhost:4000'

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

export const createGame = (jwt, username, push) => () => {
  const data = { name: username }
  request
    .post(`${baseUrl}/game`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      if (push) {
        push('/')
      }
    })
    .catch(console.error)
}

export const joinGame = (jwt, gameId, color, push) => () => {
  const data = { gameId, color }
  request
    .post(`${baseUrl}/join`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      if (push) {
        push('/')
      }
    })
    .catch(console.error)
}

export const makeMove = (figureId, coordinate_X, coordinate_Y, gameId, jwt) => dispatch => {
  const data = { figureId, coordinate_X, coordinate_Y, gameId }
  request
    .put(`${baseUrl}/move`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      console.log(response)
      dispatch(correctMove())
    })
    .catch(error => {
      switch (error.status) {
        case 400:
          dispatch(notYourMove())
          break
        case 401:
          dispatch(invalidMove())
          break
        case 402:
          dispatch(check())
          break
        default:
          break
      }
      console.error(error)
    })
}

export const LOG_OUT = 'LOG_OUT'

export const logOut = () => ({
  type: LOG_OUT
})

export const NOT_YOUR_MOVE = 'NOT_YOUR_MOVE'

export const notYourMove = () => ({
  type: NOT_YOUR_MOVE
})

export const CORRECT_MOVE = 'CORRECT_MOVE'

export const correctMove = () => ({
  type: CORRECT_MOVE
})

export const INVALID_MOVE = 'INVALID_MOVE'

export const invalidMove = () => ({
  type: INVALID_MOVE
})

export const CHECK = 'CHECK'

export const check = () => ({
  type: CHECK
})