import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from "../../../assets/styles/Colors"
import Style from "../../../assets/styles/Style"

const DSCarouselPagination = (props) => {
  const {
    total,
    currentPage,
  } = props

  const renderDots = () => {
    const Dots = []
    for (let i = 0; i < total; i += 1) {
      const isActive = currentPage === i + 1

      const additionalStyle = {
        backgroundColor: isActive ? Colors.primary : null,
        marginLeft: i === 0 ? 0 : 13,
      };

      Dots.push((
        <View
          key={`pagination-dot-${i}`}
          style={[
            Style.carouselPagerDot,
            additionalStyle,
          ]}
        />
      ));
    }
    return Dots;
  }

  return (
    <View
      style={Style.carouselPagerContainer}
    >
      {renderDots()}
    </View>
  )
}

DSCarouselPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}

export default DSCarouselPagination;
