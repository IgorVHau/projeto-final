import React, { useContext, useEffect, useState } from "react"
import {View, Text, Image, TouchableOpacity , ScrollView} from "react-native"
import { useNavigation } from "@react-navigation/native"

import api from "../../Service/api"
import styles from "./style"
import { AuthContext } from "../../context/authContext"

const Home = () => {

    const navigation = useNavigation();

    const [products, setProducts] = useState([])

    /*//Acessar o método setUsuario
    const {setUser} = useContext(AuthContext);

    //Acesso a requisição API (dados salvos no app)
    useEffect(() => {
    async function getList() {
      try {
        const response = await api.get("/produto")

      } catch(error) 

    }
    }, [])*/

    //Acessar o método setUsuário
    const { setUser } = useContext(AuthContext);

    //Acesso a requisição API (dados salvos no aplicativo)
    useEffect(() => {
      async function getList() {
        try {
          const response = await api.get(`/produto`);
          setProducts(response.data);

        } catch(error) {
          console.log(error);
        }
      }
        getList();
    }, [])

    /* useEffect(() => {
      api.get(`/produto`)
        .then(res => {
          const prod = res.data;
          setProducts(prod)
        })
    }, []) */

    return (
      <>
      <View>
        <TouchableOpacity 
        style={styles.logOut}
        onPress={async() => {setUser(null)}}>Sair</TouchableOpacity>
      </View>

      <ScrollView>
      
          {products.map(produto => (
            <View style={styles.container} key={produto.id}>
              <Image source={{uri: produto.fotoLink}} style={styles.imagem} />
              
              <View style={styles.cargocontainer}>
                <Text style={styles.nome}>{produto.nome}</Text>
                
                <View style={styles.idadecontainer}>
                  <Text style={styles.cargo}>{produto.descricao} </Text>

                  <Text style={styles.cargo}>{produto.qtdEstoque}</Text>
                </View>
                

                <TouchableOpacity style={styles.button}
                  onPress={() =>
                    navigation.navigate('Login', produto)}>
                      <Text>Perfil</Text>
                </TouchableOpacity>

              </View>
            </View>
          ))}
        </ScrollView>
      </>
    );
}

export default Home