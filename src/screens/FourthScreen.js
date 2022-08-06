import React from 'react';
import {View, Text, ImageBackground, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { InputComponent } from '../components/InputComponents';

const FourthScreen = () => {
    return (
    <ScrollView>
        <View style={{margin:16}}>
            <ImageBackground
                style={{
                    width: '100%',
                    height: 300,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    opacity: 0.5
                }}
                imageStyle={{borderRadius: 10}}
                source={{ uri: 'https://wallpaperaccess.com/full/250180.jpg'}}>
                <Text style={{
                    backgroundColor: 'mistyrose',
                    padding: 8,
                    margin: 8,
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'black'
                }}>
                    Disneyland
                </Text>
            </ImageBackground>
            
                <Text style={{ margin:12, marginBottom:12}}>
                    Description
                </Text>
                <TextInput
                    style={{padding: 10, borderWidth: 1, height: 140, fontSize: 16}}
                    placeholder="About the Place"
                    multiline={true}
                    keyboardType="default"/>
                <Text style={{ margin:12, marginBottom:12}}>
                    Phone Number
                </Text>
                <TextInput
                    style={{padding: 10, borderWidth: 1, height: 40, fontSize: 16}}
                    placeholder="Phone Number"
                    keyboardType="numeric"/>
                <InputComponent
                    title="Location"
                    height={40}
                    placeholder="Location"
                    multiline={true}
                    keyboardType="default"/>
            
        </View>
    </ScrollView>
    )
};

const ChallangeScreen = () => {
    return (
        <View style={{flex: 1}}>
            <ImageBackground
                style={{
                    flex:1,
                    justifyContent:'center',
                    
                }}
                imageStyle={{opacity: 0.3}}
                source={{uri: 'https://i.pinimg.com/736x/e4/28/c5/e428c5f6e045bcf567fa4267f7985076.jpg'}}>
            <View style={{alignItems:'flex-end'}}>
                <Text
                    style={{
                        fontWeight: '800',
                        fontSize: 16,
                        backgroundColor: 'lightpink',
                        padding: 10,
                        margin: 10,
                        color: 'black'
                    }}>
                        Colosseum
                    </Text>
                    
            </View>
            <View style={{ margin: 8, padding: 8}}>
                <InputComponent
                    title="Description"
                    height={140}
                    placeholder="About the Place"
                    multiline={true}
                    keyboardType="default"
                />
                <Icon
                        name='heart'
                        type='font-awesome'
                        size={24}
                        color='blue'/>
                <InputComponent
                    title="Phone Number"
                    height={40}
                    placeholder="Phone Number"
                    multiline={true}
                    keyboardType="numeric"
                />
                <InputComponent
                    title="Location"
                    height={40}
                    placeholder="Location"
                    multiline={true}
                    keyboardType="default"
                />
            </View>
            </ImageBackground>
        </View>
       
    )
};

// export default FourthScreen;
export default ChallangeScreen;