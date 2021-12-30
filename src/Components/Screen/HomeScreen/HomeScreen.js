import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import { Button } from 'react-native-elements/dist/buttons/Button';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { auth } from '../../firebase';

const HomeScreen = ({ navigation }) => {

    const colors = ['tomato', 'thistle', 'skyblue', 'teal'];
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("LogInScreen")
            })
            .catch(error => alert(error.message))
    }

    return (
        <ScrollView style={styles.main}>

            <Button
                onPress={handleSignOut}

                buttonStyle={{ backgroundColor: "purple", marginTop: 100 }}
                title="LogOut"
                icon={
                    <AntDesign style={{ marginRight: 9 }}
                        name="logout"
                        size={25}
                        color="red"
                    />
                }
            />
            <View style={styles.container}>

                <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2} showPagination>
                    <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
                        <Image style={styles.image} source={require('../../../Images/image3.jpeg')} />
                        <Text style={{ marginBottom: 300, fontSize: 25, marginLeft: 20 }}>Birds Are Beauty Of Nature</Text>
                    </View>
                    <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
                        <Image style={styles.image} source={require('../../../Images/image4.jpeg')} />
                        <Text style={{ marginBottom: 300, fontSize: 25, marginLeft: 20 }}>Birds create a heavenly environment on earth</Text>
                    </View>
                    <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
                        <Image style={styles.image} source={require('../../../Images/image5.jpeg')} />
                        <Text style={{ marginBottom: 300, fontSize: 25, marginLeft: 20 }}>Not humans, but birds often witness the most beautiful mornings in this world!</Text>
                    </View>



                </SwiperFlatList>
            </View>



        </ScrollView >
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    main: {
        height: "100%",
        backgroundColor: "skyblue"

    },
    container: { flex: 1, backgroundColor: 'white', top: 15 },
    child: { width, justifyContent: 'center' },
    text: { fontSize: width * 0.5, textAlign: 'center' },

});

export default HomeScreen;