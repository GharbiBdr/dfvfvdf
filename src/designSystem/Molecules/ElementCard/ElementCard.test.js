import renderer from 'react-test-renderer'
import { TouchableOpacity } from 'react-native'
import React from 'react'
import ElementCard from './ElementCard'
describe('avatar tests', () => {
  it('test id default ElementCard snapshot', () => {
    const wrapper = renderer.create(<ElementCard id='' title={'Julien'} src= {require('./avatar.jpg')} avatarName={'ES'} size ={'medium'} description={'02136'} check={true} imageType={'image'} onPressElementCard={''} />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test title default ElementCard snapshot', () => {
    const wrapper = renderer.create(<ElementCard id='1' title={''} src= {require('./avatar.jpg')} avatarName={'ES'} size ={'medium'} description={'02136'} check={true} imageType={'image'} onPressElementCard={''} />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test image default ElementCard snapshot', () => {
    const wrapper = renderer.create(<ElementCard id='1' title={''} src= '' avatarName={'ES'} size ={'medium'} description={'02136'} check={true} imageType={'image'} onPressElementCard={''} />)

      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test size default ElementCard snapshot', () => {
    const wrapper = renderer.create(<ElementCard id='1' title={''} src= {require('./avatar.jpg')} avatarName={'Al'} size ={''} description={'02136'} check={true} imageType={'image'} onPressElementCard={''} />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test Avatar default ElementCard snapshot', () => {
    const wrapper = renderer.create(<ElementCard id='1' title={''} src= {require('./avatar.jpg')} avatarName={''} size ={'medium'} description={'02136'} check={true} imageType={'image'} onPressElementCard={''} />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test actions when  we have onPress', () => {
    const press = jest.fn()

    const wrapper = renderer.create(
      <ElementCard
        id=''
        title={'Elyes Said'}
        src={require('./avatar.jpg')}
        avatarName={'ES'}
        size={'medium'}
        description={'02136'}
        check={true}
        imageType={'image'}
        onPressElementCard={''}/>
    )
    wrapper.root.props.onPress()
    expect(press.mock.calls.length).toEqual(1)
    expect((typeof wrapper.root.findAllByType(TouchableOpacity)[0].props.onPress) === 'undefined').toEqual(true)
  })
})
