import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import BookInfoScreen from "./book-info/BookInfo.js";

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
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerBackImage: (
        <Icon name="arrow-left" style={{ paddingLeft: 20 }} size={30} light />
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
