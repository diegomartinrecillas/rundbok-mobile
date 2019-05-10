import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import IconFA from "react-native-vector-icons/FontAwesome";
import BookItem from "./BookItem";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 20
  },
  programme: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1
  },
  pagination: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row"
  }
});

class BookGroup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "#707392" }}>Programme</Text>
          <Text style={styles.programme}>
            {this.props.programme} <Icon name="arrowright" size={24} light />
          </Text>
        </View>

        <ScrollView style={styles.container} horizontal>
          <BookItem title="hello" price="30" author="hboah" />
          <BookItem title="heddllo" price="50" author="hbobakbnaah" />
          <BookItem title="hebhaobhllo" price="780" author="hboah" />
        </ScrollView>

        <View style={styles.pagination}>
          <IconFA name="circle-o" style={{ paddingRight: 2 }} />
          <IconFA name="circle" style={{ paddingRight: 2 }} />
          <IconFA name="circle-o" style={{ paddingRight: 2 }} />
          <IconFA name="circle-o" style={{ paddingRight: 2 }} />
        </View>
      </View>
    );
  }
}

export default BookGroup;
