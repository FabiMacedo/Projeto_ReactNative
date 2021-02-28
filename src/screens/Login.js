import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import UserImage from '../../assets/images/user.png'; 

export default function Login(props) {
  const { navigation } = props;

    return(
      <View style={styles.container}>   
        <StatusBar style="auto" />

        <Image source={UserImage} style={styles.logo} />

        <Text style={styles.text}>Login</Text>
        <TextInput style={styles.input} placeholder='Digite seu email' keyboardType="email-address" maxLength={10} />
        <TextInput style={styles.input} placeholder='Digite sua senha' maxLength={10} secureTextEntry={true}/>

        <TouchableOpacity style={styles.btn} onPress={() => alert('Logado com sucesso!')}>  
          <Text style={styles.textbtn}>Logar</Text>
        </TouchableOpacity>

        <TouchableOpacity title='Ir para Cadastro' onPress={() => navigation.navigate('Cadastro')}>  
          <Text style={styles.text}>Ainda não possui cadastro? Clique aqui!</Text>
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
    color: 'white',
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

 