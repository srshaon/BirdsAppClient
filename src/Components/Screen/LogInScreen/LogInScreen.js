import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../../firebase';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import RegistrationScreen from '../RegistrationScreen/RegistrationScreen'



const LogInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("BottomNavigator")

            }
        })
        return unsubscribe

    }, [])
    const handleLogIn = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user.email)
            })
            .catch(error => alert(error.message))
    }
    return (
        <ScrollView style={{ backgroundColor: "white", height: "100%" }}>

            <Text style={{ fontSize: 30, marginTop: 50, backgroundColor: "skyblue" }}>SIGNIN YOUR ACCOUNT</Text>


            <View style={styles.container}>
                <TextInput style={styles.input}
                    placeholder='Enter your email'
                    leftIcon={{ type: 'ant-design', name: 'mail' }}
                    onChangeText={value => this.setState({ comment: value })}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />




                <TextInput style={styles.input}
                    placeholder="Enter your password"
                    leftIcon={{ type: 'ant-design', name: 'lock' }}
                    onChangeText={value => this.setState({ comment: value })}
                    value={password}
                    onChangeText={text => setPassword(text)}

                />
                <Button
                    onPress={handleLogIn}

                    buttonStyle={{ backgroundColor: "blue" }}
                    title="LogIn"
                    icon={
                        <AntDesign style={{ marginRight: 9 }}
                            name="login"
                            size={25}
                            color="red"
                        />
                    }
                />

            </View>


            <Button
                onPress={() => navigation.navigate("RegistrationScreen")}
                buttonStyle={{ backgroundColor: "purple", width: "100%", marginTop: 100 }}
                title="Register"
                icon={
                    <Entypo style={{ marginRight: 9 }}
                        name="arrow-bold-right"
                        size={25}
                        color="white"
                    />
                }
            />



        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        marginTop: 70,

    },
    input: {

        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default LogInScreen;