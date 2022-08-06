import React from 'react';
import { View, Text, Button } from 'react-native';

const FirstScreen = () => {
    const openAlert = () => {
        alert('You clicked the button!');
    };
    return (
        <View style={{
            flex: 1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text style={{ margin:16 }}>
                Hello <Text style={{ color:'red' }}>World</Text>!
            </Text>
            
            <Button title="This is button"
            onPress={openAlert}/>
            
        </View>
    )
};

const ChallangeScreen = () => {
    const openAlert = () => {
        alert('YOU ARE AWESOMEE!!!');
    };
    return (
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',

        }}>
            <Text style={{ color:'green',margin:10 }}>Let's Learn React Native Framework</Text>
            <Text style={{ margin:10}}>My Name is Michael</Text>
            <Text style={{ margin:10}}>Now I'm learning about <Text style={{ color:'lightblue' }}>React Native Components</Text> to build the user interface for android apps</Text>
            <Text style={{ color:'red',margin:10 }}>I Love Coding</Text>
            <Button title="Click Me" onPress={openAlert}/>
        </View>
    )
    
}


export default ChallangeScreen