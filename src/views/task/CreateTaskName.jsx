import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-toast-message'

export default function Name({ type }) {

    const [input, setInput] = useState("")

    const navigation = useNavigation();

    function check() {

        if(input != "" || type == "Description") {
            navigation.push(`CreateTask/${type == "Name" ? "Description": "Date"}`)
        } else {
            Toast.show({
                type: "error",
                text1: "Please enter a name"
            })
        }

    }

    return (

        <SafeAreaView style={styles.container}>


            <View style={styles.backContainer}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text><Icon name="left" size={23} color="black" /></Text>
                </TouchableOpacity>

            </View>

            <View style={styles.main}>

                <View style={[styles.titleContainer, { width: type == "Name" ? "55%": "70%" }]} >
                    <Text style={styles.title}>
                        {type == "Name" ? "Task's Name :" : "Task's Description"}
                    </Text>
                </View>

                <View style={styles.inputContainer}>
                    { type == "Name" && <Text style={styles.bind}>{input}</Text>}
                    <TextInput placeholder={type == "Name" ? "Task's Name :" : "Task's Description"} onChangeText={setInput} style={styles.input} />
                </View>

            </View>

            <View style={styles.addContainer}>
                <TouchableOpacity style={styles.buttonContainer} onPress={check}>
                    <Text style={styles.icon}><Icon name="arrowright" size={23} color="#FFF" /></Text>
                </TouchableOpacity>
            </View>

            <Toast />

        </SafeAreaView>

    )

}

const styles = {
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row"
    },
    backContainer: {
        marginTop: 10,
        marginLeft: 20
    },
    main: {
        alignSelf: "center",
        width: "90%"
    },
    titleContainer: {
        marginBottom: 50,
        borderBottomWidth: 7,
        borderColor: "#0A2CF3",
    },
    title: {
        fontSize: 30,
    },
    bind: {
        fontSize: 25,
        marginBottom: 20,
        width: "60%",
    },
    input: {
        fontSize: 15,
        paddingBottom: 5,
        paddingLeft: 5,
        borderBottomWidth: 2,
        borderColor: "black",
        width: "80%"
    },
    addContainer: {
        position: "absolute",
        bottom: 25,
        right: 20,
        padding: 10,
        backgroundColor: "#0A2CF3",
        borderRadius: 5
    },
}