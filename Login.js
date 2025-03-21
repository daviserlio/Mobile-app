import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        // Após pressionar o botão, navega para a tela de Produtos
        navigation.navigate('Produtos');
    };

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.title}>MEMBER LOGIN</Text>
                <TextInput
                    style={styles.input}
                    placeholder="YOUR FIRST NAME"
                    value={firstName}
                    onChangeText={setFirstName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="YOUR E-MAIL"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.rememberMeContainer}>
                    <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
                        <View style={styles.checkbox}>
                            {rememberMe && <View style={styles.checkboxChecked} />}
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.rememberMeText}>Remember me</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// Estilos do aplicativo

const styles = StyleSheet.create({
    container: {
        flex: 1, // A linha ocupa todo o espaço disponível na tela
        alignItems: 'center', // Alinha os itens horizontalmente ao centro
        padding: 20, // Adiciona espaçamento interno de 20 pixels ao redor da tela
        backgroundColor: '#d1d1d1', // Define a cor de fundo como um tom de cinza claro
        justifyContent: 'center', // Alinha os itens verticalmente ao centro
    },
    loginContainer: {
        backgroundColor: '#333', // Define o fundo do contêiner de login como cinza escuro
        borderRadius: 10, // Arredonda os cantos do contêiner de login
        padding: 20, // Adiciona espaçamento interno de 20 pixels dentro do contêiner de login
        width: '100%', // Define a largura do contêiner de login para ocupar toda a largura disponível
        maxWidth: 400, // Define a largura máxima do contêiner de login como 400 pixels
        alignItems: 'center', // Alinha os itens dentro do contêiner de login ao centro horizontalmente
    },
    title: {
        fontSize: 24, // Define o tamanho da fonte do título para 24 pixels
        fontWeight: 'bold', // Deixa o título em negrito
        color: '#fff', // Define a cor do título como branco
        marginBottom: 20, // Adiciona um espaçamento de 20 pixels abaixo do título
    },
    input: {
        height: 40, // Define a altura dos campos de entrada (TextInput) para 40 pixels
        borderColor: '#ccc', // Define a cor da borda do campo de entrada como cinza claro
        borderWidth: 1, // Define a largura da borda do campo de entrada como 1 pixel
        borderRadius: 5, // Arredonda os cantos da borda do campo de entrada
        paddingHorizontal: 10, // Adiciona espaçamento horizontal interno (esquerda e direita) de 10 pixels
        width: '100%', // Define a largura do campo de entrada para ocupar toda a largura disponível
        marginBottom: 15, // Adiciona um espaçamento de 15 pixels abaixo do campo de entrada
        backgroundColor: '#fff', // Define a cor de fundo do campo de entrada como branca
    },
    loginButton: {
        backgroundColor: '#007bff', // Define a cor de fundo do botão de login como azul
        borderRadius: 5, // Arredonda os cantos do botão de login
        paddingVertical: 10, // Adiciona espaçamento vertical (topo e fundo) de 10 pixels no botão
        paddingHorizontal: 20, // Adiciona espaçamento horizontal (esquerda e direita) de 20 pixels no botão
        width: '100%', // Define a largura do botão de login para ocupar toda a largura disponível
        alignItems: 'center', // Alinha os itens dentro do botão ao centro horizontalmente
        marginBottom: 15, // Adiciona um espaçamento de 15 pixels abaixo do botão de login
    },
    loginButtonText: {
        color: '#fff', // Define a cor do texto do botão de login como branco
        fontSize: 16, // Define o tamanho da fonte do texto do botão de login para 16 pixels
        fontWeight: 'bold', // Deixa o texto do botão de login em negrito
    },
    rememberMeContainer: {
        flexDirection: 'row', // Organiza os itens na linha (horizontal)
        alignItems: 'center', // Alinha os itens dentro do contêiner verticalmente ao centro
        marginBottom: 15, // Adiciona um espaçamento de 15 pixels abaixo do contêiner de "Remember me"
    },
    checkbox: {
        width: 20, // Define a largura da caixa de seleção como 20 pixels
        height: 20, // Define a altura da caixa de seleção como 20 pixels
        borderWidth: 1, // Define a largura da borda da caixa de seleção como 1 pixel
        borderColor: '#ccc', // Define a cor da borda da caixa de seleção como cinza claro
        borderRadius: 3, // Arredonda os cantos da caixa de seleção
        justifyContent: 'center', // Alinha os itens dentro da caixa de seleção verticalmente ao centro
        alignItems: 'center', // Alinha os itens dentro da caixa de seleção horizontalmente ao centro
        marginRight: 10, // Adiciona um espaçamento de 10 pixels à direita da caixa de seleção
    },
    checkboxChecked: {
        width: 14, // Define a largura do quadrado de marcação como 14 pixels
        height: 14, // Define a altura do quadrado de marcação como 14 pixels
        backgroundColor: '#007bff', // Define a cor de fundo do quadrado de marcação como azul
    },
    rememberMeText: {
        color: '#fff', // Define a cor do texto "Remember me" como branco
    },
    forgotPasswordText: {
        color: '#ccc', // Define a cor do texto de "Forgot password?" como cinza claro
        textDecorationLine: 'underline', // Adiciona sublinhado ao texto de "Forgot password?"
    },
});
