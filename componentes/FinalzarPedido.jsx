import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';



export default function FinalizarPedido({ route, navigation }) {

    const { itemDesc, itemName, itemPrice, itemImg } = route.params;


    return (
        <View style={{ flex: 1 }}>
            <Image
                style={{ width: '100%', height: '20%' }}
                source={{ uri: `${itemImg}` }}
            />

            <View style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, position: 'absolute', top: '16%', height: '83%', width: '100%', backgroundColor: 'white', padding: '5%', justifyContent: 'space-between' }}>
                <View style={{ justifyContent: 'space-between' }}>
                    <View style={{ height: '15%', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 22 }}>
                            {itemName}
                        </Text>

                        <Text>
                            {itemDesc}
                        </Text>
                    </View>
                    <View style={{}}>
                        <View>
                            <Text style={{ color: 'grey', fontSize: 18 }}> Quantidade </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={{ width: 40, height: 50, borderTopLeftRadius: 15, borderBottomLeftRadius: 15, borderTopWidth: 1, borderBottomWidth: 1, borderLeftWidth: 1, borderColor: '#e5e4e2' }}
                            >
                                <Text style={{ textAlign: 'center', justifyContent: 'center', fontSize: 32, color: 'grey' }}>-</Text>
                            </TouchableOpacity>
                            <Text style={{ width: 30, height: 50, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#e5e4e2' }}> { } </Text>
                            <TouchableOpacity
                                style={{ width: 40, height: 50, borderTopRightRadius: 15, borderBottomRightRadius: 15, borderTopWidth: 1, borderBottomWidth: 1, borderRightWidth: 1, borderColor: '#e5e4e2' }}
                            >
                                <Text style={{ textAlign: 'center', justifyContent: 'center', fontSize: 32, color: 'red' }}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ color: 'grey', fontSize: 18 }}> Observações </Text>
                            <TextInput
                                style={{ borderWidth: 1, borderRadius: 15, borderColor: '#e5e4e2', padding: 10, height: 100 }}
                                placeholder={'Digite sua observação aqui'}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ height: 120, justifyContent: 'space-between' }}>
                    <View>
                        <Text>Total</Text>
                        <Text style={{ fontSize: 20, color: 'green' }}>R$ {itemPrice}</Text>
                    </View>
                    <TouchableOpacity
                        style={{ backgroundColor: 'red', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}
                        onPress={() => { navigation.navigate('PedidoRealizado') }}
                    >
                        <Text style={{ fontSize: 20, color: 'white' }}>Fazer pedido</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}