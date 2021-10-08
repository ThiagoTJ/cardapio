import React, { useContext, useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { Context } from './Context';


export default function FinalizarPedido() {

    const [isLoading, setLoading] = useState(true);
    const {data, setData} = useContext(Context)

    const getMenu = async () => {
        try {
            const response = await fetch('https://615b13564a360f0017a8147e.mockapi.io/menu');
            const menu = await response.json();
            setData(menu[0]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMenu();
    }, []);

    console.log(data)

    return (
        <View>
            <Image
                style={{ width: '100%', height: '20%' }}
                source={{ uri: data.backgroundImage }}
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