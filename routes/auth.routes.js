import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../src/Pages/Login";

const AuthStack = createStackNavigator();

const AuthRoute = () => {
    return (
        <AuthStack.Navigator> {/*headerShown: false se não quiser um header*/}
            <AuthStack.Screen name='Login' component={Login} />
        </AuthStack.Navigator>
    )
}

export default AuthRoute;