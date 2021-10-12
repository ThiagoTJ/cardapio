import React, {useState} from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Context} from './componentes/Context'
import Cardapio from './componentes/Cardapio';
import FinalizarPedido from './componentes/FinalzarPedido';
import TelaInicial from './componentes/TelaInicial';


const Stack = createStackNavigator();

export default function App() {

  const [data, setData] = useState([]);
  
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Context.Provider value={{data, setData}}>
        <Stack.Navigator initialRouteName='TelaInicial' screenOptions={{headerShown: false}}>
          <Stack.Screen name='TelaInicial' component={TelaInicial} />
          <Stack.Screen name='Cardapio' component={Cardapio} />
          <Stack.Screen name='FinalizarPedido' component={FinalizarPedido} />
        </Stack.Navigator>
        </Context.Provider>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
