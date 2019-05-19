import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width: viewportWidth } = Dimensions.get("window");

const wp = percentage => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};

export const sliderWidth = viewportWidth;
export const itemWidth = wp(75) + wp(2) * 2;
