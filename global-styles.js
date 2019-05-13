import { StyleSheet } from "react-native";

const colors = {
  black: "#18182B",
  gray: "#F5F5F5",
  green: "#28AD00"
};

const utilities = StyleSheet.create({
  dFlex: {
    flexDirection: "row"
  },
  alignItemsCenter: {
    alignItems: "center"
  },
  justifyContentCenter: {
    justifyContent: "center"
  },
  container: {
    marginTop: 30,
    marginBottom: 30,
    marginRight: 20,
    marginLeft: 20
  },
  backgroundWhite: {
    flex: 1,
    backgroundColor: "#fff"
  },
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
