import React from "react";
import {
  Modal,
  Text,
  StyleSheet,
  View,
  TextInput,
  SafeAreaView
} from "react-native";
import { colors, utilities, variables } from "../global-styles";
import Spacing from "../components/Spacing";
import Icon from "react-native-vector-icons/Feather";
import Touchable from "../components/Touchable";
import { withNavigation } from "react-navigation";
import { searchBooks } from "../store";
import BookItem from "./BookItem";
import LoadingScreen from "../components/LoadingScreen";
import { connect } from "react-redux";
import { RequestStatus } from "../api";
import { ScrollView } from "react-native-gesture-handler";
import { fetchBook } from "../store";

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    borderColor: colors.black,
    borderStyle: "solid",
    borderRadius: 5,
    backgroundColor: "#f5f5f5"
  },
  textInput: {
    height: 40,
    alignItems: "flex-start",
    marginRight: 20,
    marginLeft: 20
  }
});

class SearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: props.showModal,
      searchQuery: ""
    };
  }

  updateNavigationParams() {
    const { navigation } = this.props;

    navigation.setParams({
      searchModal: () => this.toggleModal()
    });
  }

  toggleModal() {
    this.setState(previousState => ({
      showModal: !previousState.showModal
    }));
    this.updateNavigationParams();
  }

  handleBookClick(bookId) {
    const { navigation, fetchBook } = this.props;
    this.toggleModal();
    navigation.navigate("BookInfo");
    fetchBook(bookId);
  }

  render() {
    const { navigation, searchBooks, results, status } = this.props;
    const { showModal, searchQuery } = this.state;
    const { radius } = variables;
    const { textExtraLarge, fontBold, dFlex, container, textLarge } = utilities;
    return (
      <Modal
        animationType="slide"
        style={{ flex: 1 }}
        transparent={false}
        visible={showModal}
      >
        <View style={container}>
          <Spacing height={60} />
          <View style={{ width: "100%", height: 45 }}>
            <Icon
              style={{ position: "absolute", left: 15, top: 10, zIndex: 10 }}
              name="search"
              size={24}
            />
            <TextInput
              style={[
                {
                  width: "100%",
                  height: 45,
                  backgroundColor: "#f5f5f5",
                  borderRadius: radius,
                  paddingLeft: 50,
                  paddingTop: 2
                },
                textLarge
              ]}
              placeholder="Search"
              onChangeText={async text => {
                await searchBooks(text);
                this.setState({ searchQuery: text });
              }}
              value={searchQuery}
            />
            <Touchable
              style={{ position: "absolute", right: 15, top: 10 }}
              onPress={navigation.getParam("searchModal", null)}
              activeOpacity={0.7}
            >
              <Icon name="x" size={24} />
            </Touchable>
          </View>
          <Spacing height={10} />
        </View>
        {status === RequestStatus.IDLE ||
          (status === RequestStatus.LOADING && <LoadingScreen />)}
        <ScrollView contentContainerStyle={container}>
          <SafeAreaView>
            <Spacing height={30} />
            <Text style={[textExtraLarge, fontBold, { color: colors.black }]}>
              RESULTS
            </Text>
            <Spacing height={20} />
            {!results.length && (
              <Text style={textLarge}>No books matched your search</Text>
            )}
            <View
              style={[
                dFlex,
                { flexWrap: "wrap", justifyContent: "space-between" }
              ]}
            >
              {results.map(book => (
                <Touchable
                  onPress={() => this.handleBookClick(book.id)}
                  activeOpacity={0.5}
                  key={book.id}
                >
                  <BookItem
                    noOnPress
                    styles={{ marginBottom: 40 }}
                    book={book}
                  />
                </Touchable>
              ))}
            </View>
          </SafeAreaView>
        </ScrollView>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  results: state.books.searchResults,
  status: state.books.status
});

const mapDispatchToProps = dispatch => ({
  searchBooks: query => dispatch(searchBooks(query)),
  fetchBook: id => dispatch(fetchBook(id))
});

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchModal)
);
