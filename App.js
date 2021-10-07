import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Cardapio from './componentes/Cardapio';
import { createStackNavigator } from '@react-navigation/stack';


// const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Cardapio/>
        {/* <Stack.Navigator>
          <Stack.Screen name='Cardapio' component={Cardapio}/>
        </Stack.Navigator> */}
      </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
