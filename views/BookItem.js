import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 100
  },
  price: {
    color: "#32ab00",
    fontWeight: "bold",
    fontSize: 22
  },
  title: {
    fontWeight: "bold",
    color: "#181828",
    fontSize: 20
  },
  text: {
    textAlign: "left"
  }
});

class BookItem extends React.Component {
  render() {
    const { id, coverPhoto, price, title } = this.props.book;
    return (
      <View key={id}>
        <Image style={styles.image} source={{ uri: coverPhoto }} />
        <Text>
          <Text style={styles.price}>{price} SEK</Text>
          <Text>{"\n"}</Text>
          <Text style={styles.title}>{title}</Text>{" "}
        </Text>
      </View>
    );
  }
}

export default BookItem;
