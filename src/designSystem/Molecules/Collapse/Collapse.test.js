import renderer from 'react-test-renderer'
import { Avatar } from '../../index'
import React from 'react'
import Collapse from './Collapse'

describe('Collapse tests', () => {
  it('test TextLabelResearch snapshot', () => {
    const wrapper = renderer.create(<Collapse TextLabelResearch=''/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test TextLabelResearch snapshot', () => {
    const wrapper = renderer.find(<Collapse TextLabelResearch=''/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test TextLabelResearch  availability snapshot', () => {
    const wrapper = renderer.find(<Collapse TextLabelResearch='ESTIMATION'/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test TextLabelResearch  availability snapshot', () => {
    const wrapper = renderer.create(<Collapse TextLabelResearch='ESTIMATION'/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
