import React from 'react'
import { TextInput, Heading, P } from '../../designSystem'
import { View } from 'react-native'
import Style from '../../assets/styles/Style'
import PropTypes from 'prop-types'
export default function SignUpStep1 (props) {
  return (
        <View style={Style.containerSignUpStep1} >
            <Heading>
                S’inscrire
            </Heading>
            <P>
                Vous êtes sur le point de créer un compte administrateur pour votre entreprise. Assurez-vous qu’un compte administrateur n’a pas déjà été crée auparavant.
            </P>
            <TextInput
                label="Prénom"
                value={props.prenom}
                type='text'
                placeholder="Prénom"
                onChangeText={(val) => {
                  props.onChangePrenom(val)
                }}
                isInvalid={props.errorSignUpStep1.errorPrenom}
                errorMessage=" * Vérifier votre prénom"
            />
            <TextInput
                label="Nom"
                value={props.nom}
                type='text'
                placeholder="Nom"
                onChangeText={(val) => {
                  props.onChangeNom(val)
                }}
                isInvalid={props.errorSignUpStep1.errorNom}
                errorMessage=" * Vérifier votre nom"
            />
            <TextInput
                label="Fonction"
                value={props.fonction}
                type='text'
                placeholder="Fonction"
                onChangeText={(val) => {
                  props.onChangeFonction(val)
                }}
                isInvalid={props.errorSignUpStep1.errorFonction}
                errorMessage=" * Vérifier votre fonction"
            />
            <TextInput
                label="Entreprise"
                value={props.entreprise}
                type='text'
                placeholder="Entreprise"
                onChangeText={(val) => {
                  props.onChangeEntreprise(val)
                }}
                isInvalid={props.errorSignUpStep1.errorEntreprise}
                errorMessage=" * Vérifier votre Entreprise"
            />
            <TextInput
                label="Adresse professionnelle"
                value={props.adresseProf}
                type='text'
                placeholder="Adresse professionnelle"
                onChangeText={(val) => {
                  props.onChangeAdresseProf(val)
                }}
                isInvalid={props.errorSignUpStep1.errorAdresseProf}
                errorMessage=" * Vérifier votre Adresse professionnelle"
            />
            <TextInput
                label="Téléphone professionnel"
                value={props.telephone}
                type='text'
                placeholder="Téléphone professionnel"
                onChangeText={(val) => {
                  props.onChangeTelephone(val)
                }}
                keyboardType='phone-pad'
                isInvalid={props.errorSignUpStep1.errorTelephone}
                errorMessage=" * Vérifier votre Téléphone professionnel"
            />
        </View>

  )
}

SignUpStep1.propTypes = {
  prenom: PropTypes.string,
  onChangePrenom: PropTypes.func,
  nom: PropTypes.string,
  onChangeNom: PropTypes.func,
  fonction: PropTypes.string,
  onChangeFonction: PropTypes.func,
  entreprise: PropTypes.string,
  onChangeEntreprise: PropTypes.func,
  adresseProf: PropTypes.string,
  onChangeAdresseProf: PropTypes.func,
  telephone: PropTypes.string,
  onChangeTelephone: PropTypes.func,
  errorSignUpStep1: PropTypes.object
}
