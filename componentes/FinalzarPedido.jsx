import React, { useContext, useState, } from 'react';
import { View, Text, Image } from 'react-native';
import { Context } from './Context';


export default function FinalizarPedido() {

    const [isLoading, setLoading] = useState(true);
    const {data, setData} = useContext(Context)


    console.log(data)

    return (
        <View style={{flex: 1}}>
            <Image
                style={{ width: '100%', height: '20%' }}
                source={{ uri: data.image }}
            />

            <View style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, position: 'absolute', top: '16%', height: '83%', width: '100%', backgroundColor: 'white' }}>

                <View style={{ marginTop: 20, marginLeft: 20, height: '15%' }}>
                    <Text style={{ fontSize: 22 }}>
                        {data.name}
                    </Text>

                    <Text>
                        {data.type}, {data.distance}, {data.stars}
                    </Text>
                </View>
            </View>
        </View>
    )
}