import React from 'react';
import { View, Text } from 'react-native';
import {Icon} from 'react-native-elements';
import { ScrollView } from 'react-native';
import { Feed, Story } from '../components/InstagramComponents';
const InstagramHomeScreen = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text
                    style={{
                        fontFamily: 'StyleScript-Regular',
                        fontSize: 36,
                        marginLeft: 16,
                        color: 'black'
                    }}>
                    Instagram
                </Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 8
                }}>
                    <View style={{ margin:8 }}>
                        <Icon name='plus-square-o' type='font-awesome' size={26}/>
                    </View>
                    <View style={{ margin:8 }}>
                        <Icon name='heart-o' type='font-awesome' size={26}/>
                    </View>
                    <View style={{ margin:8 }}>
                        <Icon name='paper-plane-outline' type='ionicon' size={26}/>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={{flexDirection: 'row', margin: 8}}>
                    <ScrollView horizontal>
                        <Story
                            profile={require('../../assets/images/profilePicture1.png')}
                            username='adli'/>
                    </ScrollView>
                </View>
                <Feed
                    profile={require('../../assets/images/profilePicture1.png')}
                    username='adli'
                    post={{uri: 'https://wallpaperaccess.com/full/201215.jpg'}}/>
            </ScrollView>
        </View>
    )
};

export default InstagramHomeScreen;