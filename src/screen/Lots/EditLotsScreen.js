import React, { useState, useRef, useEffect } from 'react';
import Header from '../../layouts/Header/Header'
import AddLots from '../../layouts/Lots/AddLots';
import PropTypes from 'prop-types'
import { Icon, Label, Modal } from '../../designSystem';
import { View } from 'react-native';
import Colors from '../../assets/styles/Colors';
import { FR } from '../../Lang/Lang';
import Style from '../../assets/styles/Style';
import { API_URL } from '../../Config/Config';
import {getsubCategory,getCategoriesList,getArtistList,getLotById} from '../../Api/Lot'
import {getContactList} from './../../Api/Contacts'

const EditLots = (props) => {
    const scrollRef = useRef();
    const modalRef = useRef()
    const [images, setImages] = useState([])
    const [prenom, setPrenom] = useState("")
    const [categorieList, setCategorieList] = useState([])
    const [categorie, setCategorie] = useState("")
    const [subCategoryList, setSubCategoryList] = useState([])
    const [sousCategory, setSousCategory] = useState("")
    const [guided, setGuided] = useState(true)
    const [artiste, setArtiste] = useState("")
    const [titre, setTitre] = useState("")
    const [technique, setTechnique] = useState("")
    const [NbrePiece, setNbrePiece] = useState("")
    const [texte, setTexte] = useState("")
    const [estimationBasse, setEstimationBasse] = useState("")
    const [estimationHaute, setEstimationHaute] = useState("")
    const [LotEtude, setLotEtude] = useState(null)
    const [LotClient, setClient] = useState(null)
    const [signature, setSignature] = useState("")
    const [frais, setFrais] = useState("")
    const [largeur, setLargeur] = useState("")
    const [hauteur, setHauteur] = useState("")
    const [profondeur, setProfondeur] = useState("")
    const [caracteristique, setCaracteristique] = useState("")
    const [provenance, setProvenance] = useState("")
    const [rapport, setRapport] = useState("")
    const [maisonGriffe, setMaisonGriffe] = useState("")
    const [objectType, setObjectType] = useState("")
    const [etiquette, setEtiquette] = useState("")
    const [poids, setPoids] = useState("")
    const [etiquetteSignature, setEtiquetteSignature] = useState("")
    const [lieuEthnie, setLieuEthnie] = useState("")
    const [lieuDateFabrication, setLieuDateFabrication] = useState("")
    const [marque, setMarque] = useState("")
    const [contactsList, setContactList] = useState([])
    const [artistList, setArtistList] = useState([])


    const [errors, setErrors] = useState({
        prenomError: false,
        categoryError: false,
        sousCategoryError: false,
        artisteError: false,
        titreError: false,
        techniqueError: false,
        texteError: false,
        estimationHauteLowerError: false,
        estimationBasseError: false,
        estimationHauteError: false,
        NbrePieceError: false,
        fraisError: false,
        imagesError: false,
        signatureError: false,
        largeurError: false,
        hauteurError: false,
        profondeurError: false,
        caracteristiqueError: false,
        provenanceError: false,
        rapportError: false,
        maisonGriffeError: false,
        objectTypeError: false,
        etiquetteError: false,
        poidsError: false,
        lieuEthnieError: false,
        etiquetteSignatureError: false,
        marqueError: false,
        lieuDateFabricationError: false

    })
    const addImage = (file) => {
        setImages([...images, file])
        scrollRef.current.scrollToEnd({ animated: false })
    }

    const onDeleteImage = (index) => {
        setImages(images.filter((el, i) => i !== index))
    }


    
    const checkGuidedInputs = (newErros) => {
        if (texte) {
            newErros.texteError = false
        } else {
            newErros.texteError = true
        }
    }

    const checkNotGuidedInputs = (newErros) => {
        if (largeur) {
            newErros.largeurError = false
        } else {
            newErros.largeurError = true
        }
        if (hauteur) {
            newErros.hauteurError = false
        } else {
            newErros.hauteurError = true
        }
        if (profondeur) {
            newErros.profondeurError = false
        } else {
            newErros.profondeurError = true
        }
        if (technique) {
            newErros.techniqueError = false
        } else {
            newErros.techniqueError = true
        }
        if (rapport) {
            newErros.rapportError = false
        } else {
            newErros.rapportError = true
        }
        if (provenance) {
            newErros.provenanceError = false
        } else {
            newErros.provenanceError = true
        }
        if (caracteristique) {
            newErros.caracteristiqueError = false
        } else {
            newErros.caracteristiqueError = true
        }
    }

    const checkCivilistaionInputs = (newErros) => {
        if (lieuEthnie) {
            newErros.lieuEthnieError = false
        } else {
            newErros.lieuEthnieError = true
        }
        if (objectType) {
            newErros.objectTypeError = false
        } else {
            newErros.objectTypeError = true
        }
    }

    const checkOeuvreArtInputs = (newErros) => {
        if (objectType) {
            newErros.objectTypeError = false
        } else {
            newErros.objectTypeError = true
        }
        if (marque) {
            newErros.marqueError = false
        } else {
            newErros.marqueError = true
        }
        if (lieuDateFabrication) {
            newErros.lieuDateFabrication = false
        } else {
            newErros.lieuDateFabrication = true
        }
    }

    const checkLifeInputs = (newErros) => {
        if (signature) {
            newErros.signatureError = false
        } else {
            newErros.signatureError = true
        }
        if (maisonGriffe) {
            newErros.maisonGriffeError = false
        } else {
            newErros.maisonGriffeError = true
        }
        if (objectType) {
            newErros.objectTypeError = false
        } else {
            newErros.objectTypeError = true
        }
        if (etiquette) {
            newErros.etiquetteError = false
        } else {
            newErros.etiquetteError = true
        }
        if (poids) {
            newErros.poidsError = false
        } else {
            newErros.poidsError = true
        }
    }

    const checkArtWorksInputs = (newErros) => {
        if (signature) {
            newErros.signatureError = false
        } else {
            newErros.signatureError = true
        }
        if (artiste) {
            newErros.artisteError = false
        } else {
            newErros.artisteError = true
        }
        if (titre) {
            newErros.titreError = false
        } else {
            newErros.titreError = true
        }
    }

    const checkCommunInputs = (newErros) => {
        if (images.length) {
            newErros.imagesError = false
        } else {
            newErros.imagesError = true
        }
        if (prenom || prenom.slice("/").length === 2) {
            newErros.prenomError = false
        } else {
            newErros.prenomError = true
        }
        if (categorie) {
            newErros.categoryError = false
        } else {
            newErros.categoryError = true
        }
        if (estimationBasse) {
            newErros.estimationBasseError = false
        } else {
            newErros.estimationBasseError = true
        }
        if (Number(estimationBasse) < Number(estimationHaute)) {
            newErros.estimationHauteLowerError = false
        } else {
            newErros.estimationHauteLowerError = true
        }
        if (estimationHaute) {
            newErros.estimationHauteError = false
        } else {
            newErros.estimationHauteError = true
        }
        if (NbrePiece) {
            newErros.NbrePieceError = false
        } else {
            newErros.NbrePieceError = true
        }
        if (frais) {
            newErros.fraisError = false
        } else {
            newErros.fraisError = true
        }
        if (sousCategory) {
            newErros.sousCategoryError = false
        } else {
            newErros.sousCategoryError = true
        }
    }




    const check = () => {
        const newErros = { ...errors }
        checkCommunInputs(newErros)
        if (!guided) {
            checkGuidedInputs(newErros)
        } else {
            checkNotGuidedInputs(newErros)
            if (categorie.label === "Civilisations") {
                checkCivilistaionInputs(newErros)
            } else if (categorie.label === "Oeuvre d'art") {
                checkOeuvreArtInputs(newErros)
            } else if (categorie.label === "Luxe & Lyfestyle") {
                checkLifeInputs(newErros)
            } else {
                checkArtWorksInputs(newErros)
            }
        }
        let isValid = true
        for (const key in newErros) {
            if (newErros[key]) {
                isValid = false
                break;
            }
        }
        setErrors(newErros)
        return isValid
    }
  

    async function getContacts () {
        const contact = await getContactList()
        if(contact.statusCode ===200) {
            setContactList(contact.data.map(el=>{return {_id:el._id,name:`${el.firstName} ${el.lastName} / ${el.num}`}}))
        }
    }
    async function getLot() {
        const lots = await getLotById("603f846ee80b9f48fc2c23f0")
        if (lots.statusCode === 200) {
            const data = lots.data
            setPrenom(data.contact)
            // setImages(data.photos.map(el => {return { uri : API_URL + '/' + el }}))
            onChangeCategory(data.subCategory.category)
            setSousCategory({ key: data.subCategory._id, label: data.subCategory.name })
            setGuided(data.guidedText)
            setArtiste(data.artiste)
            setTitre(data.title)
            setTechnique(data.technical)
            setNbrePiece(data.numberOfPiece)
            setTexte(data.descriptionFreeText)
            setEstimationBasse(String(data.lowEstimate))
            setEstimationHaute(String(data.highEstimate))
            setLotEtude(data.lotUnderStudy)
            setClient(data.lotAtCustomer)
            setSignature(data.signature)
            setFrais(data.costLot)
            setLargeur(data.width)
            setHauteur(data.heigh)
            setProfondeur(data.depth)
            setCaracteristique(data.characteristic)
            setProvenance(data.origin)
            setRapport(data.conditionReport)
            setMaisonGriffe(data.homeManifacture)
            setObjectType(data.objectType)
            setEtiquette(data.tag)
            setPoids(data.weight)
            setLieuEthnie(data.localEthnic)
            setLieuDateFabrication(data.placeDateFabrication)
            setMarque(data.mark)
        }
    }
    async function getCatergories() {
        const categories = await getCategoriesList()
        if (categories.statusCode === 200) {
            setCategorieList(categories.data.map(el => { return { ...el, key: el._id, label: el.name } }))
        }
    }

    async function listArtists() {
        const artists = await getArtistList()
        if (artists.statusCode === 200) {
            setArtistList(artists.data.map(el => { return { _id: el._id, name: `${el.firstName} ${el.lastName} (${new Date(el.dateOfBirth).getFullYear()} - A${new Date(el.dateOfDeath).getFullYear()} )` } }))

        }
    }

      

    useEffect(() => {
        getCatergories()
        listArtists()
        getContacts()
        getLot()

    }, [])
    const onChangeCategory = async (category) => {

        let categorieFormated
        if (category._id) {
            categorieFormated = { key: category._id, label: category.name }
        } else {
            categorieFormated = category
        }
        setCategorie(categorie)
        const subCategory = await getsubCategory(categorieFormated.key)
        if (subCategory.statusCode === 200) {
            setSubCategoryList(subCategory.data.map(el => { return { ...el, key: el._id, label: el.name } }))
        }
    }
    const onSubmit = async () => {
        let checkInputs = check()
    }


    return (
        <>
            <Header
                screenName={FR.editLot}
                leftLabel={FR.annuler}
                handleLeftAction={() => props.navigation.navigate("Home")}
                handleRightAction={() => onSubmit()}
                rightLabel={FR.ok}
            />
            <AddLots
                ref={scrollRef}
                setImages={(file) => addImage(file)}
                onDeleteImage={(index) => onDeleteImage(index)}
                categorieList={categorieList}
                subCategoryList={subCategoryList}
                images={images}
                prenom={prenom}
                categorie={categorie}
                sousCategory={sousCategory}
                guided={guided}
                artiste={artiste}
                titre={titre}
                technique={technique}
                setPrenom={setPrenom}
                setCategorie={(cat) => onChangeCategory(cat)}
                setSousCategory={setSousCategory}
                setGuided={setGuided}
                setArtiste={setArtiste}
                setTitre={setTitre}
                setTechnique={setTechnique}
                texte={texte}
                setTexte={setTexte}
                estimationBasse={estimationBasse}
                estimationHaute={estimationHaute}
                setEstimationBasse={setEstimationBasse}
                setEstimationHaute={setEstimationHaute}
                LotEtude={LotEtude}
                setLotEtude={setLotEtude}
                LotClient={LotClient}
                setClient={setClient}
                NbrePiece={NbrePiece}
                setNbrePiece={setNbrePiece}
                frais={frais}
                setFrais={setFrais}
                errors={errors}
                onSubmit={onSubmit}
                signature={signature}
                largeur={largeur}
                hauteur={hauteur}
                profondeur={profondeur}
                caracteristique={caracteristique}
                provenance={provenance}
                rapport={rapport}
                setSignature={setSignature}
                setLargeur={setLargeur}
                setHauteur={setHauteur}
                setProfondeur={setProfondeur}
                setCaracteristique={setCaracteristique}
                setProvenance={setProvenance}
                setRapport={setRapport}
                maisonGriffe={maisonGriffe}
                objectType={objectType}
                etiquette={etiquette}
                poids={poids}
                setMaisonGriffe={setMaisonGriffe}
                setObjectType={setObjectType}
                setEtiquette={setEtiquette}
                setPoids={setPoids}
                etiquetteSignature={etiquetteSignature}
                lieuEthnie={lieuEthnie}
                setEtiquetteSignature={setEtiquetteSignature}
                setLieuEthnie={setLieuEthnie}
                lieuDateFabrication={lieuDateFabrication}
                setLieuDateFabrication={setLieuDateFabrication}
                marque={marque}
                setMarque={setMarque}
                artistList={artistList}
                contactsList={contactsList}
            />
            <Modal ref={modalRef}
                displayCloseButton={true}
                closeOnBackdropPress={false}
                contentStyle={Style.successModal}
            >
                <View style={Style.successModalContainer}>
                    <View style={Style.checkIconContainer}>
                        <Icon name="check" size="small" color={Colors.white} />
                    </View>
                    <Label style={Style.successModalText}>
                        {FR.modificationsDone}
                    </Label>
                </View>
            </Modal>
        </>
    );
}

EditLots.propTypes = {
    navigation: PropTypes.object
}


export default EditLots;