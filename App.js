import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos!</Text>
      <View style={styles.productContainer}>
        <View style={styles.box}>
          <Image
            source={require('./assets/product-2.png')}
            style={styles.imagem}
          />
          <Text style={styles.texto}>Esta é a descrição da imagem.</Text>
        </View>
      </View>
      <View style={styles.productContainer}>
        <View style={styles.box}>
          <Image
            source={require('./assets/product-1.png')} 
            style={styles.imagem}
          />
          <Text style={styles.texto}>Esta é a descrição da imagem.</Text>
        </View>
      </View>
      <View style={styles.productContainer}>
        <View style={styles.box}>
          <Image
            source={require('./assets/product-3.png')} 
            style={styles.imagem}
          />
          <Text style={styles.texto}>Esta é a descrição<br/>da imagem.</Text>
        </View>
      </View>
    </View>
  );
}

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1, // Permite que o contêiner ocupe todo o espaço disponível
    alignItems: 'center', // Alinha os itens no centro horizontalmente
    padding: 20, // Adiciona espaço interno ao redor do contêiner
    backgroundColor: '#f0f0f0', // Define a cor de fundo como cinza claro
    justifyContent: 'center' // Centraliza os itens verticalmente
  },
  title: {
    alignSelf: 'flex-start', // Alinha o título à esquerda
    fontSize: 24, // Tamanho da fonte do título
    fontWeight: 'bold', // Deixa o texto em negrito
    marginBottom: 20, // Espaço abaixo do título
  },
  productContainer: {
    marginBottom: 20, // Espaço entre os produtos
    alignItems: 'flex-start', // Alinha os itens dentro do contêiner do produto à esquerda
  },
  box: {
    backgroundColor: '#fff', // Cor de fundo da caixa
    borderRadius: 10, // Arredonda os cantos da caixa
    padding: 15, // Espaço interno da caixa
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Offset da sombra
    shadowOpacity: 0.2, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
    elevation: 5, // Elevação para Android (sombra)
    width: '100%', // Largura da caixa ocupa 100% do contêiner pai
  },
  imagem: {
    width: 200, // Largura da imagem
    height: 200, // Altura da imagem
    borderRadius: 40, // Arredonda a imagem
  },
  texto: {
    marginTop: 10, // Espaço entre a imagem e o texto
    fontSize: 16, // Tamanho da fonte do texto
    color: '#333', // Cor do texto
  },
});
