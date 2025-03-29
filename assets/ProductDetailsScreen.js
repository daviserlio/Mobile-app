import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
      </View>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>
      Adquirir este produto é investir em qualidade e performance. 
      Desenvolvido com tecnologia de ponta, ele oferece excelente desempenho e durabilidade para atender às suas necessidades diárias, seja para uso profissional ou lazer. 
      Além disso, ao comprar, você conta com um pós-venda dedicado, com suporte técnico eficiente e disponível para solucionar qualquer dúvida ou problema. 
      Com garantia de 40 anos, você tem total tranquilidade, sabendo que, em caso de defeito, o produto será trocado ou reparado. 
      Faça a escolha certa e experimente os benefícios de um produto confiável, com suporte contínuo e garantia de satisfação.
      </Text>
      <TouchableOpacity style={styles.buyButton} onPress={() => alert('Compra realizada!')}>
        <Text style={styles.buyButtonText}>Finalizar Compra</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível na tela
    alignItems: 'center', // Centraliza os elementos no eixo horizontal
    justifyContent: 'flex-start', // Alinha os elementos no topo da tela
    padding: 20, // Adiciona um espaçamento interno ao redor do conteúdo
    backgroundColor: '#f0f0f0', // Define um fundo cinza claro
  },
  imageContainer: {
    marginTop: 40, // Move a imagem para baixo 40 pixels
    alignItems: 'center', // Centraliza a imagem no eixo horizontal
    justifyContent: 'center', // Centraliza a imagem no eixo vertical
    width: '100%', // Define a largura total do container da imagem
  },
  image: {
    width: 220, // Define a largura da imagem em 220 pixels
    height: 220, // Define a altura da imagem em 220 pixels
    borderRadius: 10, // Arredonda as bordas da imagem
  },
  title: {
    fontSize: 20, // Define o tamanho da fonte do título
    fontWeight: 'bold', // Deixa o texto do título em negrito
    marginTop: 20, // Adiciona um espaço acima do título
    textAlign: 'center', // Centraliza o texto do título
  },
  price: {
    fontSize: 18, // Define o tamanho da fonte do preço
    color: '#FF6600', // Define a cor do preço como laranja
    marginVertical: 10, // Adiciona um espaçamento acima e abaixo do preço
  },
  description: {
    fontSize: 16, // Define o tamanho da fonte da descrição
    color: '#555', // Define a cor do texto da descrição como cinza escuro
    textAlign: 'center', // Centraliza o texto da descrição
    marginBottom: 20, // Adiciona um espaçamento abaixo da descrição
    paddingHorizontal: 20, // Adiciona espaçamento interno lateral ao texto
  },
  buyButton: {
    backgroundColor: '#FF6600', // Define a cor de fundo do botão de compra como laranja
    padding: 12, // Adiciona espaçamento interno ao botão
    borderRadius: 5, // Arredonda as bordas do botão
    marginTop: 10, // Adiciona um espaçamento acima do botão
    width: '80%', // Define a largura do botão como 80% da tela
    alignItems: 'center', // Centraliza o texto dentro do botão
  },
  buyButtonText: {
    color: '#fff', // Define a cor do texto do botão como branco
    fontWeight: 'bold', // Deixa o texto do botão em negrito
  },
  backButton: {
    marginTop: 15, // Adiciona um espaçamento acima do botão de voltar
    padding: 10, // Adiciona espaçamento interno ao botão de voltar
  },
  backButtonText: {
    color: '#FF6600', // Define a cor do texto do botão de voltar como laranja
    fontWeight: 'bold', // Deixa o texto do botão de voltar em negrito
  },
});
