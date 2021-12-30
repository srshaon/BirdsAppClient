import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { auth } from '../../firebase';
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'


const RegistrationScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('')
    const handleRegister = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user.email)
                console.log(user.password)

            })
            .catch(error => alert(error.message))

    }
    return (
        <ScrollView style={{ backgroundColor: "skyblue", height: "100%" }}>

            <Text style={{ fontSize: 30, marginTop: 80, backgroundColor: "purple", marginLeft: 50, color: "white", marginLeft: 10, marginRight: 5 }}>SIGNUP Your Account</Text>

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
                    secureTextEntry
                />


                <Button onPress={handleRegister}
                    buttonStyle={{ backgroundColor: "green" }}
                    title="Register"
                    icon={
                        <Entypo style={{ marginRight: 9 }}
                            name="add-user"
                            size={25}
                            color="black"
                        />
                    }
                />

            </View>






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

export default RegistrationScreen;