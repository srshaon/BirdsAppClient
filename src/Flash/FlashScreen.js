import { useNavigation } from '@react-navigation/native';
import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, ScrollView } from 'react-native';
import { ImageBackground } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo'

const FadeInView = (props) => {

    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    const navigation = useNavigation();

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 5000,
            }
        ).start();
    }, [fadeAnim])
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("LogInScreen")

        }, 5000);
    }, [])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
    const navigation = useNavigation();
    return (


        <FadeInView style={{ width: "100%", height: "100%", backgroundColor: 'powderblue' }}>
            <ImageBackground style={{ width: "100%", height: "90%", resizwMode: "stretch" }} source={require('../Images/image3.jpg')} />
            <View >
                <Button
                    buttonStyle={{ fontsize: 30, }}
                    onPress={() => navigation.navigate("BottomNavigator")}
                    title="NEXT"
                    icon={
                        <Entypo style={{ marginRight: 9 }}
                            name="arrow-bold-right"
                            size={25}
                            color="purple"
                        />
                    }
                />
            </View>
        </FadeInView>



    )
}