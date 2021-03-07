import React from 'react'
import { TextInput, Heading } from '../../designSystem'
import { View } from 'react-native'
export default function SignUpStep3 (props) {
  return (
        <View >
            <Heading>
                Création de compte
            </Heading>
            <TextInput
                label="Email professionnel"
                value={props.mailProfessional}
                type='text'
                placeholder="Email professionnel"
                onChangeText={(val) => {
                  props.onChangeMailProfessional(val)
                }}
                isInvalid={props.errorSignUpStep3.errorMailProfessional}
                errorMessage={props.errorSignUpStep3.errorMessageMailAdmin}
                keyboardType='email-address'
            />
            <TextInput
                label="Mot de passe"
                value={props.password}
                type='password'
                placeholder="Mot de passe"
                onChangeText={(val) => {
                  props.onChangePassword(val)
                }}
                valididtyCriterias={props.passwordConditions}
            />
            <TextInput
                label="Confirmer le mot de passe"
                value={props.confirmePassword}
                type='password'
                placeholder="Confirmer le mot de passe"
                onChangeText={(val) => {
                  props.onChangeConfirmePassword(val)
                }}
                isInvalid={props.errorSignUpStep3.errorConfirmePassword}
                errorMessage=" * Vérifier votre mot de passe"
            />
        </View>

  )
}
