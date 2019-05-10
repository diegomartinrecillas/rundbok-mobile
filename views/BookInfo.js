import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import LogoTitle from "./LogoTitle.js";

const styles = StyleSheet.create({
  breadcrumps: {
    color: "#707392",
    opacity: 0.8,
    marginBottom: 30
  },
  container: {
    marginTop: 40,
    marginRight: 20,
    marginBottom: 20,
    marginLeft: 20
  },
  cover: {
    backgroundColor: "#d8d9e4",
    borderRadius: 4,
    height: 225,
    width: 150,
    marginRight: 30
  },
  edition: {
    marginTop: 20,
    color: "#707392",
    fontWeight: "bold"
  },
  heading: {
    fontSize: 28,
    flex: 1,
    flexWrap: "wrap"
  },
  author: {
    color: "#707392",
    fontSize: 14
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#32ab00"
  },
  priceNew: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#707392"
  },
  description: {
    color: "#707392",
    lineHeight: 26,
    fontSize: 16,
    fontWeight: "100"
  },
  header: {
    fontSize: 18,
    fontWeight: "bold"
  },
  seller: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#d8d9e4",
    borderWidth: 1,
    padding: 25,
    borderRadius: 4
  },
  avatar: {
    backgroundColor: "#d8d9e4",
    borderRadius: 35,
    height: 70,
    width: 70
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  location: {
    fontSize: 14,
    color: "#707392"
  }
});

class BookInfoScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerRight: (
      <Icon name="share-2" size={24} style={{ paddingRight: 20 }} light />
    )
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <View>
            <Text style={styles.breadcrumps}>Arquitecture / course name</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Image style={styles.cover} />
            </View>
            <View style={{ flex: 1, lexDirection: "column" }}>
              <View>
                <Text style={styles.edition}>Swedish, 2019</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexShrink: 1,
                  marginTop: 15,
                  paddingRight: 10
                }}
              >
                <Text style={styles.heading}>Lorem ipsum dolor sit amore</Text>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.author}>By Tara Westover</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 30,
                  alignItems: "baseline"
                }}
              >
                <View style={{ marginRight: 10 }}>
                  <Text style={styles.price}>80 SEK</Text>
                </View>
                <View>
                  <Text style={styles.priceNew}>NEW 350</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 40 }}>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, suas novum vix ei, tempor saperet vis
              cu. Sit liber incorrupte eu, in hinc audire cum. Ei dico diam qui,
              alia choro prompta ea vis, ad numquam omittam cum. Pro duis
              singulis mnesarchum ex, te est aliquip molestiae.
            </Text>
          </View>
          <View style={{ marginTop: 40, marginBottom: 20 }}>
            <Text style={styles.header}>SELLER</Text>
          </View>
          <View style={styles.seller}>
            <View>
              <Image style={styles.avatar} />
            </View>
            <View style={{ marginLeft: 20 }}>
              <View style={{ marginBottom: 5 }}>
                <Text style={styles.name}>John Walton</Text>
              </View>
              <View>
                <Text style={styles.location}>Kista, Stockholm</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: "#000",
            padding: 20,
            width: "100%",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Icon
                name="send"
                size={24}
                style={{ color: "#fff", paddingRight: 20 }}
                light
              />
            </View>
            <View>
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
                CONTACT SELLER
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default BookInfoScreen;
