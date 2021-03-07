import React from 'react'
import renderer from 'react-test-renderer'
import Login from './Login'
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
describe('Login tests', () => {
  it('test render Login', () => {
    const wrapper = renderer.create(<Login/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
