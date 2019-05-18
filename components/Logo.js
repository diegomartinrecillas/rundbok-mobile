import React from "react";
import { Image } from "react-native";
import { PropTypes } from "prop-types";

const Logo = props => {
  const { styles, kthLogo } = props;
  const logo = kthLogo
    ? require("../assets/logo-with-kth.png")
    : require("../assets/rundbok-logo-black.png");

  return (
    <Image
      source={logo}
      style={[{ width: 160 }, styles]}
      resizeMode="contain"
    />
  );
};

Logo.propTypes = {
  kthLogo: PropTypes.bool
};

Logo.defaultProps = {
  kthLogo: false
};

export default Logo;
