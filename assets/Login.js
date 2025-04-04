import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen ({ navigation,}) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Principal');
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.title}>LOGIN DE CLIENTES</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu Nome Completo"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Seu E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.rememberContainer}>
          <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
            <Text style={styles.rememberText}>{rememberMe ? '☑' : '☐'} Esqueçeu a Senha?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <Text style={styles.signupText}>Não é cliente? <Text style={styles.signupLink}>CRIAR CONTA!</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  loginBox: {
    backgroundColor: '#333',
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
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#555',
    color: 'white',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  rememberText: {
    color: 'white',
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    width: '100%',
    marginVertical: 10,
  },
  signupText: {
    color: 'white',
  },
  signupLink: {
    color: '#FF6600',
    fontWeight: 'bold',
  },
});

