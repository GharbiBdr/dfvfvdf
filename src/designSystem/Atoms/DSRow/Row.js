import React from 'react';
import { View } from "react-native";
import Style from "../../../assets/styles/Style";
import PropTypes from 'prop-types'

const Row = (props) => {
    return ( <View style={[Style.paddingRow,props.style]}>
        {props.children}
    </View> );
}


Row.propTypes = {
    col: PropTypes.number,
    style : PropTypes.object
}

Row.defaultProps = {
    style :null
}
 
export default Row;