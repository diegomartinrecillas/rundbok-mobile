import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { useScreens } from "react-native-screens";
import Icon from "react-native-vector-icons/Feather";
import BookInfoScreen from "./views/BookInfo.js";
import FeedScreen from "./views/Feed.js";
import Home from "./views/Home.js";

useScreens();

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    BookInfo: {
      screen: BookInfoScreen
    },
    Feed: {
      screen: FeedScreen
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerBackTitleStyle: {
        color: "#000",
        paddingRight: 15,
        fontSize: 18
      },
      headerBackTitle: " ",
      headerBackImage: (
        <Icon name="arrow-left" size={30} style={{ paddingLeft: 15 }} />
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

const Navigation = createAppContainer(RootStack);

export default Navigation;
