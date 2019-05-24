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
    const { container, dFlex, fontBold, textBlack, textLarge } = utilities;
    return (
      <ScrollView contentContainerStyle={container}>
        <SafeAreaView>
          <Spacing height={20} />
          <Text style={[textLarge, fontBold, textBlack]}>{name}</Text>
          <Spacing />
          <View
            style={[
              dFlex,
              { flexWrap: "wrap", justifyContent: "space-between" }
            ]}
          >
            {books.map(book => (
              <BookItem
                key={book.id}
                styles={{ marginBottom: 40 }}
                book={book}
              />
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}
export default withNavigation(CategoryScreen);
