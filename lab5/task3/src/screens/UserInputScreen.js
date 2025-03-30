import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Switch, Picker, StyleSheet } from 'react-native';

const UserInputScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [airplaneMode, setAirplaneMode] = useState(false);
  const [wifi, setWifi] = useState(true);
  const [selectedSize, setSelectedSize] = useState('M'); // Default clothing size

  const handleSubmit = () => {
    Alert.alert('Submitted', `Username: ${username}\nPassword: ${'*'.repeat(password.length)}`);
  };

  const toggleAirplaneMode = (value) => {
    setAirplaneMode(value);
    if (value) setWifi(false); // Disable Wi-Fi when Airplane Mode is on
  };

  const toggleWifi = (value) => {
    setWifi(value);
    if (value) setAirplaneMode(false); // Disable Airplane Mode when Wi-Fi is on
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Submit" onPress={handleSubmit} />

      <View style={styles.switchContainer}>
        <Text>Airplane Mode:</Text>
        <Switch value={airplaneMode} onValueChange={toggleAirplaneMode} />
      </View>

      <View style={styles.switchContainer}>
        <Text>Wi-Fi:</Text>
        <Switch value={wifi} onValueChange={toggleWifi} />
      </View>

      <Text style={styles.label}>Select Clothing Size:</Text>
      <Picker
        selectedValue={selectedSize}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedSize(itemValue)}
      >
        <Picker.Item label="Small (S)" value="S" />
        <Picker.Item label="Medium (M)" value="M" />
        <Picker.Item label="Large (L)" value="L" />
        <Picker.Item label="Extra Large (XL)" value="XL" />
      </Picker>
      <Text style={styles.selectedSize}>Selected Size: {selectedSize}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  selectedSize: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserInputScreen;
