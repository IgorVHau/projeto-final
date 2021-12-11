import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Cadastro = () => {

    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={styles.background}>
            <Text style={styles.textTitle}>Cadastro</Text>
            <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder='Nome completo'
            autoCorrect={false}
            onChangeText={() => {}}
            />

            <TextInput
            style={styles.input}
            placeholder='Número de telefone'
            autoCorrect={false}
            onChangeText={() => {}}
            />

            <TextInput
            style={styles.input}
            placeholder='E-mail'
            autoCorrect={false}
            onChangeText={() => {}}
            />

            <TextInput
            style={styles.input}
            placeholder='Senha'
            autoCorrect={false}
            onChangeText={() => {}}
            />

            <TouchableOpacity 
                style={styles.buttonSubmit}
                onPress={() => 
                navigation.navigate('Login')
            }>
                <Text style={styles.textColor}>Cadastro</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonSubmit}
                onPress={() =>
                navigation.navigate('Home')
            }>
                <Text style={styles.textColor}>Voltar para Home</Text>
            </TouchableOpacity>

            <Text style={styles.registerText}>Cadastro</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        width: '90%',
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: "#fff",
        width: "70%",
        marginBottom: 15,
        color: '#222',
        padding: 10,
        borderRadius: 15
    },
    textColor: {
        fontWeight: 'bold',
        color: 'yellow'
    },
    textTitle: {
        marginTop: 50,
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 34
    },
    buttonSubmit: {
        backgroundColor: '#33BB',
        width: '50%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginBottom: 20
    },
    registerText: {
        color: '#fff'
    }
})

export default Cadastro