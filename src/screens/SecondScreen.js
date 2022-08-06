import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
const SecondScreen = () => {
    const openAlert = (game) => {
        if (game === 'mobilelegends'){
        alert('You Choose Mobile Legends!');
        }
        else if (game==='pubg'){
            alert('You Choose PUBG!');
        }
    }
    return (
        <View style={{flex: 1, backgroundColor: 'lavender', alignItems: 'center', justifyContent:'center'}}>
            <View style={{ backgroundColor: 'skyblue', margin: 10, padding: 10, borderStyle:'dashed', borderRadius:10, borderWidth:2}}>
                
                <Text style={{textAlign:'center', color:'black', fontSize:16, fontFamily:'serif'}}>
                    Mobile Legends
                </Text>
                <Text >Mobile Legends is a multiplayer online battle arena MOBA game. The two
                        opposing teams fight to reach and destroy the enemy's base while defending
                        their own base for control of a path.
                </Text>
                
            </View>
            <View>
                <TouchableOpacity
                            style={{
                                backgroundColor: 'white',
                                padding : 8,
                                margin: 8,
                                borderRadius: 50,
                                borderWidth: 2,
                            }}
                            onPress={() => openAlert('mobilelegends')}>
                            <Text style={{ color: 'lightcoral'}}>
                                Mobile Legends Button
                            </Text>
                </TouchableOpacity>
                </View>
            <View style={{backgroundColor: 'cornflowerblue' , margin: 10, padding: 10, borderStyle:'dotted',  borderRadius:10, borderWidth:2}}>
                <Text style={{textAlign:'center', color:'black', fontSize:16, fontFamily:'serif'}}>
                    PUBG
                </Text>
                <Text>
                PlayerUnknown's Battlegrounds, better known as PUBG, is a multiplayer battle royale
                game in which players drop onto an island and fight to be the last one left standing.
                </Text>
            </View>
            <View>
                <TouchableOpacity
                            style={{
                                backgroundColor: 'white',
                                padding : 8,
                                margin: 8,
                                borderRadius: 50,
                                borderWidth: 2,
                            }}
                            onPress={() => openAlert('pubg')}>
                            <Text style={{ color: 'lightcoral'}}>
                                PUBG Button
                            </Text>
                </TouchableOpacity>
                </View>
        </View>
        )
    };

const ChallangeScreen = () => {
    return (
        <View style={{
            flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgray'
        }}>
            <View style={{margin: 20}}>
                <Text style={{color: 'blue', textDecorationLine: 'underline', fontSize: 18}}> IOS </Text>
            </View>
            <View style={{borderWidth: 2, borderColor: 'black', borderStyle: 'dotted', borderRadius: 20,padding: 5, margin: 5, backgroundColor: 'lightsalmon'}}>
                <Text style={{color: 'black', fontWeight: '500', padding: 2}}>
                    iOS (formerly iPhone OS) is a mobile operating
                    system created and developed by <Text style={{color: 'darkred', fontStyle:'italic'}}>Apple Inc.</Text>
                    exclusively for its hardware. It is the operating
                    system that powers many of the company's mobile
                    devices, including the iPhone and iPod Touch.
                </Text>
            </View>
            <View style={{margin: 20}}>
                <Text style={{color: 'black', fontSize: 16}}>
                    VS.
                </Text>
            </View>
            <View style={{margin: 20}}>
                <Text style={{color: 'green', textDecorationLine: 'underline', fontSize: 18}}>
                    Android
                </Text>
            </View>
            <View style={{borderWidth: 2, borderColor: 'black', borderStyle: 'dotted', borderRadius: 20,padding: 5, margin: 5, backgroundColor: 'pink'}}>
                <Text style={{color: 'black', fontWeight: '500', padding: 2}}>
                        <Text style={{fontWeight:'900'}}>Android</Text> is a mobile operating system based on a
                        modified version of the Linux kernel and other open
                        source software, designed primarily for
                        touchscreen mobile devices such as smartphones and
                        tablets. Android is developed by a consortium of
                        developers known as the <Text style={{color: 'purple', fontStyle:'italic'}}>Open Handset Alliance</Text> and
                        commercially sponsored by <Text style={{color: 'blue', fontStyle:'italic'}}>Google</Text>.
                </Text>
            </View>
        </View>

    )
};
const ChallengeScreen = () => {
    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center'
        }}>
            <View>
                <Text>
                    iOS
                </Text>
            </View>
            <View>
                <Text>
                    iOS (formerly iPhone OS) is a mobile operating
                    system created and developed by Apple Inc.
                    exclusively for its hardware. It is the operating
                    system that powers many of the company's mobile
                    devices, including the iPhone and iPod Touch.
    
                </Text>
            </View>
            <View>
                <Text>
                    VS.
                </Text>
            </View>
            <View>
                <Text>
                    Android
                </Text>
            </View>
            <View>
                <Text>
                    Android is a mobile operating system based on a
                    modified version of the Linux kernel and other open
                    source software, designed primarily for
                    touchscreen mobile devices such as smartphones and
                    tablets. Android is developed by a consortium of
                    developers known as the Open Handset Alliance and
                    commercially sponsored by Google.
                </Text>
            </View>
        </View>
    )
};
export default ChallangeScreen;