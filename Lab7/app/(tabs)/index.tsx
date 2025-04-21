import { View, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Touch Feedback" onPress={() => router.push('/(tabs)/touch')} />
      <Button title="Scroll View" onPress={() => router.push('/(tabs)/scroll')} />
      <Button title="Swipe List" onPress={() => router.push('/(tabs)/swipe')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', gap: 12, padding: 20 }
});