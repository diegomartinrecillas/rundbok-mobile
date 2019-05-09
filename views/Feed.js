import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import LogoTitle from "./LogoTitle.js";
import BookItem from "./BookItem.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

class FeedScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerRight: (
      <Icon name="share-2" size={24} style={{ paddingRight: 20 }} light />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <BookItem />
      </View>
    );
  }
}

export default FeedScreen;