import React from "react";
import { Image } from "react-native";

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require("../assets/rundbok-logo-black.png")}
        style={{ width: 120, aspectRatio: 672 / 96 }}
      />
    );
  }
}

export default LogoTitle;
