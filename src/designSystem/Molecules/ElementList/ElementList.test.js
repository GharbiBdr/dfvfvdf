import renderer from 'react-test-renderer'
import React from 'react'
import ElementList from "./ElementList"
describe('ElementList tests', () => {
    it('test default ElementList ', () => {
        const wrapper = renderer.create(<ElementList id='1' title={'Julien'} src={require('./avatar.jpg')} description={'02136'} onPressElementList={null} />)
            .toJSON()
        expect(wrapper).toMatchSnapshot()
    })
})
