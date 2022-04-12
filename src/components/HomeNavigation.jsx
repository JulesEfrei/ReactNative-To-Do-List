import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { useState } from "react"

import DataProvider from "../context/DataProvider"

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

    function switchView(index) {
        setIndex(index)
    }

    return (

        <DataProvider>
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

        
        </View>
        </DataProvider>

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
        marginBottom: 40,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "150%",
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
    }
}