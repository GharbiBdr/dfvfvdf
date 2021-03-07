import React, { useState } from 'react'
import { Button, Container, Hr, TextInput, Heading, Label, Icon, Image } from '../../designSystem'
import { View } from 'react-native'
import Style from '../../assets/styles/Style'
import PropTypes from 'prop-types'
import Colors from '../../assets/styles/Colors'
import { FR } from '../../Lang/Lang'
import Loader from '../Loader/Loader'
export default function Login (props) {
  const [showLogo, setShowLogo] = useState(true)
  return (

    <Container>
      {props.loadind
        ? <Loader/>
        : null}
      <Icon
        name="go-back"
        size='extra-small'
        color={showLogo ? Colors.primary : Colors.black}
        onPress={() => props.goBack()}
      />
      <View style={Style.spaceBetween}>
        {showLogo
          ? <>
            <View style={Style.logoStart} >
              <Image
                width='50%'
                source={require('../../assets/logoStart.png')}
              />
            </View>
            <View style={Style.center} >
              <Hr
                size="medium"
                theme="default"
                width={124}
              />
            </View>
          </>
          : null}
        <View>
          <Heading>
            {FR.espaceDeConnexion}
          </Heading>
          <View>
            <TextInput
              label={FR.emailProfessionnel}
              value={props.email}
              type='text'
              placeholder={FR.emailProfessionnel}
              keyboardType='email-address'
              onChangeText={(val) => {
                props.onChangeEmail(val)
              }}
              onFocus={() => setShowLogo(false)}
              isInvalid={props.errorConnexion}
              errorMessage={FR.loginError}
            />
            <View style={Style.marginTopPasswordInput} >
              <TextInput
                label={FR.motDePasse}
                value={props.password}
                type='password'
                placeholder={FR.motDePasse}
                onChangeText={(val) => {
                  props.onChangePassword(val)
                }}
                onFocus={() => setShowLogo(false)}
              />
              <Label
                style={Style.forgetPasswordText}
              >
                {FR.motDePasseOublié}
              </Label>
            </View>
            <View >
              <Button
                text={FR.seConnecter}
                theme='primary'
                onPress={() => props.login()}
              />
              <Button
                theme="transparent"
                text={FR.sInscrire}
                onPress={() => props.onClickSignUp()}
              />
            </View>
          </View>
        </View>
      </View>
    </Container>

  )
}

Login.propTypes = {
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  goBack: PropTypes.func,
  errorConnexion: PropTypes.bool,
  login: PropTypes.func,
  onClickSignUp: PropTypes.func,
  loadind: PropTypes.bool
}
