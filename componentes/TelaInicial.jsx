import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Context } from './Context';


export default function TelaInicial({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const { setData } = useContext(Context)

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

    return (
        <View style={{ flex: 1, }}>
            <Image
                style={{ width: '100%', height: '50%' }}
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/4a31/df28/620bddee89488b789430ff7a23a55e28?Expires=1635120000&Signature=BT6IOlw2k~IL5765n3jF18-8RBlNHw0c4mfC6UHun5kjAit--G-n-pHEd7wFqL9W7YGSQyzgotZXKvmNqcYIIwi0DLQR-9rLZUCaDC0sCqmVH0G8IGASAipKa5uKuR8JilKh-MGjFVqXOEVplazhCFqsmRrIDk6RcyBEtJA-hEjfugMhPLvdRBLpuDQnZk3QRkgGh5NH5qVrnL6i0UXjLRNRQSzTe-2-WjfH69yTq-vidA-WuDK4EoUsfypMjo5whvrbyR77MwUSzwkb-9v0GSe0DNipqIjegNlxHVECtxAfMcnJ8gALN45GnVVl4m8wLt6ab~5ge~ChNNsl9EAlfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
            />
            <View style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, position: 'absolute', top: '45%', height: '55%', width: '100%', backgroundColor: 'white', justifyContent: 'space-around' }}>
                <View style={{ width: '60%', alignSelf: 'center', justifyContent: 'space-evenly', height: 200 }}>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 34, fontWeight: 'bold' }}>Com fome?</Text>
                        <Text style={{ textAlign: 'center', fontSize: 18 }}>Nós resolvemos isso</Text>
                    </View>
                    <Text style={{ textAlign: 'center' }}>Faça seu pedido agora mesmo na IT Burguer e aproveite os descontos e vantagens de nossa plataforma</Text>
                </View>
                <TouchableOpacity
                    style={{ width: '90%', height: 50, borderRadius: 30, backgroundColor: 'red', justifyContent: 'center', alignSelf: 'center' }}
                    onPress={() => { navigation.navigate('Cardapio') }}
                >
                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>Ver Cardápio</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}