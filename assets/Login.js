import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Switch, } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Principal');
  };

  const themeStyles = darkMode ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, themeStyles.container]}>
      <View style={[styles.loginBox, themeStyles.loginBox]}>
        <Text style={[styles.title, themeStyles.text]}>LOGIN DE CLIENTES</Text>

        <TextInput
          style={[styles.input, themeStyles.input]}
          placeholder="Seu Nome Completo"
          placeholderTextColor={darkMode ? '#ccc' : '#666'}
          value={firstName}
          onChangeText={setFirstName}
        />

        <TextInput
          style={[styles.input, themeStyles.input]}
          placeholder="Seu E-mail"
          placeholderTextColor={darkMode ? '#ccc' : '#666'}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.rememberContainer}>
          <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
            <Text style={themeStyles.text}>
              {rememberMe ? '☑' : '☐'} Esqueceu a Senha?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.switchRow}>
          <Text style={themeStyles.text}>Modo Escuro</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            thumbColor={darkMode ? '#FF6600' : '#ccc'}
            trackColor={{ false: '#999', true: '#FF6600' }}
          />
        </View>

        <View style={styles.switchRow}>
          <Text style={themeStyles.text}>Notificações</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            thumbColor={notificationsEnabled ? '#FF6600' : '#ccc'}
            trackColor={{ false: '#999', true: '#FF6600' }}
          />
        </View>

        <View style={styles.separator} />

        <Text style={themeStyles.text}>
          Não é cliente? <Text style={styles.signupLink}>CRIAR CONTA!</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#FF6600',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  rememberContainer: {
    alignItems: 'flex-start',
    width: '100%',
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 5,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    width: '100%',
    marginVertical: 10,
  },
  signupLink: {
    color: '#FF6600',
    fontWeight: 'bold',
  },
});

// Estilos claros
const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
  },
  loginBox: {
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eee',
    color: '#000',
  },
  text: {
    color: '#000',
  },
});

// Estilos escuros
const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
  loginBox: {
    backgroundColor: '#333',
  },
  input: {
    backgroundColor: '#555',
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
});
