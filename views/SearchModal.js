import React from "react";
import { Modal, Text, StyleSheet, View, TextInput } from "react-native";
import { colors, utilities } from "../global-styles";
import Spacing from "../components/Spacing";
import Icon from "react-native-vector-icons/FontAwesome";
import Touchable from "../components/Touchable";
import { withNavigation } from "react-navigation";
import { searchBooks } from "../store";
import BookItem from "./BookItem";
import LoadingScreen from "../components/LoadingScreen";
import { connect } from "react-redux";
import { RequestStatus } from "../api";

const styles = StyleSheet.create({
  modal: {
    margin: 20
  },
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
    flex: 1,
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
      searchText: ""
    };
  }

  updateNavigationParams() {
    const { navigation } = this.props;
    const { showModal } = this.state;

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

  render() {
    const { navigation, searchBooks, results, status } = this.props;
    const { modal, searchBar, textInput } = styles;
    const { showModal, searchText } = this.state;
    const { backgroundWhite, textExtraLarge, fontBold } = utilities;
    return (
      <View>
        <Modal animationType="slide" transparent={false} visible={showModal}>
          <View style={[modal, backgroundWhite]}>
            <Spacing height={100} />
            <View style={searchBar}>
              <Icon name="search" size={24} />
              <TextInput
                style={textInput}
                placeholder="Search"
                onChangeText={async text => {
                  await searchBooks(text);
                }}
              />
              <Touchable
                onPress={navigation.getParam("searchModal", null)}
                activeOpacity={0.7}
              >
                <Icon name="close" size={24} />
              </Touchable>
            </View>
            <Spacing height={30} />
            <Text style={[textExtraLarge, fontBold, { color: colors.black }]}>
              RESULTS
            </Text>
            <Spacing height={30} />
            {status === RequestStatus.IDLE ||
              (status === RequestStatus.LOADING && <LoadingScreen />)}
            {results.map(book => (
              <BookItem key={book.id} book={book} />
            ))}
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  results: state.books.searchResults,
  status: state.books.status
});

const mapDispatchToProps = dispatch => ({
  searchBooks: query => dispatch(searchBooks(query))
});

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchModal)
);
