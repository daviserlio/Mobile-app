import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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

        {/* Slider de quantidade */}
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>Quantidade: {quantity}</Text>
          <Slider
            style={{ width: '100%', height: 40 }}
            minimumValue={1}
            maximumValue={10}
            step={1}
            value={quantity}
            minimumTrackTintColor="#FF6600"
            maximumTrackTintColor="#999"
            thumbTintColor="#FF6600"
            onValueChange={setQuantity}
          />
        </View>

        {/* Picker */}
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Escolha o tipo de entrega:</Text>
          <Picker
            selectedValue={selectedOption}
            onValueChange={(itemValue) => setSelectedOption(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Normal" value="Normal" />
            <Picker.Item label="Rápido" value="Rapido" />
            <Picker.Item label="Super Rápido" value="Super Rapido" />
            <Picker.Item label="!!!INSTANTÂNEO!!!!" value="INSTANTANEO" />
          </Picker>
        </View>

        <TouchableOpacity
          style={styles.buyButton}
          onPress={() =>
            alert(`Compra de ${quantity} unidade(s) com a entrega ${selectedOption} realizada!`)
          }
        >
          <Text style={styles.buyButtonText}>Finalizar Compra</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  imageContainer: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: '#FF6600',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sliderContainer: {
    width: '100%',
    marginBottom: 10,
  },
  sliderLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  pickerContainer: {
    width: '100%',
    marginBottom: 20,
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  buyButton: {
    backgroundColor: '#FF6600',
    padding: 12,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    color: '#FF6600',
    fontWeight: 'bold',
  },
});
