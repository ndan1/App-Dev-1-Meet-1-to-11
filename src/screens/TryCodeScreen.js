import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { userData } from '../../data/TryCodeData';

const TryCodeScreen = () => {
    return (
        <View style={{ flex : 1}}>
            <FlatList
                contentContainerStyle={{ padding: 8}}
                data={userData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={
                                [
                                    style.container,
                                    {backgroundColor: 
                                        item.gender.toLowerCase() === 'male' ?
                                            'moccasin'
                                            :
                                            'lavender'
                                    }
                                ]
                        }>
                            <Image
                                source={{uri: item.imageLink }}
                                style={style.image}/>
                            <Text>{item.name}</Text>
                            <Text>{item.gender}</Text>
                            <Text>{item.age}</Text>
                            {
                                item.age>=6 && item.age <= 12 ?
                                <Text>
                                    Child
                                </Text>
                                :
                                item.age>=13 && item.age <=17 ?
                                <Text>
                                    Teen
                                </Text>
                                :
                                item.age>= 18 && item.age <=64 ?
                                <Text>
                                    Adult
                                </Text>
                                :
                                null
                            }
                        </View>
                    )
                }}/>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        margin:8,
        borderWidth: 1
    },
    image: {
        width: 100,
        height: 100
    }
});

export default TryCodeScreen;