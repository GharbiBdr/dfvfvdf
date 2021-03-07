import React from 'react'
import { Button, Container, Icon, P, Heading } from '../../designSystem'
import { View, ScrollView } from 'react-native'
import Style from '../../assets/styles/Style'
import Colors from '../../assets/styles/Colors'
import HTML from 'react-native-render-html'
export default function Cgv (props) {
  return (

    <Container>
      <Icon
        name="go-back"
        size='extra-small'
        color={Colors.black}
        onPress={() => props.goBack()}
      />
      <View style={Style.spaceBetween}>
        <Heading>
                Conditions générales de vente
        </Heading>
        <ScrollView style={{ flex: 1 }}>
          <HTML source={{ html: props.htmlContent }} contentWidth={'100%'} />
          <Button
            text="J’ai compris"
            theme='primary'
            onPress={()=>props.confirmationCGV()}
          />
        </ScrollView>
      </View>
    </Container>

  )
}
