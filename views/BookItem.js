import React from "react";
import { connect } from "react-redux";
import { Text, Image, Dimensions, View } from "react-native";
import { fetchBook } from "../store";
import { withNavigation } from "react-navigation";
import Spacing from "../components/Spacing";
import Touchable from "../components/Touchable";
import { utilities } from "../global-styles";

class BookItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { book, fetchBook, navigation, styles, noOnPress } = this.props;
    const { id, coverPhoto, price, title } = book;
    const {
      textLarge,
      textNormal,
      fontBold,
      fontMedium,
      textGreen,
      textBlack
    } = utilities;
    return (
      <View
        key={id}
        style={[styles, { width: Dimensions.get("window").width / 2 - 40 }]}
      >
        {!noOnPress ? (
          <Touchable
            onPress={() => {
              navigation.navigate("BookInfo");
              fetchBook(book.id);
            }}
            activeOpacity={0.5}
          >
            <Image
              style={{
                width: "100%",
                height: (Dimensions.get("window").width / 2 - 40) * 1.417
              }}
              source={{ uri: coverPhoto }}
            />
            <Spacing height={20} />
            <Text style={[textLarge, fontBold, textGreen]}>{price} SEK</Text>
            <Spacing height={10} />
            <Text style={[textNormal, fontMedium, textBlack]}>{title}</Text>
          </Touchable>
        ) : (
          <>
            <Image
              style={{
                width: "100%",
                height: (Dimensions.get("window").width / 2 - 40) * 1.417
              }}
              source={{ uri: coverPhoto }}
            />
            <Spacing height={20} />
            <Text style={[textLarge, fontBold, textGreen]}>{price} SEK</Text>
            <Spacing height={10} />
            <Text style={[textNormal, fontMedium, textBlack]}>{title}</Text>
          </>
        )}
      </View>
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
