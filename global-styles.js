import { StyleSheet } from "react-native";

const colors = {
  black: "#18182B",
  gray: "#F5F5F5",
  green: "#28AD00"
};

const utilities = StyleSheet.create({
  textLarge: {
    fontSize: 20
  },
  textSmall: {
    fontSize: 16
  },
  fontBold: {
    fontWeight: "bold"
  }
});

export { utilities, colors };
