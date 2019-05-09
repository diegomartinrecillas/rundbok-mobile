import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/Feather";

import BookInfoScreen from "./views/BookInfo.js";
import FeedScreen from "./views/Feed.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("BookInfo")}
          title="Goto BookInfo"
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    BookInfo: {
      screen: BookInfoScreen
    },
    Feed: {
      screen: FeedScreen
    }
  },
  {
    initialRouteName: "Feed",
    defaultNavigationOptions: {
      headerBackTitleStyle: {
        color: "#000",
        paddingRight: 20,
        fontSize: 18
      },
      headerBackTitle: "Back",
      headerBackImage: (
        <Icon name="chevron-left" size={30} style={{ paddingLeft: 20 }} />
      ),
      headerStyle: {
        backgroundColor: "#fff",
        borderBottomWidth: 0,
        elevation: 0,
        shadowColor: "transparent"
      }
    }
  }
);

export default createAppContainer(AppNavigator);
