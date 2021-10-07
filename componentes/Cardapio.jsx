import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, SafeAreaView } from 'react-native'


export default function Cardapio() {


    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [lanche, setLanche] = useState([])

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

    console.log(lanche.image)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Image
                style={{ width: '100%', height: '20%' }}
                source={{ uri: data.backgroundImage }}
            />
            <View style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, position: 'absolute', top: '16%', height: '100%', width: '100%', backgroundColor: 'white' }}>
                <View style={{ marginTop: 20, marginLeft: 20 }}>
                    <Text style={{ fontSize: 22 }}>
                        {data.name}
                    </Text>

                    <Text>
                        {data.type}, {data.distance}, {data.stars}
                    </Text>
                </View>

                <FlatList
                    data={data.combos}
                    renderItem={({ item }) => (
                        <View style={{paddingHorizontal:20, marginVertical: 5}}>
                            <Image
                                style={{height:100, width: 50}}
                                source={{ uri: item.image }}
                            />
                        </View>
                    )}
                />

            </View>
        </SafeAreaView>
    )

}