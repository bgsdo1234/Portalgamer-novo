import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native'
import { Card, Title } from 'react-native-paper'

export default function jogos() {

    const [jogos, setJogos] = useState([])
    const [jogosFiltrados, setJogosFiltrados] = useState([]);
    const [generoFiltro, setGeneroFiltro] = useState('');

    const getJogos = async () => {
        try{
            const resposta = await fetch(
                'https://644bb0454bdbc0cc3a97ccbc.mockapi.io/Jogos'
            )
            const json = await resposta.json()
            setJogos(json)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getJogos()
    }, [])

    return(

        <View>

            <FlatList 
                data={jogos}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (

                    <Card
                    onPress={() => navigation.navigate('DetalhesJogos', {id: item.id})}
                    
                    style={estilos.card}
                    >
                            
                        <Card.Cover 
                        source={{ uri: item.logoDoJogo }}
                         style={estilos.logoDoJogo}
                        />

                        <Title
                        style={estilos.tituloDoJogo}
                        >
                            {item.nomeDoJogo}

                        </Title>

                    </Card>
                    
                )}
                
            />

        </View>
    )
}

const estilos = StyleSheet.create ({
    card: {
        height: 170,
        width: 140,
        marginHorizontal: 7,
        borderRadius: 15,
        marginTop: 20
    },
    logoDoJogo: {
        height:140,
        width: 140,
        borderRadius: 25   
    },
    tituloDoJogo: {
        fontSize: 20,
        flexDirection: 'row',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})