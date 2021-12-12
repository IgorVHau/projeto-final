import React, { useContext } from "react";
import AppRoutes from "./app.routes";
import { AuthContext } from "../src/context/authContext";
import AppDrawerRoutes from "./app.drawer.routes";

const Routes = () => {

    const {user, setUser} = useContext(AuthContext);

    return (
        <>
            {/* <AppRoutes /> */}
            {user !== null ? <AppDrawerRoutes /> : <AppRoutes />}
        </>
    )
}

export default Routes