import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const boxSize = width * 0.2; // 20% ширини екрану

const RowLayoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: "red" }]} />
      <View style={[styles.box, { backgroundColor: "green" }]} />
      <View style={[styles.box, { backgroundColor: "blue" }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  box: {
    width: boxSize,
    height: boxSize,
  },
});

export default RowLayoutScreen;
