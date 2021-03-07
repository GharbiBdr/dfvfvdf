import React from 'react'
import PropTypes from 'prop-types'
import  Cgv  from '../../layouts/Cgv/Cgv'
export default function CgvScreen (props) {
  function goBack () {
    props.navigation.navigate('OffresScreen')
  }
  function confirmationCGV(){
    props.navigation.navigate("PayementScreen")
  }
  const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>`
  return (

        <Cgv
        goBack={goBack}
        htmlContent={htmlContent}
        confirmationCGV={confirmationCGV}
        />

  )
}
