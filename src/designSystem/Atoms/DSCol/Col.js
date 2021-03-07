import React from 'react';
import { View } from 'react-native';
import Style from '../../../assets/styles/Style';
import PropTypes from 'prop-types'
const Col = (props) => {
  
    return (<View style={[Style.col, props.style, { maxWidth: `${props.col * 8.333333}%` }]}>
        {props.children}
    </View>);
}

Col.propTypes = {
    col: PropTypes.number,
    style :PropTypes.object
}

Col.defaultProps = {
    col: 12
}

export default Col;