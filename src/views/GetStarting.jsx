import { useState } from "react"
import { useNavigation } from '@react-navigation/native';
import { Text, Button, SafeAreaView, View, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function GetStarting({ state, setState }) {

    const navigation = useNavigation();

    return (

        <>

        <SafeAreaView style={styles.container}>

        <View style={styles.gradient}></View>


        <View style={styles.textContainer}>
            <Text style={styles.h}>Manage and prioritize your tasks easily</Text>

            <Text style={styles.p}>Increase your productivity by managing your personal and team tasks and do them based on the highest priority!</Text>

            <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>

        </SafeAreaView>

        </>
    )


}

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
    },
    gradient: {
        width: "100%",
        height: "70%",
    },
    textContainer: {
        width: "90%",
        display: "flex",
        alignItems: "center",
    },
    h: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 20
    },
    p: {
        textAlign: "center",
        color: "gray",
        marginBottom: 20
    },
    button: {
        backgroundColor: "#0A2CF3",
        width: "95%",
        paddingTop: 10,
        paddingBottom: 10,
        display: "flex",
        alignItems: "center"
    },
    buttonText: {
        color: "white"
    }
}