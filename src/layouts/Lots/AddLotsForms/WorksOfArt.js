import React from 'react';
import { View } from 'react-native';
import Style from '../../../assets/styles/Style';
import { TextInput,Icon } from '../../../designSystem';
import { FR } from '../../../Lang/Lang';
import { techniques } from '../../../screen/Lots/StaticData';


const WorksOfArt = (props) => {
    return (
        <>
            <TextInput
                placeholder={FR.lieuDateFabrication}
                value={props.lieuDateFabrication}
                label={FR.lieuDateFabrication}
                isInvalid={props.errors.lieuDateFabricationError}
                errorMessage={FR.artisteError}
                onChangeText={val => props.setLieuDateFabrication(val)}
            />
            <TextInput
                placeholder={FR.objectType}
                label={FR.objectType}
                value={props.objectType}
                isInvalid={props.errors.objectTypeError}
                errorMessage={FR.required}
                onChangeText={val => props.setObjectType(val)}
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
                placeholder={FR.marque}
                label={FR.marque}
                value={props.marque}
                isInvalid={props.errors.marqueError}
                errorMessage={FR.required}
                onChangeText={val => props.setMarque(val)}
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

export default WorksOfArt;