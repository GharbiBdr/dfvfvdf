const initialState = {
  refreshToken: null,
  role: null,
  payement: null,
  expireDate: null,
  accessToken: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        refreshToken: action.value.refreshToken,
        role: action.value.role,
        payment: action.value.payment,
        expireDate: action.value.expireDate,
        accessToken: action.value.accessToken
      }
    case 'LOGOUT':
      return {
        ...state,
        token: null,
        role: null,
        payement: null,
        expireDate: null,
        accessToken: null
      }
    case "REFRESH_TOKEN":
      return {
        ...state,
        accessToken: action.payload.accessToken,
        token: action.payload.token
      }
    default:
      return state
  }
}
