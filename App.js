import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Produtos!</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      <ScrollView style={styles.scrollView}>
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
            <Text style={styles.texto}>Esta é a descrição<br />da imagem.</Text>
          </View>
        </View>
        
        <View style={styles.productContainer}>
          <View style={styles.box}>
            <Image
              source={require('./assets/product-4.png')}
              style={styles.imagem}
            />
            <Text style={styles.texto}>Esta é a descrição da nova imagem.</Text>
          </View>
        </View>
      </ScrollView>
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
    justifyContent: 'flex-start' // Alinha os itens no início do contêiner
  },
  header: {
    flexDirection: 'row', // Alinha os itens em linha
    justifyContent: 'space-between', // Espaça os itens igualmente
    alignItems: 'center', // Alinha os itens verticalmente ao centro
    width: '100%', // Largura total do contêiner
    marginBottom: 20, // Espaço abaixo do cabeçalho
  },
  title: {
    fontSize: 24, // Tamanho da fonte do título
    fontWeight: 'bold', // Deixa o texto em negrito
  },
  searchInput: {
    height: 40, // Altura da barra de pesquisa
    borderColor: '#ccc', // Cor da borda
    borderWidth: 1, // Largura da borda
    borderRadius: 5, // Arredonda os cantos da barra de pesquisa
    paddingHorizontal: 10, // Espaço interno horizontal
    width: '40%', // Largura da barra de pesquisa
  },
  scrollView: {
    width: '100%', // Garante que o ScrollView ocupe toda a largura
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