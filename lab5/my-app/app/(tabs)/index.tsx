import React from 'react';
import { SafeAreaView } from 'react-native';
import ItemList from '../../components/ItemList'; 

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ItemList />
    </SafeAreaView>
  );
}
