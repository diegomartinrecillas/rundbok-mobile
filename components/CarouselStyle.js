import { Dimensions } from "react-native";

const { width: viewportWidth } = Dimensions.get("window");

const wp = percentage => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};

export const carouselWidth = viewportWidth;
export const sliderWidth = wp(40);
export const itemWidth = wp(100);
