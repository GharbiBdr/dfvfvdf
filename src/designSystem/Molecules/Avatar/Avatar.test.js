import renderer from 'react-test-renderer'
import React from 'react'
import { Avatar } from '../../index'
import Button from '../Button/Button'
import { TouchableOpacity } from 'react-native'

describe('avatar tests', () => {
  it('test small default avatar snapshot', () => {
    const wrapper = renderer.create(<Avatar size='small' avatarName='' src='' name=''/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test medium default avatar snapshot', () => {
    const wrapper = renderer.create(<Avatar size='medium' avatarName='' src='' name=''/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test big default avatar snapshot', () => {
    const wrapper = renderer.create(<Avatar size='big' avatarName='' src='' name=''/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test name default avatar snapshot', () => {
    const wrapper = renderer.create(<Avatar size='small' avatarName='' src='' name='julien'/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test avatarName default avatar snapshot', () => {
    const wrapper = renderer.create(<Avatar size='small' avatarName='' src='' name='julien'/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test src default avatar snapshot', () => {
    const wrapper = renderer.create(<Avatar size='big' avatarName='' src={require('./auth.jpg')} name=''/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test small and image  avatar snapshot', () => {
    const wrapper = renderer.create(<Avatar size='small' src={require('./auth.jpg')} avatarName='' name=''/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test medium and image  avatar snapshot', () => {
    const wrapper = renderer.create(<Avatar size='medium' src={require('./auth.jpg')} avatarName='' name=''/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test big and image  avatar snapshot', () => {
    const wrapper = renderer.create(<Avatar size='big' src={require('./auth.jpg')} avatarName='' name=''/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test small , image , Julien   avatar snapshot', () => {
    const wrapper = renderer.create(<Avatar size='small' src={require('./auth.jpg')} avatarName='' name='Julien'/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test medium , image , Julien avatar snapshot', () => {
    const wrapper = renderer.create(<Avatar size='medium' src={require('./auth.jpg')} avatarName='' name='Julien'/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test big ,image , Julien  avatar snapshot', () => {
    const wrapper = renderer.create(<Avatar size='big' src={require('./auth.jpg')} avatarName='' name='Julien'/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test small , JA , Julien   avatar snapshot', () => {
    const wrapper = renderer.create(<Avatar size='small' src='' avatarName='JA' name='Julien'/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test medium , JA , Julien avatar snapshot', () => {
    const wrapper = renderer.create(<Avatar size='medium' src='' avatarName='JA' name='Julien'/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test big ,JA , Julien  avatar snapshot', () => {
    const wrapper = renderer.create(<Avatar size='big' src='' avatarName='JA' name='Julien'/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
