import React from 'react';
import renderer from 'react-test-renderer'
import DSIcon from "../../Atoms/DSIcon/DSIcon"
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import fontelloConfig from '../../../assets/fontIconsConfig/selection.json'
import {TouchableOpacity} from "react-native"

const Icon = createIconSetFromIcoMoon(fontelloConfig)

describe('DSIcon tests',()=>{
    it('test DSIcon snapshot',()=>{
        const wrapper=renderer.create(<DSIcon name="camera" size="medium" color="red" />)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })

    it('test DSIcon size small=20',()=>{
        const wrapper=shallow(<DSIcon name="camera" size="small" color="red" />)
        expect(wrapper.find(TouchableOpacity).first().children().first().props().size===20)
        .toEqual(true)
    })

    it('test DSIcon size medium=40',()=>{
        const wrapper=shallow(<DSIcon name="camera" size="medium" color="red" />)
        expect(wrapper.find(TouchableOpacity).first().children().first().props().size===40)
        .toEqual(true)
    })

    it('test DSIcon size large=60',()=>{
        const wrapper=shallow(<DSIcon name="camera" size="large" color="red" />)
        expect(wrapper.find(TouchableOpacity).first().children().first().props().size===60)
        .toEqual(true)
    })

    it('test DSIcon size extra-large=20',()=>{
        const wrapper=shallow(<DSIcon name="camera" size="extra-large" color="red" />)
        expect(wrapper.find(TouchableOpacity).first().children().first().props().size===80)
        .toEqual(true)
    })

    it('test DSIcon onPress',()=>{
        const press1=jest.fn()
        const wrapper=renderer.create(<DSIcon name="camera" size="small" color="red" onPress={press1} />)
        wrapper.root.props.onPress()
        expect(press1.mock.calls.length).toEqual(1)
    })

    it('test DSIcon onLongPress',()=>{
        const press1=jest.fn()
        const wrapper=renderer.create(<DSIcon name="camera" size="small" color="red" onLongPress={press1} />)
        wrapper.root.props.onLongPress()
        expect(press1.mock.calls.length).toEqual(1)
    })

    it('test DSIcon onPressIn',()=>{
        const press1=jest.fn()
        const wrapper=renderer.create(<DSIcon name="camera" size="small" color="red" onPressIn={press1} />)
        wrapper.root.props.onPressIn()
        expect(press1.mock.calls.length).toEqual(1)
    })

    it('test DSIcon onPressOut',()=>{
        const press1=jest.fn()
        const wrapper=renderer.create(<DSIcon name="camera" size="small" color="red" onPressOut={press1} />)
        wrapper.root.props.onPressOut()
        expect(press1.mock.calls.length).toEqual(1)
    })
})