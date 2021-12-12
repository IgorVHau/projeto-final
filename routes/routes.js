import React, { useContext, useEffect } from "react";
import AppRoutes from "./app.routes";
import AppDrawerRoutes from "./app.drawer.routes";
import { AuthContext } from "../src/context/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Routes = () => {

    const {user, setUser} = useContext(AuthContext);

    /* useEffect(() => {
        const getUser = async () => {
            try {
                const value = await AsyncStorage.getItem('USER');
                console.log(value);
                if(value !== null) {
                    setUser(JSON.parse(value));
                }
            } catch (error) {
                console.log(error);
            }
        }
        getUser()
    }, []) */

    return (
        <>
            {/* <AppRoutes /> */}
            {user !== null ? <AppDrawerRoutes /> : <AppRoutes />}
        </>
    )
}

export default Routes