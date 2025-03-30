import React from 'react';
import { SafeAreaView } from 'react-native';
import LocationScreen from '../../components/LocationScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LocationScreen />
    </SafeAreaView>
  );
}
