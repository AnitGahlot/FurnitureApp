import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import {Home,itemDetail} from './screens';

const theme ={
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  }
};

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}
      initialRouteName={'Home'}>
       <Stack.Screen name="Home" component={Home}/>
       <Stack.Screen name="itemDetail" component={itemDetail}/>
  
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default App;