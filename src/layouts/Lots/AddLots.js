import React, { forwardRef } from 'react'
import { ScrollView, View } from 'react-native'
import Style from '../../assets/styles/Style'
import {
  Button,
  Container,
  TextInput,
  SelectInput,
  Col,
  Row,
  Autocomplete
} from '../../designSystem'
import UploadLots from './UploadLotsComponents/UploadLots'
import PropTypes from 'prop-types'
import { FR } from '../../Lang/Lang'
import ArtistWorkForm from './AddLotsForms/ArtistWorkForm'
import WorksOfArt from './AddLotsForms/WorksOfArt'
import LifeStyleForm from './AddLotsForms/LifeStyleForm'
import CivilisationsForm from './AddLotsForms/CivilisationsForm'

const AddLots = forwardRef((props, ref) => {
  const studyLotPressed = () => {
    props.setLotEtude(true)
    props.setClient(false)
  }
  const clientLotPressed = () => {
    props.setLotEtude(false)
    props.setClient(true)
  }

  const displayForm = () => {
    if (props.categorie.label === "Civilisations") {
      return <CivilisationsForm
        errors={props.errors}
        lieuEthnie={props.lieuEthnie}
        setLieuEthnie={props.setLieuEthnie}
        objectType={props.objectType}
        setObjectType={props.setObjectType}
        technique={props.technique}
        setTechnique={props.setTechnique}
        largeur={props.largeur}
        hauteur={props.hauteur}
        profondeur={props.profondeur}
        setLargeur={props.setLargeur}
        setHauteur={props.setHauteur}
        setProfondeur={props.setProfondeur}
        caracteristique={props.caracteristique}
        setCaracteristique={props.setCaracteristique}
        provenance={props.provenance}
        rapport={props.rapport}
        setProvenance={props.setProvenance}
        setRapport={props.setRapport}

      />
    } else if (props.categorie.label === "Oeuvre d'art") {
      return <WorksOfArt
        errors={props.errors}
        lieuDateFabrication={props.lieuDateFabrication}
        setLieuDateFabrication={props.setLieuDateFabrication}
        marque={props.marque}
        setMarque={props.setMarque}
        objectType={props.objectType}
        setObjectType={props.setObjectType}
        technique={props.technique}
        setTechnique={props.setTechnique}
        largeur={props.largeur}
        hauteur={props.hauteur}
        profondeur={props.profondeur}
        setLargeur={props.setLargeur}
        setHauteur={props.setHauteur}
        setProfondeur={props.setProfondeur}
        caracteristique={props.caracteristique}
        setCaracteristique={props.setCaracteristique}
        provenance={props.provenance}
        rapport={props.rapport}
        setProvenance={props.setProvenance}
        setRapport={props.setRapport}
      />
    } else if (props.categorie.label === "Luxe & Lyfestyle") {
      return <LifeStyleForm
        errors={props.errors}
        maisonGriffe={props.maisonGriffe}
        objectType={props.objectType}
        etiquette={props.etiquette}
        poids={props.poids}
        setMaisonGriffe={props.setMaisonGriffe}
        setObjectType={props.setObjectType}
        setEtiquette={props.setEtiquette}
        setPoids={props.setPoids}
        largeur={props.largeur}
        hauteur={props.hauteur}
        profondeur={props.profondeur}
        caracteristique={props.caracteristique}
        provenance={props.provenance}
        rapport={props.rapport}
        setSignature={props.setSignature}
        setLargeur={props.setLargeur}
        setHauteur={props.setHauteur}
        setProfondeur={props.setProfondeur}
        setCaracteristique={props.setCaracteristique}
        setProvenance={props.setProvenance}
        setRapport={props.setRapport}
        technique={props.technique}
        setTechnique={props.setTechnique}
      />
    } else {
      return <ArtistWorkForm
        signature={props.signature}
        largeur={props.largeur}
        hauteur={props.hauteur}
        profondeur={props.profondeur}
        caracteristique={props.caracteristique}
        provenance={props.provenance}
        rapport={props.rapport}
        setSignature={props.setSignature}
        setLargeur={props.setLargeur}
        setHauteur={props.setHauteur}
        setProfondeur={props.setProfondeur}
        setCaracteristique={props.setCaracteristique}
        setProvenance={props.setProvenance}
        setRapport={props.setRapport}
        errors={props.errors}
        technique={props.technique}
        setTechnique={props.setTechnique}
        setArtiste={(artist) => props.setArtiste(artist)}
        artiste={props.artiste}
        setTitre={props.setTitre}
        titre={props.titre}
        artistList={props.artistList}
      />
    }
  }
  return (
    
    <ScrollView>
      <View>
      <Container>
        <UploadLots
          ref={ref}
          images={props.images}
          onRightIconPress={file => props.setImages(file)}
          imageWidth={133}
          imageHeight={105}
          missingImage={props.errors.imagesError}
          onDeleteImage={index => props.onDeleteImage(index)}
        />
        <Autocomplete
          placeholder={FR.prenomContact}
          label={FR.prenomContact}
          data={props.contactsList}
          handleSelectItem={val => props.setPrenom(val)}
          isInvalid={props.errors.techniqueError}
          errorMessage={FR.required}
        />
        <SelectInput
          data={props.categorieList}
          placeholder={FR.Categorie}
          selectedKey={props.categorie.key}
          isInvalid={props.errors.categoryError}
          errorMessage={FR.required}
          onChange={val => props.setCategorie(val)}
        />
        <SelectInput
          data={props.subCategoryList}
          placeholder={FR.sousCategory}
          selectedKey={props.sousCategory.key}
          isInvalid={props.errors.sousCategoryError}
          errorMessage={FR.required}
          onChange={val => props.setSousCategory(val)}
        />
        <Row style={Style.addLotsButtons}>
          <Col col={6}>
            <Button
              onPress={() => props.setGuided(!props.guided)}
              text={FR.textGuide}
              size='small'
              theme={props.guided ? "primary" : "default"}
            />
          </Col>
          <Col col={6}>
            <Button
              onPress={() => props.setGuided(!props.guided)}
              theme={!props.guided ? "primary" : "default"}
              text={FR.textLibre}
              size='small'
            />
          </Col>
        </Row>

        {props.guided ?
            displayForm()
          :
         
            <TextInput
              placeholder={FR.textLibreDesc}
              value={props.texte}
              isInvalid={props.errors.texteError}
              errorMessage={FR.textError}
              onChangeText={val => props.setTexte(val)}
              multiline={true}
            />
          }
        <Row>
          <Col col={6}>
            <TextInput
              label={FR.estimationBasse}
              placeholder={FR.estimationBasse}
              value={props.estimationBasse}
              isInvalid={props.errors.estimationBasseError || props.errors.estimationHauteLowerError}
              errorMessage={props.errors.estimationBasseError ? FR.required : FR.invalidField}
              onChangeText={val => props.setEstimationBasse(val)}
              keyboardType={'number-pad'}
            />
          </Col>
          <Col col={6}>
            <TextInput
              placeholder={FR.estimationHaute}
              label={FR.estimationHaute}
              value={props.estimationHaute}
              isInvalid={props.errors.estimationHauteError || props.errors.estimationHauteLowerError}
              errorMessage={props.errors.estimationHauteError ? FR.required : FR.invalidField}
              onChangeText={val => props.setEstimationHaute(val)}
              keyboardType={'number-pad'}
            />
          </Col>
        </Row>
        <Row style={Style.addLotsButtons}>
          <Col col={6}>
            <Button
              onPress={studyLotPressed}
              theme={props.LotEtude === null ? "default" : props.LotEtude === false ? "default" : "primary"}
              text={FR.LotEtude}
              size='small'
            />
          </Col>
          <Col col={6}>
            <Button
              onPress={clientLotPressed}
              theme={props.LotClient === null ? "default" : props.LotClient === false ? "default" : "primary"}
              text={FR.LotClient}
              size='small'
            />
          </Col>
        </Row>
        <TextInput
          placeholder={FR.nbrePieceParLot}
          label={FR.nbrePieceParLot}
          value={props.NbrePiece}
          isInvalid={props.errors.NbrePieceError}
          errorMessage={FR.required}
          onChangeText={val => props.setNbrePiece(val)}
          keyboardType={'number-pad'}
        />
        <TextInput
          placeholder={FR.fraisDuLot}
          label={FR.fraisDuLot}
          value={props.frais}
          isInvalid={props.errors.fraisError}
          errorMessage={FR.required}
          onChangeText={val => props.setFrais(val)}
          keyboardType={'number-pad'}
        />


        <Row style={Style.shadowButtons}>
          <Col col={6}>
            <Button theme='default' text={FR.ajoutLot} size='small' />
          </Col>
          <Col col={6}>
            <Button theme="primary" onPress={props.onSubmit} text={FR.terminer} size='small' />
          </Col>
        </Row>
      </Container>
      </View>
    </ScrollView>
  )
})

