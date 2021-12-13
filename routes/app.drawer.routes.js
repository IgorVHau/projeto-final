import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Usuario from '../src/Pages/Usuario/Usuario';
import Profile from "../src/Pages/Profile/Profile";

const Drawer = createDrawerNavigator();

export default function AppDrawerRoutes() {
    return (
        <Drawer.Navigator 
            screenOptions={{ headerShown: true, drawerPosition: 'left'}}>
                <Drawer.Screen 
                    name= 'Profile'
                    component={Profile}
                />
        </Drawer.Navigator>
    )
}