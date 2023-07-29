// React Native Counter Example using Hooks!

import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Header from '../../../components/Header';

export default function EmptyState(){


return (
    <>
    <Header />
    <View style={styles.container}>
        <Text style={styles.title}>VOCÊ NÃO TEM NENHUM CANAL DE VÍDEO CADASTRADO</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Cadastrar Canal</Text>
        </TouchableOpacity>
    </View>

    </>
  
  );
};


const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    paddingHorizontal: 18,
    height: 800,
  },
  title: {
    fontSize: 30,
    fontFamily: 'BebasNeueBold-7B9LE',
    textAlign: 'center',
    color: '#000',
    marginTop: 32,
  },
  button: {
    backgroundColor: '#1D9BF0',
    width: 155,
    height: 37,
    position: 'relative',
    top: 400,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    padding: 10,
    alignSelf: 'center',
  },
  rectangle: {
    position: 'absolute',
    bottom: 200,
  },
  textButton: {
    fontSize: 14,
    color: '#fff',
    position: 'relative',
  },
});


