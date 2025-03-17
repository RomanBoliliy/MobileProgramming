import React from "react";
import { View, StyleSheet, Platform, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const boxSize = width * 0.2; // 20% ширини екрану

const ColumnLayoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: "orange" }]} />
      <View style={[styles.box, { backgroundColor: "purple" }]} />
      <View style={[styles.box, { backgroundColor: "cyan" }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: Platform.select({
      ios: 20,
      android: 10,
    }),
  },
  box: {
    width: boxSize,
    height: boxSize,
  },
});

export default ColumnLayoutScreen;
