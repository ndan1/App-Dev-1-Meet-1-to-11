import React from "react";
import { 
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { PlanetComponent } from "../components/PlanetComponent";

const SolarSystemScreen = () => {
    const clickedPlanet = (planet) => {
        if (planet === 'mercury') {
            alert ('You Choose Mercury');
        }

        else if (planet === 'venus') {
            alert ('You Choose Venus');
        }

        else if (planet === 'earth') {
            alert ('You Choose Earth');
        }
    }
    return (
        <View style={{flex:1}}>
            <View style={{padding: 16, alignItems: 'center'}}>
                <Text style={{fontSize: 30, fontFamily: 'serif', textDecorationLine: 'underline'}}>SOLAR SYSTEM</Text>
            </View>
        <ScrollView>
            {/* Mercury */}
            <TouchableOpacity onPress={() => clickedPlanet('mercury')}>
                <View style={{flexDirection: 'row', 
                            backgroundColor: 'wheat', 
                            margin: 16, 
                            padding: 16, 
                            borderRadius: 20,
                            borderColor: 'green',
                            borderWidth: 1  }}>
                    <Image 
                        style={{width: 100, height: 100}}
                        source={require('../../assets/images/mercury.png')}/>
                    
                    <View style={{ flex: 1, margin: 8, justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight:'bold'}}> Mercury </Text>
                        <Text> Mercury is the fastest planet, zipping around the sun every 88 earth days</Text>
                    </View>
                </View>
            </TouchableOpacity>
            {/* Venus */}
            <TouchableOpacity onPress={() => clickedPlanet('venus')}>
                <View style={{flexDirection: 'row', 
                            backgroundColor: 'wheat', 
                            margin: 16, 
                            padding: 16, 
                            borderRadius: 20,
                            borderColor: 'green',
                            borderWidth: 1  }}>
                    <Image 
                        style={{width: 100, height: 100}}
                        source={require('../../assets/images/venus.png')}/>
                    
                    <View style={{ flex: 1, margin: 8, justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight:'bold'}}> Venus </Text>
                        <Text> Venus spins slowly in the opposite direction from most planets</Text>
                    </View>
                </View>
            </TouchableOpacity>
            {/* Earth */}
            <TouchableOpacity onPress={() => clickedPlanet('earth')}>
                <View style={{flexDirection: 'row', 
                            backgroundColor: 'wheat', 
                            margin: 16, 
                            padding: 16, 
                            borderRadius: 20,
                            borderColor: 'green',
                            borderWidth: 1  }}>
                    <Image 
                        style={{width: 100, height: 100}}
                        source={require('../../assets/images/earth.png')}/>
                    
                    <View style={{ flex: 1, margin: 8, justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight:'bold'}}> Earth </Text>
                        <Text> Earth is the only place we know of so far that's inhabited by living things</Text>
                    </View>
                </View>
            </TouchableOpacity>
            {/* Mars */}
            <PlanetComponent
                image={require('../../assets/images/mars.png')}
                title='Mars'
                desc='Mars is a dusty, cold, desert world with a very thin atmosphere'/>

            {/* Jupiter */}
            <PlanetComponent
                image={require('../../assets/images/jupiter.png')}
                title='Jupiter'
                desc='Jupiter is more than twice as massive than the other planets of our solar system combined'/>
            
            {/* Saturn */}
            <PlanetComponent
                image={require('../../assets/images/saturn.png')}
                title='Saturn'
                desc='Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system'/>
            
            {/* Uranus */}
            <PlanetComponent
                image={require('../../assets/images/uranus.png')}
                title='Uranus'
                desc='Uranus rotates at a nearly 90-degree angle from the plane of its orbit'/>
            
            {/* Neptune */}
            <PlanetComponent
                image={require('../../assets/images/neptune.png')}
                title='Neptune'
                desc='Neptune is dark, cold, and whipped by supersonic winds'/>
        </ScrollView>
        </View>
    )
};

export default SolarSystemScreen;