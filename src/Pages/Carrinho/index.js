import React, {useState, useEffect} from "react"
import styles from "../Home/style"

import { View, Image, Text, ScrollView } from "react-native"



export default (props) => {

    const [cart, setCart] = useState([]) // verificar se o async for null comecar com [], caso contrario utilizar o q tem no async storage


    useEffect(() => {
      let cartTemp = JSON.parse(JSON.stringify(cart) || "[]")
      cartTemp.push({
         nome: props.route.params?.nome,
         fotoLink: props.route.params?.fotoLink,
         valor: props.route.params?.valor,
         id: props.route.params?.id
      })
        setCart(cartTemp)
    }, [])
    //criar async storage
    

    return (

        <ScrollView> 
         <View>
            {cart.map((produto) => {
              return(
              <View style={styles.container} key={produto.id}>
                <Image source={{uri: produto.fotoLink}} style={styles.imagem} />
                
                <View style={styles.cargocontainer}>
                  <Text style={styles.nome}>{produto.nome}</Text>
                   
                   <View style={styles.idadecontainer}>
                   <Text style={styles.cargo}>R${produto.valor}</Text>
    
                   </View>
                </View>
              </View>
              )
            })}
            </View>
          </ScrollView>
      );
    
}




