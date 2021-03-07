import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import {Text,TouchableOpacity,TextInput as RNTextInput,Pressable} from "react-native"
import DSBoutton from "./DSBoutton"

describe("DSButton tests",()=>{
    it('test render button',()=>{
        const wrapper=renderer.create(<DSBoutton>test</DSBoutton>)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })

    it('test actions',()=>{
        const press=jest.fn()
        const longPress=jest.fn()
        const pressIn=jest.fn()
        const pressOut=jest.fn()
        const wrapper=renderer.create(
            <DSBoutton
                onPress={press}
                onLongPress={longPress}
                onPressIn={pressIn}
                onPressOut={pressOut}
            >
                test
            </DSBoutton>
        )
        wrapper.root.props.onPress()
        wrapper.root.props.onLongPress()
        wrapper.root.props.onPressIn()
        wrapper.root.props.onPressOut()
        expect(press.mock.calls.length).toEqual(1)
        expect(longPress.mock.calls.length).toEqual(1)
        expect(pressIn.mock.calls.length).toEqual(1)
        expect(pressOut.mock.calls.length).toEqual(1)
        expect((typeof wrapper.root.findAllByType(TouchableOpacity)[0].props.onPress)==="function").toEqual(true)
        expect((typeof wrapper.root.findAllByType(TouchableOpacity)[0].props.onLongPress)==="function").toEqual(true)
        expect((typeof wrapper.root.findAllByType(TouchableOpacity)[0].props.onPressIn)==="function").toEqual(true)
        expect((typeof wrapper.root.findAllByType(TouchableOpacity)[0].props.onPressOut)==="function").toEqual(true)
    })

    it('test actions when disabled',()=>{
        const press=jest.fn()
        const longPress=jest.fn()
        const pressIn=jest.fn()
        const pressOut=jest.fn()
        const wrapper=renderer.create(
            <DSBoutton
                onPress={press}
                onLongPress={longPress}
                onPressIn={pressIn}
                onPressOut={pressOut}
                disabled={true}
            >
                test
            </DSBoutton>
        )
        expect((typeof wrapper.root.findAllByType(TouchableOpacity)[0].props.onPress)==="undefined").toEqual(true)
        expect((typeof wrapper.root.findAllByType(TouchableOpacity)[0].props.onLongPress)==="undefined").toEqual(true)
        expect((typeof wrapper.root.findAllByType(TouchableOpacity)[0].props.onPressIn)==="undefined").toEqual(true)
        expect((typeof wrapper.root.findAllByType(TouchableOpacity)[0].props.onPressOut)==="undefined").toEqual(true)
    })
})