import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { Text, TouchableOpacity, TextInput as RNTextInput, Pressable } from 'react-native'
import Button from './Button'

describe('button tests', () => {
  it('test small default button snapshot', () => {
    const wrapper = renderer.create(<Button text="test" size="small" theme="default" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test normal default button snapshot', () => {
    const wrapper = renderer.create(<Button text="test" size="normal" theme="default" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test large default button snapshot', () => {
    const wrapper = renderer.create(<Button text="test" size="large" theme="default" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test small primary button snapshot', () => {
    const wrapper = renderer.create(<Button text="test" size="small" theme="primary" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test normal primary button snapshot', () => {
    const wrapper = renderer.create(<Button text="test" size="normal" theme="primary" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test large primary button snapshot', () => {
    const wrapper = renderer.create(<Button text="test" size="large" theme="primary" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test small transparent button snapshot', () => {
    const wrapper = renderer.create(<Button text="test" size="small" theme="transparent" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test normal transparent button snapshot', () => {
    const wrapper = renderer.create(<Button text="test" size="normal" theme="transparent" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test large transparent button snapshot', () => {
    const wrapper = renderer.create(<Button text="test" size="large" theme="transparent" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test small default button snapshot with icon', () => {
    const wrapper = renderer.create(<Button text="test" size="small" theme="default" icon="camera" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test normal default button snapshot with icon', () => {
    const wrapper = renderer.create(<Button text="test" size="normal" theme="default" icon="camera" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test large default button snapshot with icon', () => {
    const wrapper = renderer.create(<Button text="test" size="large" theme="default" icon="camera" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test small primary button snapshot with icon', () => {
    const wrapper = renderer.create(<Button text="test" size="small" theme="primary" icon="camera" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test normal primary button snapshot with icon', () => {
    const wrapper = renderer.create(<Button text="test" size="normal" theme="primary" icon="camera" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test large primary button snapshot with icon', () => {
    const wrapper = renderer.create(<Button text="test" size="large" theme="primary" icon="camera" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test small transparent button snapshot with icon', () => {
    const wrapper = renderer.create(<Button text="test" size="small" theme="transparent" icon="camera" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test normal transparent button snapshot with icon', () => {
    const wrapper = renderer.create(<Button text="test" size="normal" theme="transparent" icon="camera" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test large transparent button snapshot with icon', () => {
    const wrapper = renderer.create(<Button text="test" size="large" theme="transparent" icon="camera" />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })

  it('test actions', () => {
    const press = jest.fn()
    const longPress = jest.fn()
    const pressIn = jest.fn()
    const pressOut = jest.fn()
    const wrapper = renderer.create(
            <Button
                text="test"
                size="small"
                theme="default"
                onPress={press}
                onLongPress={longPress}
                onPressIn={pressIn}
                onPressOut={pressOut}
            />
    )
    wrapper.root.props.onPress()
    wrapper.root.props.onLongPress()
    wrapper.root.props.onPressIn()
    wrapper.root.props.onPressOut()
    expect(press.mock.calls.length).toEqual(1)
    expect(longPress.mock.calls.length).toEqual(1)
    expect(pressIn.mock.calls.length).toEqual(1)
    expect(pressOut.mock.calls.length).toEqual(1)
    expect((typeof wrapper.root.findAllByType(TouchableOpacity)[0].props.onPress) === 'function').toEqual(true)
    expect((typeof wrapper.root.findAllByType(TouchableOpacity)[0].props.onLongPress) === 'function').toEqual(true)
    expect((typeof wrapper.root.findAllByType(TouchableOpacity)[0].props.onPressIn) === 'function').toEqual(true)
    expect((typeof wrapper.root.findAllByType(TouchableOpacity)[0].props.onPressOut) === 'function').toEqual(true)
  })

  it('test actions when disabled', () => {
    const press = jest.fn()
    const longPress = jest.fn()
    const pressIn = jest.fn()
    const pressOut = jest.fn()
    const wrapper = renderer.create(
            <Button
                text="test"
                size="small"
                theme="default"
                onPress={press}
                onLongPress={longPress}
                onPressIn={pressIn}
                onPressOut={pressOut}
                disabled={true}
            />
    )
    expect((typeof wrapper.root.findAllByType(TouchableOpacity)[0].props.onPress) === 'undefined').toEqual(true)
    expect((typeof wrapper.root.findAllByType(TouchableOpacity)[0].props.onLongPress) === 'undefined').toEqual(true)
    expect((typeof wrapper.root.findAllByType(TouchableOpacity)[0].props.onPressIn) === 'undefined').toEqual(true)
    expect((typeof wrapper.root.findAllByType(TouchableOpacity)[0].props.onPressOut) === 'undefined').toEqual(true)
  })
})
