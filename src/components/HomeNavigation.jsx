import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { useState } from "react"

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

        <View style={styles.container}>
        
            <Text style={styles.title}>My Tasks</Text>

            <ScrollView horizontal={true} style={styles.navContainer} showsHorizontalScrollIndicator={false}>

                {nav.map((elm, i) => (
                    <TouchableOpacity onPress={() => switchView(i)} key={i}>
                        <Text style={[styles.item, index == i && styles.active]}>{elm}</Text>
                    </TouchableOpacity>
                ))}

            </ScrollView>


            { index == 0 && (<Text>TO DO LIST</Text>) }
            { index == 1 && (<Text>DUE SOON</Text>) }

        
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
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 40,
    },
    item: {
        width: 150,
        paddingLeft: 10,
        color: '#BDBDBD'
    },
    active: {
        color: "black",
        borderBottomWidth: 10,
        borderColor: "#0A2CF3"
    }
}