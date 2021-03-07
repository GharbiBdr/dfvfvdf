import React from 'react';
import renderer from 'react-test-renderer'
import DSIcon from '../../Atoms/DSIcon/DSIcon';
import TextInput from '../TextInput/TextInput';
import Upload  from './Upload';
import { shallow } from 'enzyme'


describe("Upload tests",()=>{
    it('test render Upload snapshot',()=>{
        const wrapper=renderer.create(<Upload value="test" lable="Label" placeholder="Placeholder" />)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })

    it('test text input value',()=>{
        const wrapper=shallow(<Upload value="test" lable="Label" placeholder="Placeholder" />)
        expect(wrapper.find(TextInput).first().props().value===`test`)
        .toEqual(true)
    })


    it('test render text input width right icon camera snapshot',()=>{
        const wrapper=renderer.create(<Upload rightIcon="download" value="" lable="Label" placeholder="Placeholder" />)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })



    it('test icon click',()=>{
        const press1=jest.fn()
        const wrapper=renderer.create(<TextInput rightIcon="download" onRightIconPress={press1} />)
        wrapper.root.findAllByType(DSIcon)[0].props.onPress()
        expect(press1.mock.calls.length).toEqual(1)
    })
    
})