import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { ScrollView } from 'react-native';
import { TextInput, SafeAreaView, StyleSheet, Text } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"

const AddBird = ({ navigation }) => {
    const [birdName, setBirdName] = useState("");
    const [country, setCountry] = useState("");
    const [lifespan, setLifespan] = useState("");
    const [cageLife, setCageLife] = useState("");
    const [image, setImage] = useState("")


    const AddBird = () => {

        const newBird = { birdName: birdName, country: country, lifespan: lifespan, cageLife: cageLife, image: image }
        console.log(newBird)
        fetch('https://serene-eyrie-02256.herokuapp.com/birdCollection', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBird)


        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the new bird.');

                    navigation.navigate("Birds")
                }



            })



    }
    return (
        <SafeAreaView style={{ backgroundColor: "skyblue", height: "100%" }}>
            <ScrollView>
                <Text h1 style={{ marginTop: 60, fontSize: 30, marginLeft: 12, backgroundColor: "skyblue", color: "white" }}>ADD NEW Bird </Text>
                <TextInput
                    style={styles.input}
                    value={birdName}
                    onChangeText={text => setBirdName(text)}
                    placeholder='BirdName'


                />
                <TextInput
                    style={styles.input1}
                    value={country}
                    onChangeText={text => setCountry(text)}
                    placeholder='Country'


                />
                <TextInput
                    style={styles.input1}
                    value={lifespan}
                    onChangeText={text => setLifespan(text)}
                    keyboardType='numeric'

                    placeholder='Lifespan'


                />
                <TextInput
                    style={styles.input1}
                    value={cageLife}
                    onChangeText={text => setCageLife(text)}

                    placeholder='Cage Breeding?(yes/No)'


                />
                <TextInput
                    style={styles.input1}
                    value={image}
                    onChangeText={text => setImage(text)}

                    placeholder='ImageURL'


                />

                <Button
                    onPress={AddBird}
                    buttonStyle={{ backgroundColor: "purple", borderRadius: 10 }}
                    icon={
                        <AntDesign style={{ marginRight: 9 }}
                            name="plus"
                            size={25}
                            color="white"
                        />
                    }
                    title="Add"
                />



            </ScrollView>
        </SafeAreaView>


    );
};


const styles = StyleSheet.create({
    input: {
        marginTop: 70,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    input1: {


        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default AddBird;
