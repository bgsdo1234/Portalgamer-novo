import { View, Image, StyleSheet, TextInput } from 'react-native'
import { Text, Avatar, Appbar } from 'react-native-paper'

export default function barraSuperior() {
    return(
        <View>

            <Appbar.Header>

                <Appbar.Content title="Página Inicial" />
                <Avatar.Image size={30} style={{marginLeft: 90}} />
                
            </Appbar.Header>

        </View>
    )
}

const estilos = StyleSheet.create({
    estiloBarraSuperior: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    pesquisar: {
        width: 150,
        borderWidth: 1
    },
    barraBuscar: {
        paddingRight: 35,
        borderRadius: 20
    }
}) 