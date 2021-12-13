// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

// import Routes from './routes/routes';
// import AuthProvider from './src/context/authContext';



// export default function App() {
//   /* const { setUser } = useContext(AuthContext); */

//   /* useEffect(() => {
//     const getUser = async () => {
//       try {
//         const value = await AsyncStorage.getItem('USER');
//         console.log(value);
//         if (value !== null) {
//           setUser(JSON.parse(value));
//         }
//       } catch (error) {
//           console.log(error);
//         }
//       }
//       getUser()
//   }, []) */
    
//   return (
//     <NavigationContainer>
//       <AuthProvider>
//         <Routes />
//       </AuthProvider>
//     </NavigationContainer>
//   );
// }


import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppRoutes from './routes/app.routes';
import Routes from "./routes/routes"
import AuthProvider from './src/context/authContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </>
  );
}

export default App;

