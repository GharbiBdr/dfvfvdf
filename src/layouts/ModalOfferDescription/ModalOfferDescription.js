import React from 'react'
import { Modal, Heading, Container } from '../../designSystem'
import { Text, View , ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import HTML from 'react-native-render-html'
export default function ModalOfferDescription (props) {
  return (
    <Modal
      ref={props.modalRef}
      closeOnBackdropPress={true}
      displayCloseButton={true}
      position="centred"
      title='Détail de l’offre'
    >
      <ScrollView>
      <HTML source={{ html: props.description }} contentWidth={'100%'} />
      </ScrollView>
    </Modal>
  )
}
