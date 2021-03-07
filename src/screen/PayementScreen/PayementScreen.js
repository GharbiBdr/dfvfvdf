import React from 'react'
import PropTypes from 'prop-types'
import Payement from "../../layouts/Payement/Payement"
export default function PayementScreen (props) {
  function goBack(){
    props.navigation.navigate('CgvScreen')
  }
  return (

        <Payement
        goBack={goBack}
        />

  )
}
