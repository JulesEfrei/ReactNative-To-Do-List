import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { useState } from "react"
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ToDo from "./ToDo"
import DueSoon from "./DueSoon"

export default function HomeNavigation() {

    const nav = [
        "To-Do",
        "Due Soon",
        "In Review",
        "Completed"
    ]

    const [index, setIndex] = useState(0)

    const navigation = useNavigation();

    function switchView(index) {
        setIndex(index)
    }

    return (

        
        <View style={styles.container}>
        
            <Text style={styles.title}>My Tasks</Text>

            <ScrollView horizontal={true} contentContainerStyle={styles.navContainer} showsHorizontalScrollIndicator={false}>

                {nav.map((elm, i) => (
                    <TouchableOpacity onPress={() => switchView(i)} style={index == i && styles.active} key={i}>
                        <Text style={[styles.item, index == i && styles.active]}>{elm}</Text>
                    </TouchableOpacity>
                ))}

            </ScrollView>


            { index == 0 && (<ToDo />) }
            { index == 1 && (<DueSoon />) }

            <View style={styles.addContainer}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.push("CreateTask")}>
                    <Text style={styles.icon}><Icon name="plus" size={23} color="#FFF" /></Text>
                </TouchableOpacity>
            </View>

        
        </View>

    )

}

const styles = {
    container: {
        marginTop: 50,
    },
    title: {
        fontSize: 25,
        marginLeft: 20,
        marginBottom: 10,
    },
    navContainer: {
        borderBottomWidth: 1,
        borderColor: '#BDBDBD',
        marginTop: 20,
        marginBottom: 30,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "150%",
        height: 27,
        paddingLeft: 20,
        paddingRight: 20
    },
    item: {
        color: '#BDBDBD',
    },
    active: {
        color: "black",
        borderBottomWidth: 3,
        borderColor: "#0A2CF3",
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