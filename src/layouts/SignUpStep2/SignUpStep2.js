import React from 'react'
import { TextInput, Heading, P, Upload } from '../../designSystem'
import { View } from 'react-native'
import Style from '../../assets/styles/Style'
import PropTypes from 'prop-types'
export default function SignUpStep2(props) {
  return (
    <View style={Style.containerSignUpStep1} >
      <Heading>
        L’entreprise
            </Heading>
      <P>
        Renseignez les informations de votre entreprise pour éditer vos documents légaux.
            </P>
      <Upload
        allowedTypes='images'
        placeholder="Logo de l’entreprise"
        label="Logo de l’entreprise"
        value={props.logoName}
        onRightIconPress={(val) => props.uploadLogo(val)}
        imageWidth={300}
        imageHeight={300}
        isInvalid={props.errorSignUpStep2.errorLogo}
        errorMessage=" * Vérifier votre Logo de l’entreprise"
      />
      <Upload
        allowedTypes='pdf'
        placeholder="Conditions générales de vente"
        label="Conditions générales de vente"
        value={props.conditionsName}
        onRightIconPress={(val) => props.uploadConditionGeneral(val)}
        isInvalid={props.errorSignUpStep2.errorConditions}
        errorMessage=" * Vérifier votre Conditions générales de vente"
      />
      <TextInput
        label="Mail générique de l’entreprise"
        value={props.mailEntreprise}
        type='text'
        placeholder="Mail générique de l’entreprise"
        onChangeText={(val) => {
          props.onChangeMailEntreprise(val)
        }}
        isInvalid={props.errorSignUpStep2.errorMailEntreprise}
        errorMessage={props.errorSignUpStep2.errorMessageMailEntreprise}
        keyboardType='email-address'
      />
      <TextInput
        label="Téléphone générique de l’entreprise"
        value={props.telephoneEntreprise}
        type='text'
        placeholder="Téléphone générique de l’entreprise"
        onChangeText={(val) => {
          props.onChangeTelephoneEntreprise(val)
        }}
        isInvalid={props.errorSignUpStep2.errorTelephoneEntreprise}
        errorMessage=" * Vérifier votre Téléphone générique de l’entreprise"
        keyboardType='phone-pad'
      />
      <TextInput
        label="Siège social de l’entreprise"
        value={props.siegeSocial}
        type='text'
        placeholder="Siège social de l’entreprise"
        onChangeText={(val) => {
          props.onChangeSiegeSocial(val)
        }}
        isInvalid={props.errorSignUpStep2.errorSiegeSocial}
        errorMessage=" * Vérifier votre Siège social de l’entreprise"
      />
      <TextInput
        label="SIREN/SIRET de l’entreprise"
        value={props.sirenSiret}
        type='text'
        placeholder="SIREN/SIRET de l’entreprise"
        onChangeText={(val) => {
          props.onChangeSirenSiret(val)
        }}
        isInvalid={props.errorSignUpStep2.errorSirenSiret}
        errorMessage={props.errorSignUpStep2.errorMessageSirent}
      />
    </View>

  )
}

SignUpStep2.propTypes = {
  logo: PropTypes.string,
  onChangeLogo: PropTypes.func,
  conditions: PropTypes.string,
  onChangeConditions: PropTypes.func,
  mailEntreprise: PropTypes.string,
  onChangeMailEntreprise: PropTypes.func,
  telephoneEntreprise: PropTypes.string,
  onChangeTelephoneEntreprise: PropTypes.func,
  siegeSocial: PropTypes.string,
  onChangeSiegeSocial: PropTypes.func,
  sirenSiret: PropTypes.string,
  onChangeSirenSiret: PropTypes.func,
  errorSignUpStep2: PropTypes.object,
  logoName: PropTypes.string,
  uploadLogo: PropTypes.func
}