AddLots.propTypes = {
  uploadContainer: PropTypes.object,
  images: PropTypes.array,
  missingImage: PropTypes.bool,
  onRightIconPress: PropTypes.func,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  errors: PropTypes.object,
  setImages: PropTypes.func,
  setLotEtude: PropTypes.func,
  setNbrePiece: PropTypes.func,
  setPrenom: PropTypes.func,
  setSousCategory: PropTypes.func,
  setCategorie: PropTypes.func,
  setTechnique: PropTypes.func,
  setTexte: PropTypes.func,
  setTitre: PropTypes.func,
  setFrais: PropTypes.func,
  setClient: PropTypes.func,
  setEstimationBasse: PropTypes.func,
  setEstimationHaute: PropTypes.func,
  setArtiste: PropTypes.func,
  onSubmit: PropTypes.func,
  categorie: PropTypes.object,
  frais: PropTypes.number,
  NbrePiece: PropTypes.number,
  LotEtude: PropTypes.bool,
  LotClient: PropTypes.bool,
  guided: PropTypes.bool,
  estimationHaute: PropTypes.number,
  estimationBasse: PropTypes.number,
  texte: PropTypes.string,
  technique: PropTypes.string,
  titre: PropTypes.string,
  sousCategory: PropTypes.object,
  prenom: PropTypes.string,
  setGuided: PropTypes.object,
  categorieList: PropTypes.array,
  subCategoryList: PropTypes.array,
  etiquetteSignature: PropTypes.string,
  lieuEthnie: PropTypes.string,
  setEtiquetteSignature: PropTypes.func,
  objectType: PropTypes.func,
  setObjectType: PropTypes.func,
  largeur: PropTypes.number,
  hauteur: PropTypes.number,
  profondeur: PropTypes.number,
  setLargeur: PropTypes.func,
  setHauteur: PropTypes.func,
  setProfondeur: PropTypes.func,
  caracteristique: PropTypes.string,
  setCaracteristique: PropTypes.func,
  provenance: PropTypes.string,
  rapport: PropTypes.string,
  setSignature: PropTypes.func,
  setProvenance: PropTypes.func,
  setRapport: PropTypes.func,
  setLieuEthnie: PropTypes.func,
  lieuDateFabrication: PropTypes.string,
  setLieuDateFabrication: PropTypes.func,
  marque: PropTypes.string,
  setMarque: PropTypes.func,
  maisonGriffe: PropTypes.string,
  etiquette: PropTypes.string,
  poids: PropTypes.number,
  setMaisonGriffe: PropTypes.func,
  setPoids: PropTypes.func,
  setEtiquette: PropTypes.func,
  onDeleteImage: PropTypes.func,
  signature: PropTypes.string,

}

AddLots.defaultProps = {
  uploadContainer: Style.uploadImageLotsContainer
}

export default AddLots
