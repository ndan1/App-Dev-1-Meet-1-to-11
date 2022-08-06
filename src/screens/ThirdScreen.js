import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const ThirdScreen = () => {
    return(
        <View style={{flex: 1,backgroundColor: 'mistyrose', flexDirection: 'column'}}>
            <View style={{flex: 1, backgroundColor:'red'}}>
                <Text style={{color: 'white'}}>
                    Pikachu
                </Text>
            </View>
            <View style={{flex: 1, backgroundColor: 'orange'}}>
                <Text style={{color: 'black'}}>
                    Flareon
                </Text>
            </View>
            <View style={{flex: 1, backgroundColor: 'yellow'}}>
                <Text style={{color: 'black'}}>
                    Rapidash
                </Text>
            </View>
        </View>
    )
};

const AddImage = () => {
    return (
        
        <View>
            <ScrollView horizontal={true}>
            <View style={{margin: 8, padding: 8, alignItems:'center', flexDirection: 'row'}}>
                <Image
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: 'green',
                        backgroundColor: 'aliceblue',
                        marginTop: 15
                    }}
                    source ={require('../../assets/images/pikachu.png')}
                    />
                    <Image
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: 'green',
                        backgroundColor: 'aliceblue',
                        marginTop: 20
                    }}
                    source ={require('../../assets/images/flareon.png')}
                    />
                    <Image
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: 'green',
                        backgroundColor: 'aliceblue',
                        marginTop: 20
                    }}
                    source ={require('../../assets/images/rapidash.png')}
                    />
                    <Image
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: 'green',
                        backgroundColor: 'aliceblue',
                        marginTop: 20
                    }}
                    source ={{uri:'https://i.ibb.co/bLz74hj/psyduck.png'}}
                    />
                    <Image
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: 'green',
                        backgroundColor: 'aliceblue',
                        marginTop: 20
                    }}
                    source ={{uri:'https://i.ibb.co/GQBLC7r/bulbasaur.png'}}
                    />
            </View>
            </ScrollView>
        </View>
        
    )
};

const ChallangeScreen = () => {
    return (
        <View>
            <View style={{alignItems: 'center', margin: 8}}>
                <Text style={{fontSize: 18, textDecorationLine:'underline', color: 'lightblue', fontWeight:'700'}}>Pokemons's Profile</Text>
            </View>
            <ScrollView>
                <View style={{ margin: 8,
                               padding: 8,
                               flexDirection: 'row'}}>
                    <ScrollView horizontal={true}>
                        <Image
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: 'green',
                                backgroundColor: 'aliceblue',
                            }}
                            source={require('../../assets/images/pikachu.png')}
                            />
                            <View style={{ marginLeft: 25,
                                           justifyContent: 'center'}}>
                                    <Text>
                                        Name : Pikachu
                                        {`\n`}
                                        Category : Mouse
                                        {`\n`}
                                        Abilities : Static
                                        {`\n`}
                                        Weaknesses : Ground
                                    </Text>
                            </View>
                    </ScrollView>
                </View>
                <View style={{ margin: 8,
                               padding: 8,
                               flexDirection: 'row'}}>
                    <ScrollView horizontal={true}>
                        <Image
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: 'green',
                                backgroundColor: 'aliceblue',
                            }}
                            source={require('../../assets/images/flareon.png')}
                            />
                            <View style={{ marginLeft: 25,
                                           justifyContent: 'center'}}>
                                    <Text>
                                        Name : Flareon
                                        {`\n`}
                                        Category : Flame
                                        {`\n`}
                                        Abilities : Flash Fire
                                        {`\n`}
                                        Weaknesses : Water, Ground, Rock
                                    </Text>
                            </View>
                    </ScrollView>
                </View>
                <View style={{ margin: 8,
                               padding: 8,
                               flexDirection: 'row'}}>
                    <ScrollView horizontal={true}>
                        <Image
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: 'green',
                                backgroundColor: 'aliceblue',
                            }}
                            source={require('../../assets/images/rapidash.png')}
                            />
                            <View style={{ marginLeft: 25,
                                           justifyContent: 'center'}}>
                                    <Text>
                                        Name : Rapidash
                                        {`\n`}
                                        Category : Fire Horse
                                        {`\n`}
                                        Abilities : Run Away, Flash Fire
                                        {`\n`}
                                        Weaknesses : Water, Ground, Rock
                                    </Text>
                            </View>
                    </ScrollView>
                </View>
                <View style={{ margin: 8,
                               padding: 8,
                               flexDirection: 'row'}}>
                    <ScrollView horizontal={true}>
                        <Image
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: 'green',
                                backgroundColor: 'aliceblue',
                            }}
                            source={{uri:'https://i.ibb.co/bLz74hj/psyduck.png'}}
                            />
                            <View style={{ marginLeft: 25,
                                           justifyContent: 'center'}}>
                                    <Text>
                                        Name : Psyduck
                                        {`\n`}
                                        Category : Duck
                                        {`\n`}
                                        Abilities : Dump, Cloud Nine
                                        {`\n`}
                                        Weaknesses : Grass, Electric
                                    </Text>
                            </View>
                    </ScrollView>
                </View>
                <View style={{ margin: 8,
                               padding: 8,
                               flexDirection: 'row'}}>
                    <ScrollView horizontal={true}>
                        <Image
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: 'green',
                                backgroundColor: 'aliceblue',
                            }}
                            source={{uri:'https://i.ibb.co/GQBLC7r/bulbasaur.png'}}
                            />
                            <View style={{ marginLeft: 25,
                                           justifyContent: 'center'}}>
                                    <Text>
                                        Name : bulbasaur
                                        {`\n`}
                                        Category : Seed
                                        {`\n`}
                                        Abilities : Overgrow
                                        {`\n`}
                                        Weaknesses : Fire, Psychic, Flying, Ice
                                    </Text>
                            </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default ThirdScreen;