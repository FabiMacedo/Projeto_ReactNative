import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import ListUsers from './src/screens/ListUsers';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Cadastro" component={Cadastro} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Lista de Usuários" component={ListUsers} />
      </Drawer.Navigator>
    </NavigationContainer>  
  );
}