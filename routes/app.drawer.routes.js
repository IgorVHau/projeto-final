import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Usuario from '../src/Pages/Usuario/Usuario';

const Drawer = createDrawerNavigator();

export default function AppDrawerRoutes() {
    return (
        <Drawer.Navigator 
            screenOptions={{ headerShown: false, drawerPosition: 'left'}}>
                <Drawer.Screen 
                    name= 'Usuario' /* Profile */
                    component={Usuario}
                />
        </Drawer.Navigator>
    )
}