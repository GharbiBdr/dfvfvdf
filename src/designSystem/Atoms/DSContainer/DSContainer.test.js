import React from 'react';
import renderer from 'react-test-renderer'
import DSContainer from "./DSContainer"
import {Text} from "react-native"

describe('container tests',()=>{
    it('test container snapshot',()=>{
        const wrapper=renderer.create(<DSContainer>test</DSContainer>)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })

    it('test container children',()=>{
        const wrapper=renderer.create(<DSContainer><Text>text</Text></DSContainer>)
        expect(wrapper.root.findAllByType(Text).length===1)
        .toEqual(true)
    })
})