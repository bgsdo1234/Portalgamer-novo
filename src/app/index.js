import * as React from 'react';
import { Text, View, Appbar } from 'react-native';
import { Icon, Avatar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PaginaInicial from './paginaInicial/index'
import PaginaJogos from './paginaJogos/index'
import PesquisarJogos from './pesquisarJogos/index'

  function Noticias() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  function Perfil() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();
  
  export default function BarraInferior() {
    return (
      <NavigationContainer >
        <Tab.Navigator>
          <Tab.Screen name="Pagina Inicial" component={PaginaInicial} options={{ title: 'Inicio', headerTransparent: true, headerShown: false }}/>
          <Tab.Screen name="Jogos" component={PaginaJogos} />
          <Tab.Screen name="Noticias" component={Noticias} />
          <Tab.Screen name="Perfil" component={Perfil} />
          <Tab.Screen name="PesquisarJogos" component={PesquisarJogos} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }