import { useContext } from "react"
import { dataContext } from "../context/dataContext"

import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ToDo() {

    const { data, setData} = useContext(dataContext)
    
    return (
        
        <ScrollView contentContainerStyle={styles.scrollView} style={{ flexGrow: 1 }}>
        
        {Object.keys(data).map((elm, index) => (
            <TouchableOpacity key={`${elm}-${index}`} style={styles.buttonContainer}>
                <View style={styles.topButton}>
                    <Text style={styles.topText}>{elm}</Text>
                    <TouchableOpacity style={styles.topIcon}><Icon name="dots-horizontal" size={23} color="#BDBDBD" /></TouchableOpacity>
                </View>
                <View style={styles.progressBarContainer}>
                    <View style={styles.progressBar}></View>
                    <Text style={styles.progressBarLevel}>25%</Text>
                </View>
            </TouchableOpacity>
        ))}

        </ScrollView>

    )

}

const styles = {
    scrollView: {
        display: "flex",
        alignItems: "center",
        width: "100%",
    },
    buttonContainer: {
        width: "90%",
        backgroundColor: "white",
        display: "flex",
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 20,
        borderRadius: 7,
    },
    topButton: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    topText: {
        fontSize: 15,
        fontWeight: "bold"
    },
    progressBarContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    progressBarLevel: {
        fontSize: 15,
        color: "#BDBDBD",
    },
    progressBar: {
        width: "25%",
        height: 5,
        borderRadius: 5,
        backgroundColor: "#9C6BCD"
    }
}