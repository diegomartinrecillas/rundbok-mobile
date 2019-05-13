import React from "react";
import { TouchableOpacity } from "react-native";
import { PropTypes } from "prop-types";

const Touchable = props => {
  const { children, style, onPress } = props;
  return (
    <TouchableOpacity style={style} onPress={onPress} activeOpacity={0.9}>
      {children}
    </TouchableOpacity>
  );
};

Touchable.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func,
  children: PropTypes.any.isRequired
};

Touchable.defaultProps = {
  style: null,
  onPress: null
};

export default Touchable;
