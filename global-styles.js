import { StyleSheet } from "react-native";

const variables = {
  radius: 4
};

const colors = {
  black: "#18182B",
  darkGray: "#707392",
  mediumGray: "#D8D9E4",
  gray: "#F5F5F5",
  green: "#28AD00",
  white: "#ffffff"
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

  textExtraLarge: {
    fontSize: 21
  },

  textLarge: {
    fontSize: 18
  },

  textNormal: {
    fontSize: 17
  },

  textSmall: {
    fontSize: 16
  },

  textExtraSmall: {
    fontSize: 14
  },

  textGray: {
    color: colors.darkGray
  },

  textLightGray: {
    color: colors.darkGray,
    opacity: 0.9
  },

  textWhite: {
    color: colors.white
  },

  textGreen: {
    color: colors.green
  },

  fontBold: {
    fontWeight: "bold"
  }
});

export { utilities, colors, variables };
