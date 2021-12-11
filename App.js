import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Pages/Home/Home';
import Login from './src/Pages/Login'
import AppRoutes from './routes/app.routes';


export default function App() {
  return (
    <>
        <AppRoutes />
    </>
);
}


