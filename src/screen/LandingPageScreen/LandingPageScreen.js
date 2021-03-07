import React from 'react'
import LandinPage from '../../layouts/LangingPage/LandingPage'
import PropTypes from 'prop-types'
export default function LandingPageScreen (props) {

  function onClickConnexion () {
    props.navigation.navigate('LoginScreen')
  }
  function onClickSignUp () {
    props.navigation.navigate('SignUpScreen')
  }
  return (
    <>
   
      <LandinPage
      onclickConnexion={onClickConnexion}
      onClickSignUp={onClickSignUp}
    />
    

    </>
  )
}
LandingPageScreen.propTypes = {
  navigation: PropTypes.object
}
