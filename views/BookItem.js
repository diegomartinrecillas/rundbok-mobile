import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
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
    return (
      <View>
        <Image style={styles.image} />
        <Text>
          <Text style={styles.price}>{this.props.price} SEK</Text>
          <Text>{"\n"}</Text>
          <Text style={styles.title}>{this.props.title}</Text>{" "}
        </Text>
      </View>
    );
  }
}

export default BookItem;
