import React from "react";
import { withNavigation } from "react-navigation";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Logo from "../components/Logo";
import Spacing from "../components/Spacing";
import { SafeAreaView } from "react-navigation";
import { utilities } from "../global-styles";
import BookItem from "./BookItem";

class CategoryScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Logo />
    };
  };

  render() {
    const { navigation } = this.props;
    const books = navigation.getParam("books");
    const name = navigation.getParam("title");
    const {
      container,
      dFlex,
      alignItemsCenter,
      justifyContentCenter,
      fontBold,
      textBlack,
      textLarge
    } = utilities;
    return (
      <SafeAreaView style={container}>
        <Spacing />
        <Text
          style={[
            fontBold,
            textBlack,
            textLarge,
            { textTransform: "uppercase" }
          ]}
        >
          {name}
        </Text>
        <Spacing />

        <ScrollView>
          <View
            style={[
              dFlex,
              alignItemsCenter,
              justifyContentCenter,
              { flexWrap: "wrap" }
            ]}
          >
            {books.map(book => (
              <View key={book.id} style={{ margin: 10 }}>
                <BookItem book={book} />
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default withNavigation(CategoryScreen);
