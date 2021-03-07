
import React, { useState } from 'react'
import Login from '../../layouts/Login/Login'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { apiLogin } from '../../Api/Login'
export default function LoginScreen (props) {
  const [loadind, setloadind] = useState(false)
  const [email, onChangeEmail] = useState('ohhdeadpool@gmail.com')
  const [password, onChangePassword] = useState('ohdeadpool')
  const [errorConnexion, setErrorConnexion] = useState(false)
  const dispatch = useDispatch()
  function goBack () {
    props.navigation.navigate('LandingPageScreen')
  }
  function onClickSignUp () {
    props.navigation.navigate('SignUpScreen')
  }
  function resetData () {
    onChangeEmail('')
    onChangePassword('')
    setErrorConnexion(false)
  }
  async function login () {
    if ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
      setErrorConnexion(false)
      setloadind(true)
      const responseJson = await apiLogin(email, password)
      if (responseJson.statusCode === 200 && (['collaborator', 'accountAdministrator'].includes(responseJson.role))) {
        await dispatch({ type: 'SET_CURRENT_USER', value: { refreshToken: responseJson.refreshToken, role: responseJson.role, payment: responseJson.payment, expireDate: responseJson.expireDate, accessToken: responseJson.accessToken } })
        if (responseJson.payment === false) {
          resetData()
          setloadind(false)
          props.navigation.navigate('OffresScreen')
        } else if (new Date(responseJson.expireDate) < new Date()) {
          setloadind(false)
          resetData()
          props.navigation.navigate('Home')
        }
      } else {
        setErrorConnexion(true)
        setloadind(false)
       }
    } else {
      setErrorConnexion(true)
      setloadind(false)
    }
  }
  return (
    <>
      <Login
        email={email}
        onChangeEmail={onChangeEmail}
        password={password}
        onChangePassword={onChangePassword}
        goBack={goBack}
        onClickSignUp={onClickSignUp}
        login={login}
        errorConnexion={errorConnexion}
        loadind={loadind}
      />
    </>

  )
}
LoginScreen.propTypes = {
  navigation: PropTypes.object
}
