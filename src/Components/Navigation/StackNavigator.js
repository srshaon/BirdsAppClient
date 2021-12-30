import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LogInScreen from '../Screen/LogInScreen/LogInScreen';
import RegistrationScreen from '../Screen/RegistrationScreen/RegistrationScreen'
import BottomNavigator from '../Navigation/BottomNavigator';
import FlashScreen from '../../Flash/FlashScreen'
import Birds from '../Screen/Birds/Birds';
import HomeScreen from '../Screen/HomeScreen/HomeScreen'

const StackNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <View style={{ width: "100%", height: "100%" }}>
            <Stack.Navigator  >
                <Stack.Screen name="Welcome" component={FlashScreen}
                    options={{ headerMode: false }}
                />
                <Stack.Screen name="Birds" component={Birds} />

                <Stack.Screen name="LogInScreen" component={LogInScreen}
                    options={{ headerMode: false }}
                />
                <Stack.Screen name="Home" component={HomeScreen}
                    options={{ headerMode: false }}
                />
                <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
                <Stack.Screen name="BottomNavigator" component={BottomNavigator}
                    options={{ headerMode: false }}

                />

            </Stack.Navigator>
        </View>
    );
};

export default StackNavigator;