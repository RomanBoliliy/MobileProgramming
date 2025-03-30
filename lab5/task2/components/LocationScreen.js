import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import * as Location from 'expo-location';

let MapView, Marker, WebView;
if (Platform.OS !== 'web') {
  MapView = require('react-native-maps').default;
  Marker = require('react-native-maps').Marker;
} else {
  WebView = require('react-native-webview').WebView;
}

const LocationScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Location permission denied');
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        {location ? (
          <WebView
            source={{ uri: `https://www.google.com/maps?q=${location.latitude},${location.longitude}` }}
            style={styles.map}
          />
        ) : (
          <Text>Fetching location...</Text>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text>
      ) : location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation
          followsUserLocation
        >
          <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} title="Your Location" />
          <Marker coordinate={{ latitude: 48.8588443, longitude: 2.2943506 }} title="Eiffel Tower" />
        </MapView>
      ) : (
        <Text>Fetching location...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '80%',
  },
  error: {
    color: 'red',
  },
});

export default LocationScreen;