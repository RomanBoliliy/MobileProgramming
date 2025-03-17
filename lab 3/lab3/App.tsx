import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import RowLayoutScreen from "./screens/RowLayoutScreen";
import ColumnLayoutScreen from "./screens/ColumnLayoutScreen";
import GridLayoutScreen from "./screens/GridLayoutScreen";

export default function App() {
  const [layout, setLayout] = useState("row");

  const renderLayout = () => {
    switch (layout) {
      case "row":
        return <RowLayoutScreen />;
      case "column":
        return <ColumnLayoutScreen />;
      case "grid":
        return <GridLayoutScreen />;
      default:
        return <RowLayoutScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {renderLayout()}
      <View style={styles.buttons}>
        <Button title="Row" onPress={() => setLayout("row")} />
        <Button title="Column" onPress={() => setLayout("column")} />
        <Button title="Grid" onPress={() => setLayout("grid")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
