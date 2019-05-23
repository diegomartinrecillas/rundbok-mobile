import React from "react";
import { TouchableOpacity } from "react-native";
import { PropTypes } from "prop-types";

const Touchable = props => {
  const { children, style, onPress, activeOpacity } = props;
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      {children}
    </TouchableOpacity>
  );
};

Touchable.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func,
  children: PropTypes.any.isRequired,
  activeOpacity: PropTypes.number
};

Touchable.defaultProps = {
  style: null,
  onPress: null,
  activeOpacity: 0.8
};

export default Touchable;
