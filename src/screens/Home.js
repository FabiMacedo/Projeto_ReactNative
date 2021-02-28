import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../../assets/images/logo.jpg';
import { Entypo } from '@expo/vector-icons';

export default function Home(props) {
  const { navigation } = props;

  return(
    <ScrollView>
      <View style={styles.container}>

        <TouchableOpacity style={styles.btnIco} title="Open drawer" onPress={() => navigation.openDrawer()} >  
          <Entypo name="menu" size={30} color="black" />
        </TouchableOpacity>

         <Text style={styles.title}>Seja Bem Vindo ao App Avengers!</Text>

        <Image source={Logo} style={styles.logo} /> 

        <Text style={styles.paragraph}>Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.</Text>

        <TouchableOpacity title='Ir para Cadastro' onPress={() => navigation.navigate('Cadastro')}>  
          <Text style={styles.text}>Clique aqui para realizar o Cadastro!</Text>
        </TouchableOpacity>
        
        <TouchableOpacity title='Ir para Login' onPress={() => navigation.navigate('Login')}>  
          <Text style={styles.text}>Clique aqui para realizar o Login</Text>
        </TouchableOpacity>

        <TouchableOpacity title='Ir para Lista de Usuários' onPress={() => navigation.navigate('Lista de Usuários')}>  
          <Text style={styles.text}>Ir para Lista de Usuários</Text>
        </TouchableOpacity>

        <View style={styles.viewFooter}>
          <Text style={styles.footer}>&copy;Copyright - Todos os direitos reservados.</Text>
          <Text style={styles.footer}>Desenvolvido By Fabi Macedo - Recode Pro 2021.</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#B0C4DE', 
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnIco: {
    alignSelf: 'flex-start',
    borderRadius: 5,
    marginTop: 30,
    marginLeft: 20,
  },

  logo : {
    marginTop: 20,
    width: 330,
    height: 200,
  },

  title: {
    color: '#4F4F4F',
    fontSize: 20,
    marginTop: 20,
    fontWeight: '700',
    shadowColor: '#4F4F4F',
  },

  paragraph: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'justify',
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },

  text: {
    color: '#4682B4',
    fontSize: 18,
    marginTop: 30,
    fontWeight: 'bold',
  },

  viewFooter: {
    marginTop: 20,
  },

  footer: {
    color: '#4F4F4F',
    fontWeight: '500',
    textAlign: 'center',
  },

});

