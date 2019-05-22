import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import BookItem from "./BookItem";

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 3 / 4
  },
  priceStyle: {
    color: "#32ab00",
    fontWeight: "bold",
    fontSize: 22
  },
  titleStyle: {
    fontWeight: "bold",
    color: "#181828",
    fontSize: 20
  },
  container: {
    textAlign: "left"
  }
});

class SliderItem extends React.Component {
  render() {
    const { firstItem, secondItem } = this.props;
    const { image, priceStyle, titleStyle, container } = styles;
    return (
      <>
        <BookItem book={firstItem} />
        {/* <BookItem book={secondItem} /> */}
        {/* {this.props.book ? (
          <View style={container} key={id}>
            <Image style={image} source={{ uri: coverPhoto }} />
            <Text>
              <Text style={priceStyle}>{price} SEK</Text>
              <Text>{"\n"}</Text>
              <Text style={titleStyle}>{title}</Text>{" "}
            </Text>
          </View>
        ) : null} */}
      </>
    );
  }
}

export default SliderItem;
