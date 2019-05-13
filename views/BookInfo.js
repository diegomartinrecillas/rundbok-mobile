import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Image, Share, Linking } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { ScrollView } from "react-native-gesture-handler";
import Logo from "../components/Logo";
import { fetchBook } from "../store";
import { utilities, colors, variables } from "../global-styles";
import Spacing from "../components/Spacing";
import Touchable from "../components/Touchable";

const styles = StyleSheet.create({
  bottomButtonStyle: {
    backgroundColor: colors.black,
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingTop: 20,
    paddingBottom: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  bottomButtonOffset: {
    height: 79
  },
  cover: {
    backgroundColor: colors.gray,
    borderRadius: variables.radius,
    height: 180,
    width: 127,
    marginRight: 30
  },
  seller: {
    borderColor: colors.mediumGray,
    borderWidth: 1,
    padding: 25,
    borderRadius: variables.radius,
    marginBottom: 50
  },
  avatarStyles: {
    backgroundColor: colors.gray,
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 20
  }
});

class BookInfoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const shareBook = navigation.getParam("shareBook", null);
    return {
      headerTitle: <Logo />,
      headerRight: (
        <Touchable onPress={shareBook}>
          <Icon name="share-2" size={24} style={{ paddingRight: 20 }} light />
        </Touchable>
      )
    };
  };

  componentDidMount() {
    // this should be done BEFORE loading into this view, when the user clicks on a book to view
    // we should trigger this with its respective ID
    this.props.fetch("32");
    this.updateNavigationParams();
  }

  updateNavigationParams() {
    const { navigation } = this.props;

    navigation.setParams({
      shareBook: () => this.share()
    });
  }

  share() {
    const { id, title } = this.props.book;

    let message = `Look at this great book from Rundbok! `;
    message += `I think ${title} might be something for you https://rundbok.dev.sharpmind.se/book/${id}`;

    Share.share({
      message,
      title: `Rundbok`
    });
  }

  render() {
    const {
      author,
      course,
      coverPhoto,
      description,
      newPrice,
      personalDescription,
      price,
      programme,
      releaseYear,
      student,
      title
    } = this.props.book;
    const {
      bottomButtonStyle,
      bottomButtonOffset,
      seller,
      avatarStyles,
      cover
    } = styles;
    const {
      container,
      dFlex,
      alignItemsCenter,
      textGray,
      fontBold,
      textExtraLarge,
      textLightGray,
      textNormal,
      textSmall,
      textExtraSmall,
      textLarge,
      textWhite,
      textGreen
    } = utilities;

    if (!student || !programme || !course) {
      return <Text>Loading...</Text>;
    }

    const { fullName, avatar, location, email } = student;

    return (
      <>
        <ScrollView contentContainerStyle={container}>
          <Text style={textLightGray}>
            {programme.name} / {course.name}
          </Text>
          <Spacing />
          <View style={[dFlex, alignItemsCenter]}>
            <Image style={cover} source={{ uri: coverPhoto }} />
            <View style={{ flex: 1 }}>
              <Text style={[textExtraSmall, fontBold, textGray]}>
                {releaseYear}
              </Text>
              <Spacing height={10} />
              <Text style={[textExtraLarge, fontBold]}>{title}</Text>
              <Spacing height={10} />
              <Text style={textGray}>By {author}</Text>
              <Spacing height={10} />
              <Text style={[textLarge, fontBold, textGreen]}>
                {price} SEK{" "}
                <Text style={[textExtraSmall, fontBold, textGray]}>
                  NEW {newPrice}
                </Text>
              </Text>
            </View>
          </View>
          <Spacing />
          <Text style={[textNormal, textGray]}>{description}</Text>
          <Spacing />
          <Text style={[textLarge, fontBold]}>SELLER</Text>
          <Spacing height={20} />
          <View style={seller}>
            <View style={[dFlex, alignItemsCenter]}>
              <Image style={avatarStyles} source={{ uri: avatar }} />
              <View>
                <Text style={[textNormal, fontBold]}>{fullName}</Text>
                <Text style={[textSmall, textGray]}>{location}</Text>
              </View>
            </View>
            <Spacing height={20} />
            <Text style={[textNormal, textGray]}>{personalDescription}</Text>
          </View>
        </ScrollView>
        <View style={bottomButtonOffset} />
        <Touchable
          onPress={() => Linking.openURL(`mailto:${email}`)}
          style={bottomButtonStyle}
        >
          <Icon
            name="send"
            style={[textWhite, { fontSize: 24, paddingRight: 15 }]}
            light
          />
          <Text style={[textLarge, fontBold, textWhite]}>CONTACT SELLER</Text>
        </Touchable>
      </>
    );
  }
}

const mapStateToProps = state => ({
  book: state.book.data
});

const mapDispatchToProps = dispatch => ({
  fetch: id => dispatch(fetchBook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookInfoScreen);
