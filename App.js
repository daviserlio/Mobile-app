import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos!</Text> {/* Adicionei o estilo aqui */}
      <View style={styles.productContainer}>
        <Image
          source={require('./assets/product-2.png')}
          style={styles.imagem}
        />
        <Text style={styles.texto}>Esta é a descrição da imagem.</Text>
      </View>
      <View style={styles.productContainer}>
        <Image
          source={require('./assets/product-1.png')} 
          style={styles.imagem}
        />
        <Text style={styles.texto}>Esta é a descrição da imagem.</Text>
      </View>
      <View style={styles.productContainer}>
        <Image
          source={require('./assets/product-3.png')} 
          style={styles.imagem}
        />
        <Text style={styles.texto}>Esta é a descrição<br/>da imagem.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Alinha os itens no meio
    padding: 20, // Adiciona um padding ao redor do contêiner
    backgroundColor: '#f0f0f0', // Define o fundo como cinza claro
    justifyContent: 'center' // Centraliza a página mais no centro
  },
  title: {
    alignSelf: 'flex-start', // Alinha o texto "Produtos!" à esquerda
    fontSize: 24, // Tamanho da fonte do título
    fontWeight: 'bold', // Deixa o texto em negrito
    marginBottom: 20, // Espaço abaixo do título
  },
  productContainer: {
    marginBottom: 20, // Espaço entre os produtos
    alignItems: 'flex-start', // Alinha os itens dentro do contêiner do produto à esquerda
  },
  imagem: {
    width: 200, // Largura da imagem
    height: 200, // Altura da imagem
    borderRadius: 40, // Arredonda a imagem
  },
  texto: {
    marginTop: 10, // Espaço entre a imagem e o texto
    fontSize: 16, // Tamanho da fonte
    color: '#333', // Cor do texto
  },
});