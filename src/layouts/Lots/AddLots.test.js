import React from 'react';
import { shallow } from 'enzyme'
import AddLots from './AddLots';

jest.mock('rn-fetch-blob', () => {
    return {
        fs: {
            dirs: {
                DocumentDir: ''
            },
            writeFile: () => Promise.resolve()
        }
    }
})
jest.mock('react-native-x2-carousel', () => {
    return {
        fs: {
            dirs: {
                DocumentDir: ''
            },
            writeFile: () => Promise.resolve()
        }
    }
})
describe("add Lot form test", () => {
    const errors = {
        prenomError: false,
        categoryError: false,
        sousCategoryError: false,
        artisteError: false,
        titreError: false,
        techniqueError: false,
        texteError: false,
        estimationBasseError: false,
        estimationHauteError: false,
        NbrePieceError: false,
        fraisError: false,
        imagesError: false
    }
    const test = "IntialTest"
    const numberTest = 123
    let wrapper;

    const setPrenom = jest.fn()
    const setSousCategory = jest.fn()
    const onChangeCategory = jest.fn()
    const setGuided = jest.fn()
    const setArtiste = jest.fn()
    const setTitre = jest.fn()
    const setTechnique = jest.fn()
    const setTexte = jest.fn()
    const setEstimationBasse = jest.fn()
    const setEstimationHaute = jest.fn()
    const setLotEtude = jest.fn()
    const setClient = jest.fn()
    const setNbrePiece = jest.fn()
    const setFrais = jest.fn()
    const onSubmit = jest.fn()
    const scrollRef = jest.fn()
    const addImage = jest.fn()
    const categorieList =[]
    const subCategoryList =[]
    const images =[]
    beforeEach(() => {
        wrapper = shallow(<AddLots
            ref={scrollRef}
            setImages={addImage}
            categorieList={categorieList}
            subCategoryList={subCategoryList}
            images={images}
            prenom={test}
            categorie={test}
            sousCategory={test}
            guided={false}
            artiste={test}
            titre={test}
            technique={test}
            setPrenom={setPrenom}
            setCategorie={onChangeCategory}
            setSousCategory={setSousCategory}
            setGuided={setGuided}
            setArtiste={setArtiste}
            setTitre={setTitre}
            setTechnique={setTechnique}
            texte={test}
            setTexte={setTexte}
            estimationBasse={numberTest}
            estimationHaute={numberTest}
            setEstimationBasse={setEstimationBasse}
            setEstimationHaute={setEstimationHaute}
            setLotEtude={setLotEtude}
            setClient={setClient}
            NbrePiece={numberTest}
            setNbrePiece={setNbrePiece}
            frais={numberTest}
            setFrais={setFrais}
            errors={errors}
            onSubmit={onSubmit}
        />)

    });
    it('test from add contact', () => {
        expect(wrapper.find('DSContainer')).toHaveLength(1)
    })

    it('input prenom', () => {

        wrapper.find('TextInput').at(0).simulate('changeText', "prenom");
        expect(setPrenom).toHaveBeenCalledWith("prenom");

    })
  
    it('input estimation haute', () => {

        wrapper.find('TextInput').at(3).simulate('changeText', 11);
        expect(setEstimationHaute).toHaveBeenCalledWith(11);
    })
    it('input estimation basse', () => {

        wrapper.find('TextInput').at(2).simulate('changeText', 12);
        expect(setEstimationBasse).toHaveBeenCalledWith(12);
    })
    it('press lot etude ', () => {
        wrapper.find('Button').at(2).simulate('press', true);
        expect(setLotEtude).toHaveBeenCalledWith(true);
    })
})
