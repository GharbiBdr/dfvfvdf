import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'


describe('Header Test', () => {
  it('heading test snapshot', () => {
    const wrapper = renderer.create(<Header screenName="Nouveau Contact" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })

  it('test icons', () => {
    const wrapper = renderer.create(<Header leftIconName="left-arrow" rightIconName="check" screenName="Home" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })

  it('test press icons', () => {
    const leftPress = jest.fn()
    const rightPress = jest.fn()
    const wrapper = renderer.create(
      <Header leftIconName="left-arrow" rightIconName="check" screenName="Home" handleLeftAction={leftPress} handleRightAction={rightPress} />
    )
    wrapper.root.props.handleLeftAction()
    wrapper.root.props.handleRightAction()
    expect(leftPress.mock.calls.length).toEqual(1)
    expect(rightPress.mock.calls.length).toEqual(1)

  })

  it('test press labesl', () => {
    const leftPress = jest.fn()
    const rightPress = jest.fn()
    const wrapper = renderer.create(
      <Header leftLabel="goBack" rightLabel="check" screenName="Home" handleLeftAction={leftPress} handleRightAction={rightPress} />
    )
    wrapper.root.props.handleLeftAction()
    wrapper.root.props.handleRightAction()
    expect(leftPress.mock.calls.length).toEqual(1)
    expect(rightPress.mock.calls.length).toEqual(1)

  })
})
