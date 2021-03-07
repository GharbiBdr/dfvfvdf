import React from 'react';
import { shallow } from 'enzyme'
import AddContactsForm from './AddContactForm';

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
describe("add from test", () => {
    const errors = {
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
    }
    const test = "IntialTest"
    let wrapper;
    const changeValue = jest.fn()
    const setIdNumber = jest.fn();
    const setPrenom = jest.fn()
    const setEmail = jest.fn()
    const setTva = jest.fn()
    beforeEach(() => {
            wrapper = shallow(<AddContactsForm
                idNumber={test}
                civilite={test}
                prenom={test}
                nom={test}
                particlule={test}
                groupe={test}
                sousGroupe={test}
                email={test}
                phone={test}
                adresse={test}
                identite={test}
                identiteBancaire={test}
                kbis={test}
                tva={test}
                fraisVente={test}
                errors={errors}
                setIdNumber={setIdNumber}
                setCivilite={changeValue}
                setPrenom={setPrenom}
                setNom={changeValue}
                setParticule={changeValue}
                setGroupe={changeValue}
                setSousGroupe={changeValue}
                setEmail={setEmail}
                setPhone={changeValue}
                setAdresse={changeValue}
                setIdentite={changeValue}
                setIdentiteBancaire={changeValue}
                setKbis={changeValue}
                setTva={setTva}
                setFraisVente={changeValue}
                photo={test}
                setPhoto={changeValue}
            />)
    
    });
    it('test from add contact', () => {
        expect(wrapper.find('DSContainer')).toHaveLength(1)
    })

    it('input', () => {
      
        wrapper.find('TextInput').at(0).simulate('changeText', 123456);
        expect(setIdNumber).toHaveBeenCalledWith(123456);
     
    })
    it('input prenom', () => {
      
        wrapper.find('TextInput').at(2).simulate('changeText', "prenom");
        expect(setPrenom).toHaveBeenCalledWith("prenom");
     
    })
    it('input Email', () => {
      
        wrapper.find('TextInput').at(5).simulate('changeText', "Email@Email.com");
        expect(setEmail).toHaveBeenCalledWith("Email@Email.com");
    })
   
    it('input setTva', () => {
      
        wrapper.find('TextInput').at(8).simulate('changeText',20);
        expect(setTva).toHaveBeenCalledWith(20);
    })
})
