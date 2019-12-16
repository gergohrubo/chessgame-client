import request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const LOGGED_IN = 'LOGGED_IN'

function saveJWT({ username, jwt }) {
  return {
    type: LOGGED_IN,
    payload: { username, jwt }
  }
}

export const sendLogin = (username, password, push) => dispatch => {
  const data = { username, password }
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      dispatch(saveJWT(response.body))
      if (push) {
        push('/')
      }
    })
    .catch(console.error)
}

export const signUp = (username, password, push) => () => {
  const data = { username, password }
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