import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, Image, View } from "react-native";
import { fetchBook } from "../store";
import { withNavigation } from "react-navigation";
import Spacing from "../components/Spacing";
import Touchable from "../components/Touchable";
import { utilities, colors } from "../global-styles";

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 3 / 4
  },
  container: {
    textAlign: "left",
    backgroundColor: "#fff",
    width: 160
  }
});

class BookItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { book, fetchBook, navigation } = this.props;
    const { id, coverPhoto, price, title } = book;
    const { image, container } = styles;
    const { textLarge, fontBold, textGreen, textBlack } = utilities;
    return (
      <>
        {book ? (
          <Touchable
            onPress={() => {
              navigation.navigate("BookInfo");
              fetchBook(book.id);
            }}
            activeOpacity={0.5}
            style={container}
            key={id}
          >
            <Image style={image} source={{ uri: coverPhoto }} />
            <Text style={[textLarge, fontBold, textGreen]}>{price} SEK</Text>
            <Spacing height={10} />
            <Text style={[textLarge, fontBold, textBlack]}>{title}</Text>
          </Touchable>
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
