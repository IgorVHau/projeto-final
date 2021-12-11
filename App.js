<<<<<<< HEAD
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Pages/Home/Home';
import Login from './src/Pages/Login'
=======
import * as React from 'react';
import AppRoutes from './routes/app.routes';
>>>>>>> 78c6e2ed23ba2ecdf86edb187c16788a38c39257

export default function App() {
  return (
    <>
<<<<<<< HEAD
      <NavigationContainer>
        {/* <Home/> */}
        <Login/>
     </NavigationContainer>
=======
        <AppRoutes />
>>>>>>> 78c6e2ed23ba2ecdf86edb187c16788a38c39257
    </>
);
}


