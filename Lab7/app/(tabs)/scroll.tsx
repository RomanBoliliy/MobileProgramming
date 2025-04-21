import React, { useState } from 'react';
import { ScrollView, RefreshControl, Text, View, StyleSheet } from 'react-native';

export default function ScrollExampleScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);

  return (
    <ScrollView
      style={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={() => {
          setRefreshing(true);
          setTimeout(() => setRefreshing(false), 1000);
        }} />
      }
    >
      {items.map(item => (
        <View key={item} style={styles.item}><Text>{item}</Text></View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: { flex: 1, marginTop: 50 },
  item: { padding: 20, borderBottomWidth: 1, borderColor: '#ccc' }
});