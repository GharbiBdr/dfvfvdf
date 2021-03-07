import React  from 'react';
import {View } from 'react-native';
import Colors from '../../../assets/styles/Colors';
import Style from '../../../assets/styles/Style';
import { TextInput, Icon, Autocomplete } from '../../../designSystem';
import { FR } from '../../../Lang/Lang';
import { techniques } from '../../../screen/Lots/StaticData';

const ArtistWorkForm = (props) => {
    return (
        <>
            <Autocomplete
                placeholder={FR.artiste}
                label={FR.artiste}
                data={props.artistList}
                handleSelectItem={(artist) => props.setArtiste(artist)}
                isInvalid={props.errors.artisteError}
                errorMessage={FR.required}
            />

            <TextInput
                placeholder={FR.titre}
                label={FR.titre}
                value={props.titre}
                isInvalid={props.errors.titreError}
                errorMessage={FR.required}
                onChangeText={val => props.setTitre(val)}
            />
            <Autocomplete
                placeholder={FR.technique}
                label={FR.technique}
                data={techniques}
                handleSelectItem={(technique) => props.setTechnique(technique)}
                isInvalid={props.errors.techniqueError}
                errorMessage={FR.required}
            />
            <TextInput
                placeholder={FR.signature}
                label={FR.signature}
                value={props.signature}
                isInvalid={props.errors.signatureError}
                errorMessage={FR.required}
                onChangeText={val => props.setSignature(val)}
            />
            <View style={Style.dimensionsContainer}>
                <View style={{ flex: 1 }}>
                    <TextInput
                        label={FR.dimension}
                        placeholder={FR.largeur}
                        value={props.largeur}
                        isInvalid={props.errors.largeurError}
                        errorMessage={FR.required}
                        onChangeText={val => props.setLargeur(val)}
                        keyboardType={'number-pad'}
                    />
                </View>
                <View style={Style.dimensionsIcons}>
                    <Icon size="extra-small" color={Colors.primary} name="x" />
                </View>
                <View style={{ flex: 1 }}>
                    <TextInput
                        placeholder={FR.hauteur}
                        value={props.hauteur}
                        isInvalid={props.errors.hauteurError}
                        errorMessage={FR.required}
                        onChangeText={val => props.setHauteur(val)}
                        keyboardType={'number-pad'}
                    />
                </View>
                <View style={Style.dimensionsIcons}>
                    <Icon size="extra-small" color={Colors.primary} name="x" />
                </View>
                <View style={{ flex: 1 }}>
                    <TextInput
                        placeholder={FR.profondeur}
                        value={props.profondeur}
                        isInvalid={props.errors.profondeurError}
                        errorMessage={FR.required}
                        onChangeText={val => props.setProfondeur(val)}
                        keyboardType={'number-pad'}
                    />
                </View>
            </View>
            <TextInput
                placeholder={FR.caracteristiques}
                label={FR.caracteristiques}
                value={props.caracteristique}
                isInvalid={props.errors.caracteristiqueError}
                errorMessage={FR.required}
                onChangeText={val => props.setCaracteristique(val)}
            />
            <TextInput
                placeholder={FR.provenance}
                label={FR.provenance}
                value={props.provenance}
                isInvalid={props.errors.provenanceError}
                errorMessage={FR.required}
                onChangeText={val => props.setProvenance(val)}
                multiline={true}
            />
            <TextInput
                placeholder={`${FR.rapportCondition}...`}
                label={FR.rapportCondition}
                value={props.rapport}
                isInvalid={props.errors.rapportError}
                errorMessage={FR.required}
                onChangeText={val => props.setRapport(val)}
                multiline={true}
            />
        </>
    )
}

export default ArtistWorkForm;