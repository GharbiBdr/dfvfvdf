import { API_URL } from '../Config/Config'
import Store from '../Redux/store'


export function getAccessToken() {
  const accessToken = Store.getState().AuthReducer.accessToken;

  return accessToken
}

export function getRefreshToken() {
  const refreshToken = Store.getState().AuthReducer.token;
  return refreshToken
}



export async function apiRefresh() {
  const response = await fetch(API_URL + '/auth/refresh', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      "Authorization": "Bearer " + getRefreshToken()
    }
  })
  const responseJson = await response.json()
  return responseJson

}






