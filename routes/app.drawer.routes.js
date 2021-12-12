import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Home from "../src/Pages/Home/Home";
import Profile from "../src/Pages/Profile/Profile";
import { View } from "react-native-web";
import {MaterialIcons} from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function AppDrawerRoutes() {
    return (
        <Drawer.Navigator 
            /* screenOptions={{ headerShown: false, drawerPosition: 'left'}} */>
                <Drawer.Screen 
                    name= 'Profile' /* Profile */
                    component={Profile}
                />
                <Drawer.Screen
                 name='Home' 
                 component={Home}
                 />
        </Drawer.Navigator>
    )
}

