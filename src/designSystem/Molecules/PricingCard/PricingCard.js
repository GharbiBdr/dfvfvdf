import React from 'react'
import { Card, Label, Container, Button, Hr } from '../../index'
import { View, Text } from 'react-native'
import Style from '../../../assets/styles/Style'
import PropTypes from 'prop-types'
import DSImage from '../../Atoms/DSImage/DSImage'

const PricingCard = (props) => {
  const displayOptions = () => {
    const options = []
    for (let i = 0; i < props.options.length; i++) {
      options.push(
                <Label style={Style.labelCentredLMedium}>{props.options[i]}</Label>
      )
    }

    return options
  }

  return (
        <View style={Style.cardShadow}>
            <View style={Style.cardContainer} >
            <Container>
                <View style={Style.row} >
            
                <Label style={Style.labelCentredLMedium}>
                    {props.period}
                </Label>
                {props.recommended ?
                <View style={Style.pricingCardHeaderRecommended} >
                <DSImage
                    width='100%'
                    source={require('../../../assets/images/recommended.svg')}
                    />
                    <Text style={Style.recommendedText} >Conseillée</Text>
                    </View>

                    :null}
                </View>
                <Label style={Style.labelPriceBig}>
                    {props.price}
                    <Label style={Style.labelPriceBigDevise}>
                        {props.devise}
                    </Label>
                </Label>
                <Label style={Style.labelCentredLMedium}>
                    {props.priceIndicator}
                </Label>
                <View style={Style.center} >
                    <Hr
                        size="small"
                        theme="default"
                        width={247}
                    />
                </View>
                {displayOptions()}
                <Button
                    theme="transparent"
                    size="large"
                    {...(props.onPressDisplayMore !== undefined && { onPress: props.onPressDisplayMore })}
                    text={props.displayMoreText}
                />
                <Button
                    theme="primary"
                    {...(props.onPressButton !== undefined && { onPress: props.onPressButton })}
                    text={props.buttonText}
                />
            </Container>
            </View>
        </View>
  )
}

PricingCard.protypes = {
  period: PropTypes.string,
  price: PropTypes.string,
  devise: PropTypes.oneOf(['$', '€']),
  priceIndicator: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  displayMoreText: PropTypes.string,
  onPressDisplayMore: PropTypes.func,
  buttonText: PropTypes.string,
  onPressButton: PropTypes.func
}

export default PricingCard
