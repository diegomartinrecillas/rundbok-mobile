import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { ScrollView } from "react-native-gesture-handler";
import Logo from "../components/Logo";
import { fetchBook } from "../store";

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
    borderColor: "#d8d9e4",
    borderWidth: 1,
    padding: 25,
    borderRadius: 4,
    marginBottom: 50
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
    headerTitle: <Logo />,
    headerRight: (
      <Icon name="share-2" size={24} style={{ paddingRight: 20 }} light />
    )
  };

  componentDidMount() {
    // this should be done BEFORE loading into this view, when the user clicks on a book to view
    // we should trigger this with its respective ID
    this.props.fetch("32");
  }

  render() {
    const {
      author,
      course,
      coverPhoto,
      description,
      newPrice,
      personalDescription,
      pickupLocation,
      price,
      programme,
      releaseYear,
      student,
      title
    } = this.props.book;

    return (
      <>
        <ScrollView contentContainerStyle={styles.container}>
          <View>
            <Text style={styles.breadcrumps}>
              {programme && programme.name} / {course && course.name}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Image style={styles.cover} source={{ uri: coverPhoto }} />
            </View>
            <View style={{ flex: 1, lexDirection: "column" }}>
              <View>
                <Text style={styles.edition}>{releaseYear}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexShrink: 1,
                  marginTop: 15,
                  paddingRight: 10
                }}
              >
                <Text style={styles.heading}>{title}</Text>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.author}>By {author}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 30,
                  alignItems: "baseline"
                }}
              >
                <View style={{ marginRight: 10 }}>
                  <Text style={styles.price}>{price} SEK</Text>
                </View>
                <View>
                  <Text style={styles.priceNew}>NEW {newPrice}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 40 }}>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View style={{ marginTop: 40, marginBottom: 20 }}>
            <Text style={styles.header}>SELLER</Text>
          </View>
          <View style={styles.seller}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <Image
                  style={styles.avatar}
                  source={{ uri: student && student.avatar }}
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <View style={{ marginBottom: 5 }}>
                  <Text style={styles.name}>{student && student.fullName}</Text>
                </View>
                <View>
                  <Text style={styles.location}>
                    {student && student.location}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.description}>{personalDescription}</Text>
            </View>
          </View>
        </ScrollView>

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

const mapStateToProps = state => ({
  book: state.book.data
});

const mapDispatchToProps = dispatch => ({
  fetch: id => dispatch(fetchBook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookInfoScreen);
