import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Pages/Home/Home';
import Login from './src/Pages/Login'
import AppRoutes from './routes/app.routes';
import Routes from './routes/routes';
import AuthProvider from './src/context/authContext';
import AppDrawerRoutes from './routes/app.drawer.routes';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppDrawerRoutes/>
        {/*  <Routes /> */}
      </AuthProvider>
    </NavigationContainer>
  );
}


