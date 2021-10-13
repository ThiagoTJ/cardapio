import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'


export default function PedidoRealizado({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 50, backgroundColor: 'green' }}>
            <View style={{ alignItems: 'center', height: 230, justifyContent: 'space-evenly' }}>
                <Icon
                    color='white'
                    size={100}
                    name='check-circle'
                />
                <Text style={{ fontSize: 24, color: 'white' }}>Pedido realizado com sucesso!</Text>
                <Text style={{ color: 'white' }}>Seu pedido está sendo preparado e logo logo saíra para a entrega</Text>
            </View>

            <TouchableOpacity style={{ alignItems: 'center' }}
                onPress={() => { navigation.navigate('Cardapio') }}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>Voltar para o cardápio</Text>
            </TouchableOpacity>
        </View>
    )
}