import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native';

export default function TouchScreen() {
  const [pressState, setPressState] = useState('Default Text');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Button Pressed!")}>
        <Text style={styles.text}>Opacity</Text>
      </TouchableOpacity>
      <TouchableHighlight style={styles.button} onPress={() => Alert.alert("Button Pressed!")} underlayColor="#ddd">
        <Text style={styles.text}>Highlight</Text>
      </TouchableHighlight>
      <Pressable
        style={styles.button}
        onPressIn={() => setPressState('Pressed')}
        onPressOut={() => setPressState('Default Text')}
        onLongPress={() => setPressState('Long Pressed')}
      >
        <Text style={styles.text}>{pressState}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: { margin: 10, padding: 20, backgroundColor: '#ccc', borderRadius: 8 },
  text: { fontSize: 16 }
});