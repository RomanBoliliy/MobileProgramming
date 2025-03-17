import React from "react";
import { View, StyleSheet, Platform, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const boxSize = width * 0.2; // 20% ширини екрану

const GridLayoutScreen = () => {
  return (
    <View style={styles.container}>
      {[...Array(8)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.box,
            { backgroundColor: index % 2 === 0 ? "pink" : "yellow" },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: Platform.select({
      ios: 20,
      android: 10,
    }),
  },
  box: {
    width: boxSize,
    height: boxSize,
    margin: Platform.select({
      ios: 10,
      android: 5,
    }),
  },
});

export default GridLayoutScreen;
