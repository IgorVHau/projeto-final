import React, { useContext, useEffect, useState } from "react"
import {View, Text, Image, TouchableOpacity , ScrollView} from "react-native"
import { useNavigation } from "@react-navigation/native"

import api from "../../Service/api"
import styles from "./style"
import { AuthContext } from "../../context/authContext"
import ItemSeparator from "../../Components/ItemSeparator"

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
      

      <ScrollView>
      
        <View style={styles.container}>
          {products.map(produto => (
            
            <View style={styles.cardContainer} key={produto.id}>
              <Image source={{uri: produto.fotoLink}} style={styles.imagem} />
              
              <View style={styles.title}>
                <Text style={styles.nome}>{produto.nome}</Text>
                
                <View style={styles.desc}>
                  <Text style={styles.desc}>{produto.descricao} </Text>

                  <Text style={styles.price}>R${produto.valor}</Text>

                  <TouchableOpacity style={styles.button}
                  onPress={() =>
                    navigation.navigate("Cart", produto)}>
                      <Text>Add Carrinho</Text>
                </TouchableOpacity>

                </View>

              </View>
            </View>
            
          ))}
          </View>
          <ItemSeparator />
        </ScrollView>
      </>
    );
}

export default Home