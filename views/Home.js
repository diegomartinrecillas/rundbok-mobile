import React from "react";
import { Text, View, Button } from "react-native";
import { utilities } from "../global-styles";

class HomeScreen extends React.Component {
  render() {
    const { backgroundWhite } = utilities;

    return (
      <View style={backgroundWhite}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("BookInfo")}
          title="Goto BookInfo"
        />
      </View>
    );
  }
}

export default HomeScreen;
