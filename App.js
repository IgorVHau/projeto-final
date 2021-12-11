import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Pages/Home/Home';
import Login from './src/Pages/Login'

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <Home/> */}
        <Login/>
     </NavigationContainer>
    </>
);
}


