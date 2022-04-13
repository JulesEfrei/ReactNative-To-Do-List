import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';

export default function Name() {

    const [input, setInput] = useState("")

    const navigation = useNavigation();

    function check() {

        if(input != "") {
            navigation.push("Date")
        } else {
            console.log("Impossible")
        }

    }

    return (

        <SafeAreaView style={styles.container}>


            <View style={styles.backContainer}>

                <TouchableOpacity onPress={() => navigation.push("Home")}>
                    <Text><Icon name="left" size={23} color="black" /></Text>
                </TouchableOpacity>

            </View>

            <View style={styles.main}>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Task Name :</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.bind}>{input}</Text>
                    <TextInput placeholder="Task's Name" onChangeText={setInput} style={styles.input} />
                </View>

            </View>

            <View style={styles.addContainer}>
                <TouchableOpacity style={styles.buttonContainer} onPress={check}>
                    <Text style={styles.icon}><Icon name="arrowright" size={23} color="#FFF" /></Text>
                </TouchableOpacity>
            </View>


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
        width: "45%",
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