import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const users = [
    {key: '01', name: 'Homem de Ferro'},
    {key: '02', name: 'Hulk'},
    {key: '03', name: 'Thor'},
    {key: '04', name: 'Capitão América'},
    {key: '05', name: 'Gavião Arqueiro'},
    {key: '06', name: 'Viúva Negra'},
    {key: '07', name: 'Pantera Negra'},
    {key: '08', name: 'Homem Aranha'},
    {key: '09', name: 'Homem formiga'},
    {key: '10', name: 'Feiticeira Escarlate'},
    {key: '11', name: 'Visão'},
    {key: '12', name: 'Capitã Marvel'},
]

export default function ListUsers() {
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Usuários</Text>
            <FlatList 
                data={users} /* lista com dados */
                renderItem={({item}) => <View style={styles.item}><Text style={styles.text}>Nome: {item.name}</Text></View>} /*  função que retorna uma chave para ser usada na indexação dos itens na lista */
                keyExtrator={item => item.key} /* função que retorna o componente para renderizar na lista */
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B0C4DE', 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25, 
    },

    title: {
        fontSize: 30,
        color: '#666666',
        fontWeight: '500',
        backgroundColor: '#B0C4DE', 
        padding: 10,

        marginVertical: 1,
        marginHorizontal: 2,
    },

    item: {
        backgroundColor: '#4682B4',
        padding: 15,
        marginVertical: 1,
        paddingLeft: 20,
        paddingRight: 80, 
    },

    text: {
        fontSize: 20,
        color: '#fff',
    },
})