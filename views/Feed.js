import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";
import Logo from "../components/Logo";
import BookGroup from "./BookGroup";

class FeedScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
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
