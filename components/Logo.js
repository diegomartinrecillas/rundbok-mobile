import React, { Component } from "react";
import { Image } from "react-native";

class Logo extends Component {
  render() {
    return (
      <Image
        source={require("../assets/rundbok-logo-black.png")}
        style={{ width: 140 }}
        resizeMode="contain"
      />
    );
  }
}

export default Logo;
