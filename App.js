import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './assets/Login';
import ProductDetails from './assets/ProductDetailsScreen';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('TODOS');
  const [selectedOption, setSelectedOption] = useState('menor');
  const [quantity, setQuantity] = useState(1);

  const products = [
    { name: 'Notebook Dell Inspiron', price: 'R$ 3.899,00', image: require('./assets/product-2.png') },
    { name: 'Notebook Gamer Acer Nitro V15', price: 'R$ 5.099,00', image: require('./assets/product-1.png') },
    { name: 'Notebook Gamer Dell G15', price: 'R$ 6.139,00', image: require('./assets/product-3.png') },
    { name: 'Combo Gamer Eg54 Evolut Starter', price: 'R$ 104,27', image: require('./assets/product-4.png') },
    { name: 'Xiaomi 12s Ultra', price: 'R$ 2.312,00', image: require('./assets/product-11.png') },
    { name: 'Playstation 5 Slim', price: 'R$ 3.423,00', image: require('./assets/product-14.png') },
    { name: 'Volante Thrustmaster Ferrari 458 Spider Racing', price: 'R$ 1.070,90', image: require('./assets/product-13.png') },
    { name: 'Microsoft Xbox Series X 1TB', price: 'R$ 5.170,90', image: require('./assets/product-12.png') }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

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

      <ScrollView style={styles.scrollView}>
        <View style={styles.bannerBox}>
          <Image source={require('./assets/Cupom.webp')} style={styles.banner} />
          <Text style={styles.bannerText}>Quinzena do Consumidor - Última Chance!</Text>
        </View>

        {/* Slider de quantidade */}
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>Exibir: {quantity}</Text>
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

          <Picker
            selectedValue={selectedOption}
            onValueChange={(itemValue) => setSelectedOption(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Maior preço" value="maior" />
            <Picker.Item label="Menor Preço" value="menor" />

          </Picker>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '60%',
    backgroundColor: '#fff',
    fontFamily: 'Inter-Black',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  categoryButton: {
    borderWidth: 2,
    borderColor: '#FF6600',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    marginBottom: 5,
  },
  categoryText: {
    color: '#FF6600',
    fontWeight: 'bold',
  },
  selectedCategory: {
    backgroundColor: '#FF6600',
  },
  selectedCategoryText: {
    color: '#FFFFFF',
  },
  bannerBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  banner: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
    textAlign: 'center',
  },
  scrollView: {
    width: '100%',
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
  productContainer: {
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  texto: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyButton: {
    borderWidth: 2,
    borderColor: '#FF6600',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#FF6600',
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
