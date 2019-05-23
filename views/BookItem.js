import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, Image, View } from "react-native";
import { fetchBook } from "../store";
import { withNavigation } from "react-navigation";

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
    textAlign: "left",
    backgroundColor: "#fff"
  }
});

class BookItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { book, fetchBook, navigation } = this.props;
    const { id, coverPhoto, price, title } = book;
    const { image, priceStyle, titleStyle, container } = styles;
    return (
      <>
        {book ? (
          <View style={container} key={id}>
            <Image style={image} source={{ uri: coverPhoto }} />
            <Text>
              <Text style={priceStyle}>{price} SEK</Text>
              <Text>{"\n"}</Text>
              <Text
                style={titleStyle}
                onPress={() => {
                  navigation.navigate("BookInfo");
                  fetchBook(book.id);
                }}
              >
                {title}
              </Text>
            </Text>
          </View>
        ) : null}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBook: id => dispatch(fetchBook(id))
});

export default withNavigation(
  connect(
    null,
    mapDispatchToProps
  )(BookItem)
);

//export default withNavigation(BookItem);
