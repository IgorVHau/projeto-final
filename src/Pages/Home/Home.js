import React, { useEffect, useState } from "react"
import {View, Text, Image, TouchableOpacity , ScrollView} from "react-native"
import { useNavigation } from "@react-navigation/native"

import api from "../../Service/api"
import styles from "./style"

const Home = () => {

  const navigation = useNavigation();

  const [products, setProducts] = useState([])

    useEffect(() => {
      api.get(`/produto`)
        .then(res => {
          const prod = res.data;
          setProducts(prod)
        })
    }, [])

    return (
      <>

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