import React from 'react'
import { Button, Container, Image, Label } from '../../designSystem'
import {  View } from 'react-native'
import Style from '../../assets/styles/Style'
import PropTypes from 'prop-types'
export default function LandingPage (props) {

  return (
    <Container>
        <View style={Style.spaceBetween}>
          <View style={Style.logoStart} >
            <Image
              width='50%'
              source={require('../../assets/logoStart.png')}
            />
          </View>

          <Label style={Style.textLandingPage}>Photographier</Label>
          <Label style={Style.textLandingPage}>.</Label>
          <Label style={Style.textLandingPage}>Inventorier</Label>
          <Label style={Style.textLandingPage}>.</Label>
          <Label style={Style.textLandingPage}>Partager</Label>
          <Label style={Style.textLandingPage}>.</Label>
          <Label style={Style.textLandingPage}>Stocker</Label>
          <View>
            <Button theme='primary' text='Connexion' onPress={props.onclickConnexion} />
            <Button
              theme='transparent'
              text='S’inscrire'
              onPress={() => props.onClickSignUp()}
            />
          </View>
        </View>
    </Container>
  )
}

LandingPage.propTypes = {
  onclickConnexion: PropTypes.func,
  onClickSignUp: PropTypes.func
}
