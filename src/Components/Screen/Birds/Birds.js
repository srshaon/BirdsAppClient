import React, { useState, useEffect } from 'react';
import { View, ScrollView, FlatList, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Button } from 'react-native-elements/dist/buttons/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Birds = ({ navigation }) => {


    const [birds, setBirds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://serene-eyrie-02256.herokuapp.com/birdCollection')
            const birds = await response.json();
            setBirds(birds);
        }
        fetchData();
    }, [])

    //DELETE

    const DeleteBird = (id) => {


        const url = `https://serene-eyrie-02256.herokuapp.com/birdCollection/${id}`;
        console.log(url);
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const remaining = birds.filter(bird => bird._id !== id);
                    setBirds(remaining);
                }
            })

    }

    const renderBird = ({ item, index }) => {
        const { _id, image } = item;
        return (
            <View>

                <Card style={{ backgroundColor: "skyblue" }}>
                    {/* <CardImage
                        source={{ uri: 'http://placehold.it/480x270' }}
                        title="Above all i am here"
                    /> */}
                    <View>
                        <Text style={{ fontSize: 15 }}>  <Text style={{ fontSize: 20, color: "purple" }}>BirdName:</Text> {item.birdName}</Text>

                    </View>
                    <View>
                        <Image
                            source={{
                                uri: image,
                            }}
                            style={{ width: 400, height: 400 }}
                        />

                    </View>
                    <View >
                        <Text style={{ fontSize: 15 }}>  <Text style={{ fontSize: 20, color: "purple" }}>Country: </Text>{item.country}</Text>
                    </View>
                    <View >
                        <Text style={{ fontSize: 15 }}>  <Text style={{ fontSize: 20, color: "purple" }}>LifeSpan: </Text>{item.lifespan}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 15 }}>  <Text style={{ fontSize: 20, color: "purple" }}>Cage Breeding: </Text>{item.cageLife}</Text>
                    </View>
                    <CardAction
                    >
                        <CardButton

                            onPress={() => DeleteBird(_id)}
                            title="DELETE"
                            color="blue"
                        />

                    </CardAction>
                </Card>

            </View>
        )
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ backgroundColor: "gray", height: "100%" }}>
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("BottomNavigator")}

                        >

                            <Button
                                buttonStyle={{ backgroundColor: "skyblue", width: "60%", marginLeft: "15%" }}
                                icon={
                                    <AntDesign
                                        name="back"
                                        size={15}
                                        color="white"
                                    />
                                }
                                title=" Previous Page"

                            />




                        </TouchableOpacity>

                    </View>
                    <View>
                        <Text h1 style={{ marginTop: 30, fontSize: 30, marginLeft: 12, marginRight: 10, backgroundColor: "indigo", color: "white" }}>Birds Collection </Text>
                        <FlatList style={{ marginTop: 30, marginBottom: 10 }}
                            data={birds}
                            renderItem={renderBird}
                            keyExtractor={(item, index) => index.toString()}
                        />

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Birds;