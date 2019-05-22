import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Spacing from "../components/Spacing";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { sliderWidth, itemWidth } from "../components/CarouselStyle";
import { BookItem } from "./BookItem";
import SliderItem from "./SliderItem";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 20
  },
  programme: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1
  },
  pagination: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row"
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
    this.books = this.groupBooksinPairs();
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
    console.log(booksInPairs);

    return booksInPairs;
  }
  _renderItem({ item, index }) {
    return (
      // <View key={index} style={{ flex: 1, flexDirection: "row" }}>
      //   <BookItem book={item.firstItem} />
      // </View>
      <SliderItem firstItem={item.firstItem} secondItem={item.secondItem} />
    );
  }
  render() {
    const { programme } = this.props;
    const { activeDot } = styles;
    const { activeDotIndex } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "#707392" }}>Programme</Text>
          <Spacing height={10} />
          <Text style={styles.programme}>
            {programme}
            <Icon name="arrowright" size={24} light />
          </Text>
        </View>
        <Spacing height={20} />

        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={this.books}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth / 2}
          activeSlideOffset={10}
          onSnapToItem={index =>
            this.setState(previousState => ({
              activeDotIndex: index
            }))
          }
        />

        <Pagination
          dotsLength={this.books.length}
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

export default BookGroup;
