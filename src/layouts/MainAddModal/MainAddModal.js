import React from 'react'
import { View } from 'react-native'
import Style from '../../assets/styles/Style'
import { Button, Modal, Heading, Row, Col } from '../../designSystem'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

const MainAddModal = React.forwardRef((props, ref) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const navigateToScreen = (screen, stack) => {
    navigation.navigate(screen)
    dispatch({ type: 'CHANGE_ROUTE', payload: stack })
    ref.current.close()
  }
  return (
    <Modal ref={ref} closeOnBackdropPress={true} position='bottom'>
      <View style={Style.addModalContainer}>
        <View style={Style.addModalTitle}>
          <Heading type='h1'>QUE SOUHAITEZ-VOUS AJOUTER ?</Heading>
        </View>
        <Row style={{ marginBottom: 8 }}>
          <Col col={4}>
            <Button
              onPress={() => navigateToScreen('AddContacts', 'Contacts')}
              theme='default'
              icon='contact'
              text='Contact'
              size='small'
            />
          </Col>
          <Col col={4}>
            <Button
              onPress={() => navigateToScreen('AddLots', 'Lots')}
              theme='default'
              icon='lot'
              text='Lot'
              size='small'
            />
          </Col>
          <Col col={4}>
            <Button
              theme='default'
              icon='copy'
              text='Document'
              size='small'
            />
          </Col>
        </Row>
        <Button
          onPress={() => ref.current.close()}
          theme='secondary'
          text='Annuler'
          size='normal'
        />
      </View>
    </Modal>
  )
})

export default MainAddModal
