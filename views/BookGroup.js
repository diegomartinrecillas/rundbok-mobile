import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Spacing from "../components/Spacing";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { carouselWidth, itemWidth } from "../components/CarouselStyle";
import SliderItem from "./SliderItem";

const styles = StyleSheet.create({
  group: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1
  },
  carousel: {
    margin: 20,
    backgroundColor: "#fff",
    flex: 1,
    alignContent: "center"
  },
  item: {
    backgroundColor: "#fff",
    flex: 1
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.8)"
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
    const { programme, course } = this.props;
    const { activeDot, group, carousel, item } = styles;
    const { activeDotIndex } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "#707392" }}>
            {programme ? "Programme" : "Course"}
          </Text>
          <Spacing height={10} />
          <Text style={group}>
            <Text style={{ color: "#000" }}>
              {programme ? programme : course}
            </Text>
            <Icon name="arrowright" size={24} light />
          </Text>
        </View>
        <Spacing height={20} />

        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={this.booksInPairs}
          renderItem={this._renderItem}
          sliderWidth={carouselWidth}
          itemWidth={itemWidth}
          inactiveSlideScale={0.7}
          containerCustomStyle={carousel}
          contentContainerCustomStyle={item}
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
      </View>
    );
  }
}

BookGroup.defaultProps = {
  programme: "",
  course: ""
};

export default BookGroup;
