import React from "react";
import { ActivityIndicator, View } from "react-native";
import { colors } from "../global-styles";
import Spacing from "./Spacing";

const loadingScreen = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.white
};

const LoadingScreen = () => {
  return (
    <View style={loadingScreen}>
      <ActivityIndicator size="large" color={colors.black} />
      <Spacing height={60} />
    </View>
  );
};

export default LoadingScreen;
