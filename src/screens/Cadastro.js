import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import UserImage from '../../assets/images/user.png';

export default function Cadastro(props) {
  const { navigation } = props;

    return(
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image
        source={UserImage} 
       style={styles.logo}
      />
      <Text style={styles.text}>Cadastre-se</Text>
      <TextInput style={styles.input} placeholder='Digite seu nome' />
      <TextInput style={styles.input} placeholder='Digite seu sobrenome' />
      <TextInput style={styles.input} placeholder='Digite seu telefone' />
      <TextInput style={styles.input} placeholder='Digite seu email' />
      <TextInput style={styles.input} placeholder='Digite sua senha' secureTextEntry={true}/>

      <TouchableOpacity style={styles.btn} onPress={() => alert('Cadastrado com sucesso!')}>  
        <Text style={styles.textbtn}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity title='Ir para Login' onPress={() => navigation.navigate('Login')}>  
        <Text style={styles.text}>Já possui cadastro? Faça o Login</Text>
      </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#B0C4DE', 
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo : {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
 
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 15,
    borderRadius:10
  },

  text: {
    color: '#666666',
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },

  textbtn: {
    color: '#fff',
    fontSize: 20
  },

  btn: {
    backgroundColor: '#4682B4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
    width: 150,
    borderColor: 'white',
    color: '#fff',
    marginTop: 20
  },

});
