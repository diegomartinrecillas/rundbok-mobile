import React from "react";
import { Modal, Text, StyleSheet, View, Alert } from "react-native";

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "stretch"
  }
});

class SearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: props.showModal
    };
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }
  render() {
    const { modal } = styles;
    const { showModal } = this.state;
    return (
      <View>
        <Modal animationType="slide" transparent={true} visible={showModal}>
          <View style={modal}>
            <Text>hola</Text>
          </View>
        </Modal>
      </View>
    );
  }
}

export default SearchModal;
