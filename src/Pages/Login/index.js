import React, { useState } from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, } from "react-native";
import { useNavigation } from "@react-navigation/native"


export default function Login(){
  //Ferramenta para acessar navegação
  const navigation = useNavigation();

  //Criar estados para acessar e-mail e senha
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

return (
  <KeyboardAvoidingView style={styles.background}>
    <View style={styles.containerLogo}>
      <Image source={require('../../../src/assets/LogoProvisorio.jpg')}/>
    </View>

    <View style={styles.container}>
      <TextInput
      style={styles.imput}
      value={email}
      placeholder="Email"
      autoCorrrect={false}
      onChangeText={setEmail} 
      />

      <TextInput
      style={styles.imput}
      value={senha}
      placeholder="Senha"
      autoCorrrect={false}
      onChangeText={setSenha} 
      />

      <TouchableOpacity 
        style={styles.btnSubmit}
        onPress={() =>
        navigation.navigate('Home')}
      >
        <Text style={styles.submitText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.btnRegister}
        onPress={() =>
        navigation.navigate('Cadastro')}
      >
        <Text style={styles.registerText}>Criar conta</Text>
      </TouchableOpacity>

    </View>

  </KeyboardAvoidingView>
);
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919'
    },
    containerLogo:{
        flex:1,
        alignItems: 'center'
    },
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50
    },
    imput:{
        backgroundColor:'#fff',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },
    btnSubmit:{
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    submitText:{
        color: "#fff",
        fontSize: 17
    }, 
    btnRegister:{
        marginTop: 10
    },
    registerText:{
        color: '#fff'
    }

});
