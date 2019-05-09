import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require("../assets/rundbok-logo-black.png")}
        style={{ width: 120, aspectRatio: 672 / 96 }}
      />
    );
  }
}

class BookInfoScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerRight: (
      <Icon name="share-2" size={24} style={{ paddingRight: 20 }} light />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Book Info Screen</Text>
      </View>
    );
  }
}

export default BookInfoScreen;
