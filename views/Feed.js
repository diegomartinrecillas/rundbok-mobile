import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";

import LogoTitle from "./LogoTitle.js";
import BookItem from "./BookItem";
import BookGroup from "./BookGroup";

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
      <ScrollView>
        <BookGroup programme="architecture" />
        <BookGroup programme="design" />
        <BookGroup programme="computer science" />
      </ScrollView>
    );
  }
}

export default FeedScreen;
