import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BookItem from "./BookItem";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  }
});

class BookGroup extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container} horizontal>
        <BookItem title="hello" price="30" author="hboah" />
        <BookItem title="heddllo" price="50" author="hbobakbnaah" />
        <BookItem title="hebhaobhllo" price="780" author="hboah" />
      </ScrollView>
    );
  }
}

export default BookGroup;
