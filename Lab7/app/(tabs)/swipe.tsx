import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const SwipeableItem = ({ item, onSwipe }: { item: string, onSwipe: () => void }) => {
  const handleScroll = (e: any) => {
    const xOffset = e.nativeEvent.contentOffset.x;
    if (xOffset > width / 2) onSwipe();
  };

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      <View style={[styles.swipeItem, { backgroundColor: '#aaf' }]}>
        <Text style={styles.text}>{item}</Text>
      </View>
      <View style={[styles.swipeItem, { backgroundColor: '#eee' }]} />
    </ScrollView>
  );
};

export default function SwipeListScreen() {
  const [items, setItems] = useState(Array.from({ length: 7 }, (_, i) => `Swipe Me ${i + 1}`));

  const removeItem = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <SwipeableItem key={item} item={item} onSwipe={() => removeItem(index)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 50 },
  swipeItem: { width, height: 60, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 16 }
});