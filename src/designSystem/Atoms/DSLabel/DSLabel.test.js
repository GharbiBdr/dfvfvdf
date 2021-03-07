import React from 'react';
import renderer from 'react-test-renderer'
import DSLabel from "./DSLabel"

describe('DSLabel tests',()=>{
    it('text Label Snapshot',()=>{
        const wrapper=renderer.create(<DSLabel>test</DSLabel>)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })
})