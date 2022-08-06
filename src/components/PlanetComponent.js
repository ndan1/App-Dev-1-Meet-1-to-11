import React from 'react';
import { View, Text, Image } from 'react-native';

export const PlanetComponent = (props) => {
    const {image, title, desc} = props;
    return (
        <View style={{flexDirection: 'row', 
                      backgroundColor: 'wheat', 
                      margin: 16, 
                      padding: 16, 
                      borderRadius: 20,
                      borderColor: 'green',
                      borderWidth: 1 }}>
            <Image
                style={{width: 100, height: 100}}
                source={image}/>
            <View style={{ flex: 1, margin: 8, justifyContent: 'center'}}>
                <Text style={{fontSize: 20, fontWeight:'bold'}}> {title} </Text>
                <Text>{desc}</Text>
            </View>
        </View>
        
    )
}