import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import BookItem from "./BookItem";
import { sliderWidth } from "../components/CarouselStyle";

const styles = StyleSheet.create({
  slider: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    width: sliderWidth
  }
});

class SliderItem extends React.Component {
  render() {
    const { firstItem, secondItem } = this.props;
    const { slider } = styles;
    return (
      <View style={slider}>
        <BookItem book={firstItem} />
        <View style={{ width: 30, backgroundColor: "#fff" }} />
        {secondItem ? <BookItem book={secondItem} /> : null}
      </View>
    );
  }
}

export default SliderItem;
