import React from 'react';
import { View } from 'react-native';
import { Avatar, Container, SelectInput, TextInput, Upload } from '../../designSystem';
import PropTypes from 'prop-types'

const AddContactsForm = (props) => {
    return (
        <Container>

            <View style={{ alignItems: "center" }}>
                <Avatar src={props.photo ? props.photo : require("../../assets/images/person.svg")} size={"big"} />
            </View>
            <Upload
                isInput={false}
                allowedTypes={["images"]}
                label={"Ajouter une photo "}
                onRightIconPress={props.setPhoto}
                value={props.photo}
                imageWidth={98}
                imageHeight={98}
            />
            <View>
                <TextInput
                    label="Numéro d’identification"
                    placeholder="Numéro d’identification"
                    value={props.idNumber}
                    isInvalid={props.errors.errorIdNumber}
                    errorMessage=" * Vérifier votre Numéro d’identification"
                    onChangeText={(val) => props.setIdNumber(val)}
                    keyboardType={"number-pad"}
                />
                <TextInput
                    label="Civilité"
                    placeholder="Civilité"
                    value={props.civilite}
                    isInvalid={props.errors.errorCivilite}
                    errorMessage=" * Vérifier votre civilité"
                    onChangeText={(val) => props.setCivilite(val)}
                />
                <TextInput
                    label="Prénom"
                    placeholder="Prénom"
                    value={props.prenom}
                    isInvalid={props.errors.errorPrenom}
                    errorMessage=" * Vérifier votre prénom"
                    onChangeText={(val) => props.setPrenom(val)}
                />
                <TextInput
                    label="Particule"
                    placeholder="Particule"
                    value={props.particlule}
                    isInvalid={props.errors.errorParticlule}
                    errorMessage=" * Vérifier votre particule"
                    onChangeText={(val) => props.setParticule(val)}
                />
                <TextInput
                    label="Nom"
                    placeholder="Nom"
                    value={props.nom}
                    isInvalid={props.errors.errorNom}
                    errorMessage=" * Vérifier votre nom"
                    onChangeText={(val) => props.setNom(val)}
                />
                <SelectInput
                    label="Groupe"
                    data={props.groupeList}
                    placeholder="Groupe"
                    selectedKey={props.groupe._id}
                    isInvalid={props.errors.errorGroupe}
                    errorMessage=" * Vérifier votre groupe"
                    onChange={(val) => props.setGroupe(val)}
                />
                <SelectInput
                    label="Sous-groupe"
                    data={props.subGroupeList}
                    placeholder="Sous-groupe"
                    selectedKey={props.sousGroupe}
                    isInvalid={props.errors.errorSousGroupe}
                    errorMessage=" * Vérifier votre sous-groupe"
                    onChange={(val) => props.setSousGroupe(val)}
                />
                <TextInput
                    label="Email"
                    placeholder="Email"
                    value={props.email}
                    isInvalid={props.errors.errorEmail}
                    errorMessage=" * Vérifier votre email"
                    onChangeText={(val) => props.setEmail(val)}
                    keyboardType={"email-address"}
                />
                <TextInput
                    label="Téléphone"
                    placeholder="Téléphone"
                    value={props.phone}
                    isInvalid={props.errors.errorPhone}
                    errorMessage=" * Vérifier votre téléphonne"
                    onChangeText={(val) => props.setPhone(val)}
                    keyboardType={"number-pad"}
                />
                <TextInput
                    label="Adresse postale"
                    placeholder="Adresse postale"
                    value={props.adresse}
                    isInvalid={props.errors.errorAdresse}
                    errorMessage=" * Vérifier votre adresse"
                    onChangeText={(val) => props.setAdresse(val)}
                />
                <Upload
                    label="Pièce d’identité"
                    allowedTypes={["images", "pdf"]}
                    placeholder="Pièce d’identité"
                    value={props.identite.name}
                    isInvalid={props.errors.errorIdentité}
                    errorMessage=" * Vérifier votre piéce d'identité"
                    onRightIconPress={props.setIdentite}
                />
                <Upload
                    label="Relevé d’identité bancaire"
                    allowedTypes={["images", "pdf"]}
                    placeholder="Relevé d’identité bancaire"
                    value={props.identiteBancaire.name}
                    isInvalid={props.errors.errorIdentiteBancaire}
                    errorMessage=" * Vérifier votre identité bancaire"
                    onRightIconPress={props.setIdentiteBancaire}
                />
                <Upload
                    label="Kbis"
                    allowedTypes={["images", "pdf"]}
                    placeholder="Kbis"
                    value={props.kbis.name}
                    isInvalid={props.errors.errorKbis}
                    errorMessage=" * Vérifier votre Kbis"
                    onRightIconPress={props.setKbis}
                />
                <TextInput
                    label="N° de TVA intracommunautaire"
                    placeholder="N° de TVA intracommunautaire"
                    value={props.tva}
                    isInvalid={props.errors.errorTva}
                    errorMessage=" * Vérifier votre N° de TVA intracommunautaire"
                    onChangeText={(val) => props.setTva(val)}
                    keyboardType={"number-pad"}
                />
                <TextInput
                    label="Frais de vente (HT)"
                    placeholder="Frais de vente (HT)"
                    value={props.fraisVente}
                    isInvalid={props.errors.errorFraisVente}
                    errorMessage=" * Vérifier vos Frais de vente (HT)"
                    onChangeText={(val) => props.setFraisVente(val)}
                    keyboardType={"number-pad"}
                />
            </View>
        </Container>
    );
}


AddContactsForm.propTypes = {
    setFraisVente: PropTypes.func,
    setTva: PropTypes.func,
    setKbis: PropTypes.func,
    setIdentiteBancaire: PropTypes.func,
    setIdentite: PropTypes.func,
    setAdresse: PropTypes.func,
    setPhone: PropTypes.func,
    setEmail: PropTypes.func,
    setSousGroupe: PropTypes.func,
    setGroupe: PropTypes.func,
    setNom: PropTypes.func,
    setParticule: PropTypes.func,
    setPrenom: PropTypes.func,
    setCivilite: PropTypes.func,
    setIdNumber: PropTypes.func,
    setPhoto: PropTypes.func,
    errors: PropTypes.object,
    idNumber: PropTypes.number,
    civilite: PropTypes.string,
    prenom: PropTypes.string,
    nom: PropTypes.string,
    particlule: PropTypes.string,
    groupe: PropTypes.string,
    sousGroupe: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.number,
    adresse: PropTypes.string,
    identite: PropTypes.object,
    identiteBancaire: PropTypes.object,
    kbis: PropTypes.object,
    tva: PropTypes.number,
    fraisVente: PropTypes.number,
    photo: PropTypes.object

}





export default AddContactsForm;