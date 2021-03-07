import React, { useState, useRef, useEffect } from 'react';
import Header from '../../layouts/Header/Header'
import AddLots from '../../layouts/Lots/AddLots';
import PropTypes from 'prop-types'
import { Icon, Label, Modal } from '../../designSystem';
import { View } from 'react-native';
import Colors from '../../assets/styles/Colors';
import { FR } from '../../Lang/Lang';
import Style from '../../assets/styles/Style';
import { createLot, getArtistList, getCategoriesList,getsubCategory } from '../../Api/Lot'
import {getContactList} from '../../Api/Contacts'
const AddLotsScreen = (props) => {
    const scrollRef = useRef();
    const modalRef = useRef()
    const [images, setImages] = useState([])
    const [prenom, setPrenom] = useState("")
    const [categorieList, setCategorieList] = useState([])
    const [artistList, setArtistList] = useState([])
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
    const [lieuEthnie, setLieuEthnie] = useState("")
    const [lieuDateFabrication, setLieuDateFabrication] = useState("")
    const [marque, setMarque] = useState("")
    const [contactsList, setContactList] = useState([])

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

    useEffect(() => {
        getCatergories()
        listArtists()
        getContacts()
    }, [])

    async function getCatergories() {
        const categories = await getCategoriesList()
        if (categories.statusCode === 200) {
            setCategorieList(categories.data.map(el => { return { ...el, key: el._id, label: el.name } }))
        }
    }

    async function listArtists() {
        const artists = await getArtistList()
        if (artists.statusCode === 200) {
            setArtistList(artists.data.map(el => { return { _id: el._id, name: `${el.firstName} ${el.lastName} (${new Date(el.dateOfBirth).getFullYear()} - ${new Date(el.dateOfDeath).getFullYear()} )` } }))

        }
    }

    async function getContacts() {
        const contact = await getContactList()
        if (contact.statusCode === 200) {
            setContactList(contact.data.map(el => { return { _id: el._id, name: `${el.firstName} ${el.lastName} / ${el.num}` } }))
        }
    }


    const onChangeCategory = async (category) => {
        setCategorie(category)
        const subCategory = await getsubCategory(category.key)
        if (subCategory.statusCode === 200) {
            setSubCategoryList(subCategory.data.map(el => { return { ...el, key: el._id, label: el.name } }))
        }
    }
    const onSubmit = async () => {
        const checkInputs = check()
        if (checkInputs === true) {
            const formData = new FormData()
            
            formData.append("contact", prenom._id)
            formData.append("subCategory", sousCategory.key)
            formData.append("freeText", !guided)
            formData.append("guidedText", guided)
            formData.append("descriptionFreeText", texte)
            formData.append("lowEstimate", estimationBasse)
            formData.append("highEstimate", estimationHaute)
            formData.append("lotUnderStudy", LotEtude)
            formData.append("lotAtCustomer", LotClient)
            formData.append("numberOfPiece", NbrePiece)
            formData.append("costLot", frais)
             artiste._id &&  formData.append("artiste", artiste._id)
            formData.append("title", titre)
            technique && formData.append("technical", technique._id)
            formData.append("signature", signature)
            formData.append("width", largeur)
            formData.append("depth", profondeur)
            formData.append("heigh", hauteur)
            formData.append("characteristic", caracteristique)
            formData.append("origin", provenance)
            formData.append("conditionReport", rapport)
            formData.append("objectType", objectType)
            formData.append("mark", marque)
            formData.append("placeDateFabrication", lieuDateFabrication)
            formData.append("localEthnic", lieuEthnie)
            formData.append("homeManifacture", maisonGriffe)
            images.map(el => formData.append("photos", el))


            const response = await createLot(formData)
            if (response.statusCode === 200) {
                modalRef.current.open()
            }
        }
    }
    return (
        <>
            <Header screenName="Nouveau lot" leftLabel="Annuler" handleLeftAction={() => props.navigation.navigate("ListLot")} />
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
                setArtiste={(artist) => setArtiste(artist)}
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
                lieuEthnie={lieuEthnie}
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
                onCloseAction={() => props.navigation.navigate("ListLot")}
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

AddLots.propTypes = {
    navigation: PropTypes.object
}


export default AddLotsScreen;