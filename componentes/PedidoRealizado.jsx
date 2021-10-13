import { NavigationRouteContext } from '@react-navigation/core';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default function PedidoRealizado({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between', padding: 30, backgroundColor: 'green' }}>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 24, color: 'white'}}>Pedido realizado com sucesso!</Text>
                <Text style={{color: 'white'}}>Seu pedido está sendo preparado e logo logo saíra para a entrega</Text>
            </View>

            <TouchableOpacity style={{ alignItems: 'center'}}
            onPress={() => { navigation.navigate('Cardapio')}}
            >
                <Text style={{fontSize: 20, color: 'white'}}>Voltar para o cardápio</Text>
            </TouchableOpacity>
        </View>
    )
}