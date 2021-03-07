import React, { useState } from 'react'
import {
  ScrollView,
  View
} from 'react-native'
import Collapsible from 'react-native-collapsible'
import { Heading, Icon, Label } from '../../index'
import Style from '../../../assets/styles/Style'
import PropTypes from 'prop-types'
import Colors from '../../../assets/styles/Colors'
const Collapse = (props) => {
  const [collapsed, setCollapsed] = useState(true)
  let color = Style.subGroupStyleColorBlack
  if (props.type === 'sub') {
    color = Style.subGroupStyleColorGrey
  }
  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={Style.showRowResearchCategory}>
        <View>
          <Label style={[Style.subGroupStyle, color]} > {props.TextLabelResearch}</Label>
        </View>
        <View>
          <Icon size={'xxx-small'} name={'arrow-down'} color={props.type === 'sub' ? Colors.grey5 : Colors.black}
            style={[collapsed ? Style.iconRotate : Style.iconRotate180]}
            onPress={() => setCollapsed(!collapsed)}></Icon>
        </View>
      </View>
      <View>
        <Collapsible collapsed={collapsed} collapsedHeight={1}>
          <View style={Style.collapsableView} >
            {props.children}
          </View>
        </Collapsible>
      </View>
    </View>
  )
}
Collapse.defaultProps = {
  TextLabelResearch: '',
  type: 'cat'
}
Collapse.propTypes = {
  children: PropTypes.node,
  TextLabelResearch: PropTypes.string,
  type: PropTypes.oneOf(['sub', 'cat'])
}
export default Collapse
