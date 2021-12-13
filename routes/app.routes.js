import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../src/Pages/Home/Home";
import Cadastro from "../src/Pages/Cadastro/Cadastro";
import Login from "../src/Pages/Login"
import Cart from "./../src/Pages/Carrinho"


const Stack = createStackNavigator(); 

export default function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Login" component={Login} options={{ title: 'Sign In', cardShadowEnabled: 'true' }}/>
            <Stack.Screen name="Cart" component={Cart} options={{ title: 'Carrinho'}} />


        </Stack.Navigator>
    )
}