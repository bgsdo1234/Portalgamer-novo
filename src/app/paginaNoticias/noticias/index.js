import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native'
import { Card, Title } from 'react-native-paper'

export default function Noticias({ navigation }) {

  const [noticias, setNoticias] = useState([])

    const getNoticias = async () => {
        try{
            const resposta = await fetch(
                "https://639b4ea231877e43d6891936.mockapi.io/games"
            )
            const json = await resposta.json()
            setNoticias(json)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getNoticias()
    }, [])

  return(
    <ScrollView>

      <FlatList
      data={noticias}
      renderItem={({ item }) => (
      
        <View>

          <Card 
          style={estilos.Card}
          elevation={0}>

            <View style={estilos.CardContainer}>

              <Card.Cover  
              source={{ uri: item.ImagemNoticia }}
              style={estilos.imagemNoticia}
              />
              <Card 
              style={{width: 380, backgroundColor: '#dbeeff',}}
              elevation={0}
              onPress={() => navigation.navigate('DetalhesNoticias', {id: item.id})}>
                <Title
                style={{fontWeight: 'bold', marginTop: 30, marginLeft: 10}}
                >{item.NomeNoticia}</Title>
              </Card>
              <Title
              style={{marginTop: 32, marginLeft: 50, fontWeight: 'bold'}}
              >{item.DataDeLancamento}</Title>
              
            </View>

          </Card>

        </View>
        
        )} 
      />

    </ScrollView>
  )
}

const estilos = StyleSheet.create({
  Card: {
    marginVertical: 10,
    borderBottomWidth: 2,
    borderRadius: 0,
    paddingBottom: 20,
    borderColor: '#6587a6',
    backgroundColor: null
  },
  CardContainer: {
    flexDirection: 'row',
    backgroundColor: '#dbeeff',
    paddingVertical: 5,
    borderTopLeftRadius: 17,
    borderBottomLeftRadius: 17

  },
  imagemNoticia: {
    width: 65,
    height: 100
  }
})