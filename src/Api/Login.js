import { API_URL } from '../Config/Config'

export async function apiLogin (email, password) {
  const response = await fetch(API_URL + '/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify({
      mail: email,
      password: password
    })
  })
  return (response.json())
}
