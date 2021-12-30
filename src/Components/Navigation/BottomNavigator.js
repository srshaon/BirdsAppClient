import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import AddBird from '../Screen/AddBird/AddBird';
import Birds from '../Screen/Birds/Birds';
import Feather from 'react-native-vector-icons/Feather';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const BottomNavigator = () => {
    const Tab = createMaterialBottomTabNavigator();


    return (
        <Tab.Navigator >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: () => <Feather name='home' size={24} color="black" />,



                }}
            />
            <Tab.Screen name="AddBird" component={AddBird}
                options={{
                    tabBarIcon: () => <AntDesign name='plus' size={24} color="black" />,


                }}
            />
            <Tab.Screen name="BirdList" component={Birds}
                options={{
                    tabBarIcon: () => <AntDesign name='appstore-o' size={24} color="black" />,


                }}
            />


        </Tab.Navigator>
    );
};

export default BottomNavigator;