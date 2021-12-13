import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {StyleSheet, Text, View} from 'react-native';

import Cadastro from "../src/Pages/Cadastro/Cadastro";
import Login from "../src/Pages/Login"
import { CartProvider } from "../src/context/CartContext";
import { CartIcon } from "../src/Components/CartIcon";
import Cart from "../src/Pages/Carrinho/Cart";
import ProductsList from "../src/Pages/Home/Home";
import ProductDetails from "../src/Pages/DetalhesDoProduto/ProductDetails";


const Stack = createStackNavigator(); 

export default function AppRoutes() {
    return (
        <CartProvider>
          <NavigationContainer>
            <Stack.Navigator>

              <Stack.Screen
              name="Prodcuts"
              component={ProductsList}
              options={({navigation}) => ({
                title: 'Lista de Produtos',
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation} />,
              })}
            />

              <Stack.Screen 
              name="Cadastro" 
              component={Cadastro} 
            />

              <Stack.Screen 
              name="Login" 
              component={Login} 
              options={{ title: 'Sign In', cardShadowEnabled: 'true' }}/>
              
              <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={({navigation}) => ({
                title: 'Detalhes do Produto',
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation} />,
              })}
            />

              <Stack.Screen
              name="Cart"
              component={Cart}
              options={({navigation}) => ({
                title: 'Carrinho',
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation} />,
              })}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
      fontSize: 20,
    },
  });