import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import AddContactsForm from '../../layouts/Contacts/AddContactForm';
import Header from '../../layouts/Header/Header';
import PropTypes from 'prop-types'
import { createContact, getGroups, getSousGroups } from '../../Api/Contacts';



const AddContacts = (props) => {
    const [groupeList, setGroupeList] = useState([])
    const [subGroupeList, setSubGroupeList] = useState([])
    const [idNumber, setIdNumber] = useState("")
    const [photo, setPhoto] = useState("")
    const [civilite, setCivilite] = useState("")
    const [prenom, setPrenom] = useState("")
    const [nom, setNom] = useState("")
    const [particlule, setParticule] = useState("")
    const [groupe, setGroupe] = useState("")
    const [sousGroupe, setSousGroupe] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [adresse, setAdresse] = useState("")
    const [identite, setIdentite] = useState("")
    const [identiteBancaire, setIdentiteBancaire] = useState("")
    const [kbis, setKbis] = useState("")
    const [tva, setTva] = useState("")
    const [fraisVente, setFraisVente] = useState("")
    const [errors, setErrors] = useState({
        errorPrenom: false,
        errorNom: false,
        errorCivilite: false,
        errorIdNumber: false,
        errorParticlule: false,
        errorGroupe: false,
        errorSousGroupe: false,
        errorEmail: false,
        errorPhone: false,
        errorAdresse: false,
        errorIdentité: false,
        errorIdentiteBancaire: false,
        errorKbis: false,
        errorTva: false,
        errorFraisVente: false,
        errorPhoto: false
    })

    useEffect(() => {
        async function getGroupsList() {
            const groupe = await getGroups()
            if (groupe.statusCode === 200) {
                setGroupeList(groupe.data.map(el => { return { ...el, key: el._id, label: el.name } }))
            }
        }
        getGroupsList()
    }, [])



    const onChangeGroupe = async (groupe) => {
        setGroupe(groupe)
        const subGroupe = await getSousGroups(groupe.key)
        if (subGroupe.statusCode === 200) {
            setSubGroupeList(subGroupe.data.map(el => { return { ...el, key: el._id, label: el.name } }))

        }
    }


    const validateInputs = () => {
        const newErrors = { ...errors }
        if (!prenom) {
            newErrors.errorPrenom = true
        } else {
            newErrors.errorPrenom = false
        }
        if (!prenom) {
            newErrors.errorNom = true
        } else {
            newErrors.errorNom = false
        }
        if (!civilite) {
            newErrors.errorCivilite = true
        } else {
            newErrors.errorCivilite = false
        }
        if (!particlule) {
            newErrors.errorParticlule = true
        } else {
            newErrors.errorParticlule = false
        }
        if (!groupe) {
            newErrors.errorGroupe = true
        } else {
            newErrors.errorGroupe = false
        }
        if (!sousGroupe) {
            newErrors.errorSousGroupe = true
        } else {
            newErrors.errorSousGroupe = false
        }
        if (!email || !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
            newErrors.errorEmail = true
        } else {
            newErrors.errorEmail = false
        }
        if (!phone) {
            newErrors.errorPhone = true
        } else {
            newErrors.errorPhone = false
        }
        if (!adresse) {
            newErrors.errorAdresse = true
        } else {
            newErrors.errorAdresse = false
        }
        if (!identiteBancaire) {
            newErrors.errorIdentiteBancaire = true
        } else {
            newErrors.errorIdentiteBancaire = false
        }
        if (!identite) {
            newErrors.errorIdentité = true
        } else {
            newErrors.errorIdentité = false
        }
        if (!kbis) {
            newErrors.errorKbis = true
        } else {
            newErrors.errorKbis = false
        }
        if (!tva) {
            newErrors.errorTva = true
        } else {
            newErrors.errorTva = false
        }
        if (!fraisVente) {
            newErrors.errorFraisVente = true
        } else {
            newErrors.errorFraisVente = false
        }
        setErrors(newErrors)
    }

    const OnValidate = async  () => {
        const formData = new FormData()
        formData.append("num", idNumber)
        formData.append("lastName", nom)
        formData.append("firstName", prenom)
        formData.append("tel", phone)
        formData.append("mail", email)
        formData.append("civility", civilite)
        formData.append("particule", particlule)
        formData.append("address", adresse)
        formData.append("tva", tva)
        formData.append("frais", fraisVente)
        formData.append("subGroup", sousGroupe.key)
        formData.append("group", groupe.key)
        formData.append("photo", photo)
        formData.append("identityPiece", identite)
        formData.append("bankDetails", identiteBancaire)
        formData.append("kbis", kbis)
        const response = await createContact(formData)
        if (response.statusCode !== 200) {
            validateInputs()
        } else {
            props.navigation.navigate('Home',{screen:"Contacts List"})
        }
    }


    return (<ScrollView >
        <Header screenName="Nouveau contact" leftLabel="Annuler" rightLabel="OK" handleRightAction={OnValidate} handleLeftAction={() => props.navigation.navigate('Home',{screen:"Contacts List"})} />
        <AddContactsForm
            groupeList={groupeList}
            subGroupeList={subGroupeList}
            idNumber={idNumber}
            civilite={civilite}
            prenom={prenom}
            nom={nom}
            particlule={particlule}
            groupe={groupe}
            sousGroupe={sousGroupe}
            email={email}
            phone={phone}
            adresse={adresse}
            identite={identite}
            identiteBancaire={identiteBancaire}
            kbis={kbis}
            tva={tva}
            fraisVente={fraisVente}
            errors={errors}
            setIdNumber={setIdNumber}
            setCivilite={setCivilite}
            setPrenom={setPrenom}
            setNom={setNom}
            setParticule={setParticule}
            setGroupe={(groupe) => onChangeGroupe(groupe)}
            setSousGroupe={setSousGroupe}
            setEmail={setEmail}
            setPhone={setPhone}
            setAdresse={setAdresse}
            setIdentite={setIdentite}
            setIdentiteBancaire={setIdentiteBancaire}
            setKbis={setKbis}
            setTva={setTva}
            setFraisVente={setFraisVente}
            photo={photo}
            setPhoto={setPhoto}

        />
    </ScrollView>);
}

AddContacts.propTypes = {
    navigation: PropTypes.object
}

export default AddContacts;