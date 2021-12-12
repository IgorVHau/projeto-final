import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";

import Usuario from '../src/Pages/Usuario/Usuario';
import Home from '../src/Pages/Home/Home';

const Drawer = createDrawerNavigator();

export default function AppDrawerRoutes() {
    return (
        <Drawer.Navigator 
            screenOptions={{ drawerPosition: 'left'}}>
                <Drawer.Screen 
                    name= 'Usuario' 
                    component={Usuario}/>
                <Drawer.Screen
                    name= 'Home'
                    component={Home}
                />
        </Drawer.Navigator>
    )
}