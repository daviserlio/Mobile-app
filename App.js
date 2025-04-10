import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './assets/Login';
import ProductDetails from './assets/ProductDetailsScreen';


const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('TODOS');

  {/* Lista de Produtos */}
  const products = [
    { name: 'Notebook Dell Inspiron', price: 'R$ 3.899,00', image: require('./assets/product-2.png') },
    { name: 'Notebook Gamer Acer Nitro V15', price: 'R$ 5.099,00', image: require('./assets/product-1.png') },
    { name: 'Notebook Gamer Dell G15', price: 'R$ 6.139,00', image: require('./assets/product-3.png') },
    { name: 'Combo Gamer Eg54 Evolut Starter', price: 'R$ 104,27', image: require('./assets/product-4.png') },
    { name: 'Xiaomi 12s Ultra', price: 'R$ 2.312,00', image: require('./assets/product-11.png') },
    { name: 'Playstation 5 Slim', price: 'R$ 3.423,00', image: require('./assets/product-14.png') },
    { name: 'Volante Thrustmaster Ferrari 458 Spider Racing', price: 'R$ 1.070,90,', image: require('./assets/product-13.png')},
    { name: 'Microsoft Xbox Series X 1TB', price: 'R$ 5.170,90,', image: require('./assets/product-12.png')}
  ];
  return (
 
    /* Barra de Pesquisa */  
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Barra de Categorias */}
      <View style={styles.categoryContainer}>
        {['TODOS', 'CELULARES', 'ÁUDIO', 'COMPUTADORES', 'GAMES', 'TV'].map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

     {/* Box do Banner */} 
     <ScrollView style={styles.scrollView}> 
      <View style={styles.bannerBox}>
        <Image source={require('./assets/Cupom.webp')} style={styles.banner} />
        <Text style={styles.bannerText}>Quinzena do Consumidor - Última Chance!</Text>
      </View>

     
        {products.map((product, index) => (
          <View key={index} style={styles.productContainer}>
            <View style={styles.box}>
              <View style={styles.row}>
                <Image source={product.image} style={styles.imagem} />
                <Text style={styles.texto}>{product.name}{"\n"}{product.price}</Text>
              </View>
              <TouchableOpacity
                style={styles.buyButton}
                onPress={() => navigation.navigate('Detalhes', { product })}
              >
                <Text style={styles.buyButtonText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

 {/* Navegação */} 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Principal" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    alignItems: 'center', // Alinha os itens ao centro horizontalmente
    padding: 20, // Adiciona espaçamento interno de 20 pixels
    backgroundColor: '#f0f0f0', // Define a cor de fundo do app
    justifyContent: 'flex-start', // Alinha os itens ao início do eixo principal (vertical)
  },
  header: {
    flexDirection: 'row', // Organiza os elementos em linha
    justifyContent: 'space-between', // Distribui os elementos uniformemente ao longo do eixo horizontal
    alignItems: 'center', // Centraliza os itens verticalmente
    width: '100%', // Ocupa toda a largura disponível
    marginBottom: 10, // Espaçamento inferior de 10 pixels
  },
  searchInput: {
    height: 40, // Altura do campo de busca
    borderColor: '#ccc', // Cor da borda
    borderWidth: 1, // Largura da borda de 1 pixel
    borderRadius: 5, // Borda arredondada
    paddingHorizontal: 10, // Espaçamento interno horizontal
    width: '60%', // Ocupa 60% da largura do container
    backgroundColor: '#fff', // Fundo branco
    fontFamily: 'Inter-Black' 
  },
  categoryContainer: {
    flexDirection: 'row', // Exibe os itens em linha
    justifyContent: 'center', // Centraliza os itens
    width: '100%', // Ocupa toda a largura disponível
    marginBottom: 10, // Espaçamento inferior
    flexWrap: 'wrap', // Permite que os itens quebrem linha se necessário
  },
  categoryButton: {
    borderWidth: 2, // Define a largura da borda
    borderColor: '#FF6600', // Cor da borda
    borderRadius: 10, // Arredondamento da borda
    paddingVertical: 8, // Espaçamento vertical interno
    paddingHorizontal: 12, // Espaçamento horizontal interno
    marginHorizontal: 5, // Espaçamento lateral entre os botões
    marginBottom: 5, // Espaçamento inferior entre as linhas de botões
  },
  categoryText: {
    color: '#FF6600', // Cor do texto dos botões de categoria
    fontWeight: 'bold', // Define a fonte como negrito
  },
  selectedCategory: {
    backgroundColor: '#FF6600', // Define o fundo laranja para categoria selecionada
  },
  selectedCategoryText: {
    color: '#FFFFFF', // Define a cor do texto branco para categoria selecionada
  },
  bannerBox: {
    backgroundColor: '#fff', // Fundo branco para o banner
    borderRadius: 10, // Arredondamento da borda do banner
    padding: 10, // Espaçamento interno
    width: '100%', // Ocupa toda a largura disponível
    alignItems: 'center', // Centraliza os itens horizontalmente
    marginBottom: 15, // Espaçamento inferior
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Posição da sombra
    shadowOpacity: 0.2, // Opacidade da sombra
    shadowRadius: 4, // Raio de difusão da sombra
    elevation: 5, // Elevação para Android (sombra)
  },
  banner: {
    width: '100%', // Ocupa toda a largura disponível
    height: 150, // Define a altura do banner
    resizeMode: 'cover', // Ajusta a imagem para cobrir o espaço
    borderRadius: 10, // Borda arredondada
  },
  bannerText: {
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Texto em negrito
    color: '#333', // Cor do texto
    marginTop: 5, // Espaçamento superior
    textAlign: 'center', // Centraliza o texto
  },
  scrollView: {
    width: '100%', // Ocupa toda a largura disponível
  },
  productContainer: {
    marginBottom: 20, // Espaçamento inferior entre os produtos
    alignItems: 'flex-start', // Alinha os itens à esquerda
  },
  box: {
    backgroundColor: '#fff', // Fundo branco do box do produto
    borderRadius: 10, // Borda arredondada
    padding: 15, // Espaçamento interno
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Posição da sombra
    shadowOpacity: 0.2, // Opacidade da sombra
    shadowRadius: 4, // Raio de difusão da sombra
    elevation: 5, // Elevação para Android (sombra)
    width: '100%', // Ocupa toda a largura disponível
  },
  row: {
    flexDirection: 'row', // Alinha os elementos em linha
    alignItems: 'center', // Centraliza os elementos verticalmente
  },
  imagem: {
    width: 100, // Define a largura da imagem
    height: 100, // Define a altura da imagem
    borderRadius: 10, // Arredonda os cantos da imagem
  },
  texto: {
    marginLeft: 10, // Adiciona um espaçamento à esquerda do texto
    fontSize: 16, // Tamanho da fonte
    fontWeight: 'bold', // // Texto em negrito
  },
  buyButton: {
    borderWidth: 2, // Define a largura da borda do botão
    borderColor: '#FF6600', // Define a cor da borda do botão
    borderRadius: 10, // Arredonda os cantos do botão com um raio
    paddingVertical: 8, // Adiciona um espaçamento interno na parte superior e inferior
    paddingHorizontal: 12, // Adiciona um espaçamento interno na lateral
    marginTop: 10, // Adiciona uma margem superior para espaçar o botão de outros elementos acima dele.
    alignItems: 'center', // Centraliza o conteúdo horizontalmente dentro do botão.
    backgroundColor: '#FF6600', // Define a cor de fundo do botão
  },
  buyButtonText: {
    color: '#FFFFFF', // Define a cor do texto 
    fontWeight: 'bold', // Deixa o texto em negrito.
  },
});

