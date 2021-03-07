import React from 'react'
import renderer from 'react-test-renderer'
import Heading from './Heading'
import Style from '../../../assets/styles/Style'
import DSLabel from '../../Atoms/DSLabel/DSLabel'
import { shallow } from 'enzyme'


describe('Heading Test', () => {
  it('heading test snapshot', () => {
    const wrapper = renderer.create(<Heading>test</Heading>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })

  it('test H1', () => {
    const wrapper = shallow(<Heading type="h1">test</Heading>)
    expect(wrapper.find(DSLabel).first().props().style === Style.h1)
      .toEqual(true)
  })

  it('test H2', () => {
    const wrapper = shallow(<Heading type="h2">test</Heading>)
    expect(wrapper.find(DSLabel).first().props().style === Style.h2)
      .toEqual(true)
  })
})
