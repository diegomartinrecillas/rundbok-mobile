import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import IconFA from "react-native-vector-icons/FontAwesome";
import BookItem from "./BookItem";
import Spacing from "../components/Spacing";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { sliderWidth, itemWidth } from "../components/CarouselStyle";

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
  }
});

class BookGroup extends React.Component {
  _renderItem({ item, index }) {
    return <BookItem key={index} book={item} />;
  }
  render() {
    const { programme, books } = this.props;
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

        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={books}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          layout={"default"}
        />

        <Pagination
          dotsLength={books.length}
          activeDotIndex={1}
          containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: "rgba(255, 255, 255, 0.92)"
          }}
          inactiveDotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: "rgba(0, 0, 0, 0.92)"
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />

        {/* <ScrollView style={styles.container} horizontal>
          {books.map(book => (
            <BookItem key={book.id} book={book} />
          ))}
        </ScrollView> */}

        {/* <View style={styles.pagination}>
          <IconFA name="circle-o" style={{ paddingRight: 2 }} />
          <IconFA name="circle" style={{ paddingRight: 2 }} />
          <IconFA name="circle-o" style={{ paddingRight: 2 }} />
          <IconFA name="circle-o" style={{ paddingRight: 2 }} />
        </View> */}
      </View>
    );
  }
}

export default BookGroup;
