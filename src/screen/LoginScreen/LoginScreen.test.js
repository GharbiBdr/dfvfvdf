import React from 'react'
import renderer from 'react-test-renderer'
import LoginScreen from './LoginScreen'
jest.mock('rn-fetch-blob', () => {
  return {
    fs: {
      dirs: {
        DocumentDir: ''
      },
      writeFile: () => Promise.resolve()
    }
  }
})
jest.mock('react-native-x2-carousel', () => {
  return {
    fs: {
      dirs: {
        DocumentDir: ''
      },
      writeFile: () => Promise.resolve()
    }
  }
})
describe('LoginScreen tests', () => {
  it('test render LoginScreen', () => {
    const wrapper = renderer.create(<LoginScreen/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})