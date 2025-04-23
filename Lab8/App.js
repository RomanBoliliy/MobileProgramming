
import React, { useState } from 'react';
import { View, Text, Button, Modal, TouchableOpacity, ActivityIndicator, ToastAndroid, StyleSheet } from 'react-native';

export default function App() {
  const [modalType, setModalType] = useState(null);

  const handleFetchData = () => {
    setModalType('loading');
    setTimeout(() => {
      setModalType(null);
    }, 3000);
  };

  const showToast = () => {
    ToastAndroid.show('Something happened!', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <Button title="Confirm Action" onPress={() => setModalType('confirm')} />
      <Button title="Show Error" onPress={() => setModalType('error')} />
      <Button title="Toast Message" onPress={showToast} />
      <Button title="Fetch Data..." onPress={handleFetchData} />

      {/* Confirm Modal */}
      <Modal visible={modalType === 'confirm'} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Are you sure?</Text>
            <View style={styles.row}>
              <Button title="Yes" onPress={() => setModalType(null)} />
              <Button title="No" onPress={() => setModalType(null)} />
            </View>
          </View>
        </View>
      </Modal>

      {/* Error Modal */}
      <Modal visible={modalType === 'error'} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={[styles.modalBox, { backgroundColor: '#f8d7da' }]}>
            <Text style={[styles.modalTitle, { color: '#721c24' }]}>Something went wrong</Text>
            <View style={styles.row}>
              <Button title="Fix it" onPress={() => setModalType(null)} color="#721c24" />
              <Button title="Ignore it" onPress={() => setModalType(null)} color="#721c24" />
            </View>
          </View>
        </View>
      </Modal>

      {/* Loading Modal */}
      <Modal visible={modalType === 'loading'} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Loading...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  loadingBox: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
});
