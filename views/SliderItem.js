import React from "react";
import { View } from "react-native";
import BookItem from "./BookItem";
import { sliderWidth } from "../components/CarouselStyle";
import { utilities } from "../global-styles";

class SliderItem extends React.Component {
  render() {
    const { firstItem, secondItem } = this.props;
    const { dFlex, backgroundWhite, container } = utilities;
    return (
      <View
        style={[
          dFlex,
          backgroundWhite,
          container,
          { justifyContent: "space-between" }
        ]}
      >
        <BookItem book={firstItem} />
        {secondItem ? <BookItem book={secondItem} /> : null}
      </View>
    );
  }
}

export default SliderItem;
