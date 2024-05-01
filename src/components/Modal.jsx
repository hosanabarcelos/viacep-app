import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Modal from 'react-native-modal';
import styles from '../styles/main';

export default function CustomModal({ isVisible, message, onClose }) {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalText}>{message}</Text>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.modalCloseText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}