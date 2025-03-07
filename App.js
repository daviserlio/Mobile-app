import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Produtos!</Text>
      <Image
        source={require('./assets/product-2.png')}
        style={styles.imagem}
      />
      <Text style={styles.texto}>Esta é a descrição da imagem.</Text>
      <Image
        source={require('./assets/product-1.png')} 
        style={styles.imagem}
      />
      <Text style={styles.texto}>Esta é a descrição da imagem.</Text>
      <Image
        source={require('./assets/product-3.png')} 
        style={styles.imagem}
      />
      <Text style={styles.texto}>Esta é a descrição<br></br> da imagem.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 200, // Largura da imagem
    height: 200, // Altura da imagem
  },
  texto: {
    marginTop: 10, // Espaço entre a imagem e o texto
    fontSize: 16, // Tamanho da fonte
    color: '#333', // Cor do texto
  },
});