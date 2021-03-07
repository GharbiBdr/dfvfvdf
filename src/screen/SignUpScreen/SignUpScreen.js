import React, { useState } from 'react'
import SignUpStep1 from '../../layouts/SignUpStep1/SignUpStep1'
import { Button, Container, Icon } from '../../designSystem'
import { ScrollView, View } from 'react-native'
import SignUpStep2 from '../../layouts/SignUpStep2/SignUpStep2'
import SignUpStep3 from '../../layouts/SignUpStep3/SignUpStep3'
import Colors from '../../assets/styles/Colors'
import PropTypes from 'prop-types'
import { apiSignUp } from '../../Api/SignUp'
import Loader from '../../layouts/Loader/Loader'
export default function SignUpScreen (props) {
  const [loadind, setloadind] = useState(false)
  const [step, setStep] = useState(1)
  const [prenom, onChangePrenom] = useState('')
  const [nom, onChangeNom] = useState('')
  const [fonction, onChangeFonction] = useState('')
  const [entreprise, onChangeEntreprise] = useState('')
  const [adresseProf, onChangeAdresseProf] = useState('')
  const [telephone, onChangeTelephone] = useState('')
  const [errorSignUpStep1, setErrorSignUpStep1] = useState({
    errorPrenom: false,
    errorNom: false,
    errorFonction: false,
    errorEntreprise: false,
    errorAdresseProf: false,
    errorTelephone: false
  })
  const [logo, onChangeLogo] = useState({})
  const [logoName, onChangeLogoName] = useState('')
  const [conditions, onChangeConditions] = useState({})
  const [conditionsName, onChangeConditionsName] = useState('')
  const [mailEntreprise, onChangeMailEntreprise] = useState('')
  const [telephoneEntreprise, onChangeTelephoneEntreprise] = useState('')
  const [siegeSocial, onChangeSiegeSocial] = useState('')
  const [sirenSiret, onChangeSirenSiret] = useState('')
  const [errorSignUpStep2, setErrorSignUpStep2] = useState({
    errorLogo: false,
    errorConditions: false,
    errorMailEntreprise: false,
    errorTelephoneEntreprise: false,
    errorSiegeSocial: false,
    errorSirenSiret: false,
    errorMessageMailEntreprise: '',
    errorMessageSirent: ''
  })
  const [passwordConditions, onChangePasswordConditions] = useState([{ text: ' > 8 caractères', valid: false }, { text: '1 majuscule', valid: false }, { text: '1 caractère spécial', valid: false }])
  const [mailProfessional, onChangeMailProfessional] = useState('')
  const [password, setPassword] = useState('')
  const [confirmePassword, onChangeConfirmePassword] = useState('')
  const [errorSignUpStep3, setErrorSignUpStep3] = useState({
    errorMailProfessional: false,
    errorConfirmePassword: false,
    errorMessageMailAdmin: ''
  })
  function resetData () {
    setStep(1)
    onChangePrenom('')
    onChangeNom('')
    onChangeFonction('')
    onChangeEntreprise('')
    onChangeAdresseProf('')
    onChangeTelephone('')
    setErrorSignUpStep1({
      errorLogo: false,
      errorConditions: false,
      errorMailEntreprise: false,
      errorTelephoneEntreprise: false,
      errorSiegeSocial: false,
      errorSirenSiret: false,
      errorMessageMailEntreprise: '',
      errorMessageSirent: ''
    })
    onChangeLogo({})
    onChangeLogoName('')
    onChangeConditions({})
    onChangeConditionsName('')
    onChangeMailEntreprise('')
    onChangeTelephoneEntreprise('')
    onChangeSiegeSocial('')
    onChangeSirenSiret('')
    setErrorSignUpStep2({
      errorLogo: false,
      errorConditions: false,
      errorMailEntreprise: false,
      errorTelephoneEntreprise: false,
      errorSiegeSocial: false,
      errorSirenSiret: false,
      errorMessageMailEntreprise: '',
      errorMessageSirent: ''
    })
    onChangePasswordConditions([{ text: ' > 8 caractères', valid: false }, { text: '1 majuscule', valid: false }, { text: '1 caractère spécial', valid: false }])
    onChangeMailProfessional('')
    setPassword('')
    onChangeConfirmePassword('')
    setErrorSignUpStep3({
      errorMailProfessional: false,
      errorConfirmePassword: false,
      errorMessageMailAdmin: ''
    })
  }
  function goBack () {
    if (step === 1) {
      props.navigation.goBack()
    } else {
      setStep(step - 1)
    }
  }
  async function VerifStep1 () {
    const error = { ...errorSignUpStep1 }
    if (prenom.trim() === '') {
      error.errorPrenom = true
    } else {
      error.errorPrenom = false
    }
    if (nom.trim() === '') {
      error.errorNom = true
    } else {
      error.errorNom = false
    }
    if (fonction.trim() === '') {
      error.errorFonction = true
    } else {
      error.errorFonction = false
    }
    if (entreprise.trim() === '') {
      error.errorEntreprise = true
    } else {
      error.errorEntreprise = false
    }
    if (adresseProf.trim() === '') {
      error.errorAdresseProf = true
    } else {
      error.errorAdresseProf = false
    }
    if (!isPhoneNumber(telephone)) {
      error.errorTelephone = true
    } else {
      error.errorTelephone = false
    }
    setErrorSignUpStep1(error)
    if (prenom.trim() !== '' && nom.trim() !== '' && fonction.trim() !== '' && entreprise.trim() !== '' && adresseProf.trim() !== '' && await isPhoneNumber(telephone)) {
      setStep(2)
    }
  }
  async function VerifStep2 () {
    const error = { ...errorSignUpStep2 }
    if (logoName === '') {
      error.errorLogo = true
    } else {
      error.errorLogo = false
    }
    if (conditionsName === '') {
      error.errorConditions = true
    } else {
      error.errorConditions = false
    }
    if (!await isMail(mailEntreprise)) {
      error.errorMailEntreprise = true
      error.errorMessageMailEntreprise = ' * Vérifier votre Mail générique de l’entreprise'
    } else {
      error.errorMailEntreprise = false
    }
    if (!await isPhoneNumber(telephoneEntreprise)) {
      error.errorTelephoneEntreprise = true
    } else {
      error.errorTelephoneEntreprise = false
    }
    if (siegeSocial.trim() === '') {
      error.errorSiegeSocial = true
    } else {
      error.errorSiegeSocial = false
    }
    if (sirenSiret.trim() === '') {
      error.errorSirenSiret = true
      error.errorMessageSirent = ' * Vérifier votre SIREN/SIRET de l’entreprise'
    } else {
      error.errorSirenSiret = false
    }
    setErrorSignUpStep2(error)
    if (logoName !== '' && conditionsName !== '' && await isMail(mailEntreprise) && await isPhoneNumber(telephoneEntreprise) && siegeSocial.trim() !== '' && sirenSiret.trim() !== '') {
      setStep(3)
    }
  }
  async function VerifStep3 () {
    const error = { ...errorSignUpStep3 }
    if (!(isMail(mailProfessional))) {
      error.errorMailProfessional = true
      error.errorMessageMailAdmin = ' * Vérifier votre Email professionnel'
    } else {
      error.errorMailProfessional = false
    }
    if (password !== confirmePassword) {
      error.errorConfirmePassword = true
    } else {
      error.errorConfirmePassword = false
    }
    setErrorSignUpStep3(error)
    setloadind(true)
    if (isMail(mailProfessional) && password.length >= 8 && hasUperCase(password) && hasSpecialCaracter(password) && password === confirmePassword) {
      const responseJson = await apiSignUp(prenom, nom, telephone, adresseProf, fonction, mailProfessional, password, entreprise, mailEntreprise, telephoneEntreprise, siegeSocial, sirenSiret, conditions, logo)
      if (responseJson.statusCode === 201) {
        resetData()
        setloadind(false)
        props.navigation.navigate('OffresScreen')
      }
      if (responseJson.statusCode === 400) {
        if (responseJson.message === 'mail administrator allready exist!') {
          const error = { ...errorSignUpStep3 }
          error.errorMailProfessional = true
          error.errorMessageMailAdmin = ' * Cette adresse é-mail est utiliser'
          setErrorSignUpStep3(error)
          setloadind(false)
        } else if (responseJson.message === 'mail entreprise allready exist!') {
          const error = { ...errorSignUpStep2 }
          error.errorMailEntreprise = true
          error.errorMessageMailEntreprise = ' * Cette adresse é-mail est utiliser'
          setErrorSignUpStep2(error)
          setStep(2)
          setloadind(false)
        } else if (responseJson.message === 'siret entreprise allready exist!') {
          const error = { ...errorSignUpStep2 }
          error.errorSirenSiret = true
          error.errorMessageSirent = ' * SIREN/SIRET utiliser'
          setErrorSignUpStep2(error)
          setStep(2)
          setloadind(false)
        }
      }
    }
  }
  async function nextStep () {
    if (step === 1) {
      VerifStep1()
    }
    if (step === 2) {
      VerifStep2()
    }
    if (step === 3) {
      VerifStep3()
    }
  }
  function displayStep1 () {
    return (
      <SignUpStep1
        prenom={prenom}
        onChangePrenom={onChangePrenom}
        nom={nom}
        onChangeNom={onChangeNom}
        fonction={fonction}
        onChangeFonction={onChangeFonction}
        entreprise={entreprise}
        onChangeEntreprise={onChangeEntreprise}
        adresseProf={adresseProf}
        onChangeAdresseProf={onChangeAdresseProf}
        telephone={telephone}
        onChangeTelephone={onChangeTelephone}
        errorSignUpStep1={errorSignUpStep1}
      />
    )
  }
  function displayStep2 () {
    return (
      <SignUpStep2
        logo={logo}
        onChangeLogo={onChangeLogo}
        conditions={conditions}
        onChangeConditions={onChangeConditions}
        mailEntreprise={mailEntreprise}
        onChangeMailEntreprise={onChangeMailEntreprise}
        telephoneEntreprise={telephoneEntreprise}
        onChangeTelephoneEntreprise={onChangeTelephoneEntreprise}
        siegeSocial={siegeSocial}
        onChangeSiegeSocial={onChangeSiegeSocial}
        sirenSiret={sirenSiret}
        onChangeSirenSiret={onChangeSirenSiret}
        errorSignUpStep2={errorSignUpStep2}
        logoName={logoName}
        uploadLogo={uploadLogo}
        conditionsName={conditionsName}
        uploadConditionGeneral={uploadConditionGeneral}
      />
    )
  }
  function displayStep3 () {
    return (

      <SignUpStep3
        passwordConditions={passwordConditions}
        mailProfessional={mailProfessional}
        onChangeMailProfessional={onChangeMailProfessional}
        password={password}
        confirmePassword={confirmePassword}
        onChangeConfirmePassword={onChangeConfirmePassword}
        onChangePassword={onChangePassword}
        errorSignUpStep3={errorSignUpStep3}

      />
    )
  }
  function uploadLogo (value) {
    onChangeLogoName(value.name)
    onChangeLogo(value)
  }
  function uploadConditionGeneral (value) {
    onChangeConditions(value)
    onChangeConditionsName(value.name)
  }
  function hasUperCase (str) {
    return /[A-Z]/.test(str)
  }
  function hasSpecialCaracter (str) {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str)
  }
  function isMail (str) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str)
  }
  function isPhoneNumber (str) {
    return /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g.test(str)
  }
  async function onChangePassword (value) {
    const uperCase = await hasUperCase(value)
    const specialCaracter = await hasSpecialCaracter(value)
    onChangePasswordConditions([{ text: ' > 8 caractères', valid: (value.length >= 8) }, { text: '1 majuscule', valid: uperCase }, { text: '1 caractère spécial', valid: specialCaracter }])
    setPassword(value)
  }
  return (
    <Container>
      {loadind
        ? <Loader/>
        : null
      }
      <Icon
        name="go-back"
        size='extra-small'
        color={Colors.black}
        onPress={() => goBack()}
      />
      <ScrollView>
        {
          step === 1
            ? displayStep1()
            : null

        }
        {
          step === 2
            ? displayStep2()
            : null

        }
        {
          step === 3
            ? displayStep3()
            : null

        }
        <View style={step === 3 ? { paddingTop: 32 } : null} >
          <Button
            theme='primary'
            text={step === 3 ? 'Créer mon compte' : 'Suivant'}
            onPress={() => { nextStep() }}
          />
        </View>
      </ScrollView>
    </Container>

  )
}
SignUpScreen.propTypes = {
  navigation: PropTypes.object
}
