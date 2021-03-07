import React from 'react';
import renderer from 'react-test-renderer'
import TextInput from "./TextInput"
import DSTextInput from "../../Atoms/DSTextInput/DSTextInput"
import DSIcon from "../../Atoms/DSIcon/DSIcon"
import { shallow } from 'enzyme'

describe("TextInput tests",()=>{
    it('test render text input snapshot',()=>{
        const wrapper=renderer.create(<TextInput value="test" lable="Label" placeholder="Placeholder" />)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })

    it('test text input value',()=>{
        const wrapper=shallow(<TextInput value="test" lable="Label" placeholder="Placeholder" />)
        expect(wrapper.find(DSTextInput).first().props().value===`test`)
        .toEqual(true)
    })

    it('test render password text input snapshot',()=>{
        const wrapper=renderer.create(<TextInput type='password' value="" lable="Label" placeholder="Placeholder" />)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })

    it('test password type',()=>{
        const wrapper=shallow(<TextInput type='password' value="" lable="Label" placeholder="Placeholder" />)
        expect(wrapper.find(DSTextInput).first().props().secureTextEntry===true)
        .toEqual(true)
    })

    it('test render text input width right icon camera snapshot',()=>{
        const wrapper=renderer.create(<TextInput rightIcon="camera" value="" lable="Label" placeholder="Placeholder" />)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })

    it('test icon shallow',()=>{
        const wrapper=shallow(<TextInput rightIcon="camera" />)
        expect(wrapper.find(DSIcon).first().props().name==="camera")
        .toEqual(true)
    })

    it('test icon click',()=>{
        const press1=jest.fn()
        const wrapper=renderer.create(<TextInput rightIcon="camera" onRightIconPress={press1} />)
        wrapper.root.findAllByType(DSIcon)[0].props.onPress()
        expect(press1.mock.calls.length).toEqual(1)
    })

    it('test render multiliane text input snapshot',()=>{
        const wrapper=renderer.create(<TextInput multiline value="" lable="Label" placeholder="Placeholder" />)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })
    it('test render text input with error message snapshot',()=>{
        const wrapper=renderer.create(<TextInput errorMessage="error" value="" lable="Label" placeholder="Placeholder" />)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })
    
})