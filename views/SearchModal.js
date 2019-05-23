import React from "react";
import { Modal, Text, StyleSheet, View, TextInput } from "react-native";
import { colors, utilities } from "../global-styles";
import Spacing from "../components/Spacing";
import Icon from "react-native-vector-icons/FontAwesome";
import Touchable from "../components/Touchable";
import { withNavigation } from "react-navigation";

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    // alignItems: "stretch",
    margin: 20
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    height: 50,
    borderColor: colors.black,
    borderStyle: "solid",
    borderRadius: 5,
    backgroundColor: "#f5f5f5"
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

  componentDidMount() {
    this.updateNavigationParams();
  }

  updateNavigationParams() {
    const { navigation } = this.props;

    navigation.setParams({
      searchModal: () => this.closeModal()
    });
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  render() {
    const closeModal = this.props.navigation.getParam("searchModal", null);
    const { modal, searchBar } = styles;
    const { showModal } = this.state;
    const { backgroundWhite, textExtraLarge, fontBold } = utilities;
    return (
      <View>
        <Modal animationType="slide" transparent={false} visible={showModal}>
          <View style={[modal, backgroundWhite]}>
            <Spacing height={100} />
            <View style={searchBar}>
              <Icon name="search" size={24} />
              <TextInput
                style={{ height: 40 }}
                placeholder="Search"
                onChangeText={searchText => this.setState({ searchText })}
              />
              <Touchable onPress={closeModal} activeOpacity={0.7}>
                <Icon name="close" size={24} />
              </Touchable>
            </View>

            <Text style={[textExtraLarge, fontBold, { color: colors.black }]}>
              RESULTS
            </Text>
          </View>
        </Modal>
      </View>
    );
  }
}

export default withNavigation(SearchModal);
