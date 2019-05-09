import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import fontStyles from "../styles/Font";
import { marginBottom, marginTop } from "../styles/Margin";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 50,
    aspectRatio: 1
  }
});

class BookItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/kth.png")}
          style={[styles.image, marginBottom.sm, marginTop.md]}
        />
        <Text style={[fontStyles.big, marginBottom.xs]}>Price</Text>
        <Text style={[fontStyles.small, marginBottom.xs]}>Author</Text>
        <Text style={[fontStyles.big, fontStyles.boldText, marginBottom.xs]}>
          Title
        </Text>
      </View>
    );
  }
}

export default BookItem;
