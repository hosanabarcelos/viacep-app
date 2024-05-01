import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';

import Modal from '../components/Modal';
import api from '../services/api';
import styles from '../styles/main';

export default function Main() {
  const [isCepModalVisible, setCepModalVisible] = useState(false);
  const [isErrorModalVisible, setErrorModalVisible] = useState(false);
  const [isInputModalVisible, setInputModalVisible] = useState(false);
  const [cepValue, setCepValue] = useState('');
  const inputRef = useRef(null);
  const [cepData, setCepData] = useState(null);

  async function fetchCepData() {
    if (cepValue.trim() === '') {
      setInputModalVisible(true);
      return;
    }
    if (cepValue.length !== 8) {
      setCepModalVisible(true);
      setCepValue('');
      return;
    }

    try {
      const response = await api.get(`/${cepValue}/json`);

      if (response.data.erro) {
        setErrorModalVisible(true);
      } else {
        setCepData(response.data);
        setErrorModalVisible(false);
        Keyboard.dismiss();
      }
    } catch (error) {
      console.log('ERROR: ' + error);
      setErrorModalVisible(true);
    }
  }

  function clearCepInput() {
    setCepValue('');
    inputRef.current.focus();
    setCepData(null);
    setErrorModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
          <Text style={styles.label}>Qual CEP você procura? 👀</Text>
          <TextInput
            style={styles.input}
            placeholder='Ex: 01052024'
            value={cepValue}
            onChangeText={(text) => setCepValue(text)}
            keyboardType='numeric'
            placeholderTextColor='gray'
            ref={inputRef}
          />
      </View>

      <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'blue'}]}
            onPress={fetchCepData}
          >
              <Text style={styles.buttonText}>Buscar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'gray'}]}
            onPress={clearCepInput}
          >
              <Text style={styles.buttonText}>Limpar</Text>
          </TouchableOpacity>
      </View>

      {cepData ? cepData &&
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>CEP: {cepData.cep} </Text>

          {cepData.logradouro ? (
            <Text style={styles.resultText}>Logradouro: {cepData.logradouro}</Text>
          ) : (
            <Text style={styles.resultText}>Logradouro: (não registrado)</Text>
          )}

          {cepData.bairro ? (
            <Text style={styles.resultText}>Bairro: {cepData.bairro}</Text>
          ) : (
            <Text style={styles.resultText}>Bairro: (não registrado)</Text>
          )}

          <Text style={styles.resultText}>Cidade: {cepData.localidade}</Text>
          <Text style={styles.resultText}>Estado: {cepData.uf}</Text>
        </View>

        :

        <View style={styles.resultContainer}>
            <Text style={styles.resultText}>
                {/* Nada por aqui...{"\n"} */}
                Pesquise por um CEP 🔍
            </Text>
        </View>
      }

      <Modal isVisible={isCepModalVisible} message="Digite um CEP válido. 🧐" onClose={() => setCepModalVisible(false)} />
      <Modal isVisible={isErrorModalVisible} message="CEP não encontrado. 🫤" onClose={() => setErrorModalVisible(false)} />
      <Modal isVisible={isInputModalVisible} message="Nenhum CEP informado. 🤷‍♀️" onClose={() => setInputModalVisible(false)} />
    </View>
  );
}