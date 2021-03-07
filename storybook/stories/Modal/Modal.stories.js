import { action } from '@storybook/addon-actions'
import { text, boolean, select, number, color, array } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import CenterView from '../CenterView'
import { View, Text } from 'react-native'
import { Modal, Container, Button } from '../../../src/designSystem/'

const TestModal = (props) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const modalRef = React.createRef()
  return (
        <View>
            <Container>
                <CenterView>

                    <Button
                        theme='primary'
                        text="Open Modal"
                        onPress={() => { modalRef.current.open() }}
                    />
                </CenterView>
            </Container>
            <Modal
                ref={modalRef}
                closeOnBackdropPress={true}
                displayCloseButton={boolean('displayCloseButton', false, 'Options')}
                position={select('position', ['centred', 'bottom'], 'centred', 'Options')}
            >
                <Text>
                    {text('children (node)', 'Hello', 'Options')}
                </Text>

            </Modal>
        </View>
  )
}

storiesOf('Modal', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Modal', () => (
    <TestModal />
  ))
