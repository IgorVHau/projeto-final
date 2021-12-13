import React, { useState, useContext, useEffect } from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/authContext"
import api from "../../Service/api";


export default function Login(){
  //Ferramenta para acessar navegação
  const navigation = useNavigation();

  //Criar estados para acessar e-mail e senha
  const [email, setEmail] = useState('');
  /* const [senha, setSenha] = useState(''); */
  const [cpf, setCpf] = useState('');

  function handleLogin(props) {
    try {
      const user = {
        email,
        /* senha */
        cpf
      };
      setUser(user);
    /*   await AsyncStorage.setItem('USER', JSON.stringify(user)); */
    }catch(error){
      console.log(error)
    }

  }

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
      /* value={senha} */
      value={cpf}
      placeholder="Senha"
      autoCorrrect={false}
      autoComplete="off"
      contextMenuHidden="true"
      /* onChangeText={setSenha}  */
      onChangeText={setCpf}
      />

      <TouchableOpacity 
        style={styles.btnSubmit}
        onPress={() =>
        /* navigation.navigate('Home') */ handleLogin()}
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
