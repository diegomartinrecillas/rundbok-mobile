import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { withNavigation } from "react-navigation";
import Spacing from "../components/Spacing";
import Carousel, { Pagination } from "react-native-snap-carousel";
import SliderItem from "./SliderItem";
import Touchable from "../components/Touchable";
import { colors, utilities } from "../global-styles";
import Icon from "react-native-vector-icons/Feather";

const styles = StyleSheet.create({
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.8)"
  },
  carousel: {
    marginBottom: 0
  }
});

class BookGroup extends React.Component {
  constructor(props) {
    super(props);
    this.booksInPairs = this.groupBooksinPairs();
    this.state = {
      activeDotIndex: 0
    };
  }

  groupBooksinPairs() {
    const { books } = this.props;
    let booksInPairs = [];
    for (let i = 0; i < books.length; i += 2) {
      booksInPairs.push({
        firstItem: books[i],
        secondItem: books[i + 1] ? books[i + 1] : null
      });
    }

    return booksInPairs;
  }
  _renderItem({ item, index }) {
    return (
      <SliderItem firstItem={item.firstItem} secondItem={item.secondItem} />
    );
  }
  render() {
    const { programme, course, books, navigation } = this.props;
    const { activeDot, carousel } = styles;
    const { activeDotIndex } = this.state;
    const { textLarge, backgroundWhite, fontBold, container } = utilities;

    return (
      <>
        <View style={container}>
          <Text style={{ color: "#707392" }}>
            {programme ? "Programme" : "Course"}
          </Text>
          <Spacing height={10} />
          <Touchable
            activeOpacity={0.7}
            onPress={() => {
              title = programme ? programme : course;
              navigation.navigate("Category", { books, title });
              //send books
            }}
          >
            <Text
              style={[
                textLarge,
                fontBold,
                { color: colors.black, textTransform: "uppercase" }
              ]}
            >
              {programme ? programme : course}{" "}
              <Icon size={18} name="arrow-right" />
            </Text>
          </Touchable>
        </View>

        <Spacing />
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={this.booksInPairs}
          renderItem={this._renderItem}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={Dimensions.get("window").width}
          inactiveSlideScale={1}
          removeClippedSubviews={false}
          contentContainerCustomStyle={backgroundWhite}
          containerCustomStyle={carousel}
          useScrollView
          enableSnap
          onSnapToItem={index =>
            this.setState(previousState => ({
              activeDotIndex: index
            }))
          }
        />
        <Pagination
          dotsLength={this.booksInPairs.length}
          activeDotIndex={activeDotIndex}
          dotStyle={activeDot}
          inactiveDotOpacity={0.2}
          inactiveDotScale={1}
          carouselRef={this._carousel}
          tappableDots={!!this._carousel}
        />
      </>
    );
  }
}

BookGroup.defaultProps = {
  programme: "",
  course: ""
};

export default withNavigation(BookGroup);
