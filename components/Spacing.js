import React from "react";
import { View } from "react-native";
import { PropTypes } from "prop-types";

const Spacing = props => {
  const { height } = props;
  return <View style={{ height }} />;
};

Spacing.propTypes = {
  height: PropTypes.number
};

Spacing.defaultProps = {
  height: 30
};

export default Spacing;
