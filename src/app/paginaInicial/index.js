import { createStackNavigator } from '@react-navigation/stack'
import { Avatar, Button } from 'react-native-paper'
import { View, StyleSheet, ScrollView, TextInput } from 'react-native'

import Noticias from './noticias'
import Jogos from './jogos'
import ProcurarJogadores from './procurarJogadores'
import DetalhesJogos from './jogos/detalhes'
import DetalhesNoticias from './noticias/detalhes'

function PaginaInicial({ navigation }) {

    return(
        <View style={estilos.container}>

            <ScrollView>
                
                <Noticias navigation={navigation}
                />
                
                <Jogos navigation={navigation} 
                />

                <ProcurarJogadores 
                />

            </ScrollView>
        
        </View>
    )
}

const Stack = createStackNavigator()

export default function App(){

    return(

        <Stack.Navigator>

            <Stack.Screen name="PaginaInicial" component={PaginaInicial} 
            options={{headerTitle: 'Página Inicial',
                    headerRight: ({ navigation }) => ( 
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 15}}>
                            <Avatar.Icon size={35} icon={'bell'} style={{backgroundColor: 'white', marginRight: 15}} />
                            <Avatar.Image rounded size={35} source={require('../../../assets/avatar.jpg')} />
                        </View>
                        ), 
                        headerTitle: '',
                        headerLeft: ({ navigation }) => (
                            <View style={{marginLeft: 20}}>
                                <Button 
                                mode='outlined' 
                                textColor='grey' 
                                icon={'magnify'}
                                onPress={() => navigation.navigate('PesquisarJogos')}>
                                    Pesquisar apps e jogos
                                </Button>
                            </View>
                        )
                    }}/>
            <Stack.Screen name="DetalhesJogos" component={DetalhesJogos} BackAction={true} 
            options={{headerRight: () => (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Avatar.Icon size={35} icon={'dots-vertical'} style={{backgroundColor: 'white', marginRight: 15}} />
                    <Avatar.Icon size={35} icon={'magnify'} style={{backgroundColor: 'white', marginRight: 15}} />
                </View>
            ), headerTitle: ''
            }}/>
            <Stack.Screen name="DetalhesNoticias" component={DetalhesNoticias} BackAction={true} />
            

        </Stack.Navigator>

    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    textinput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        paddingHorizontal: 15
      },
})