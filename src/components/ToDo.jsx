import { useContext } from "react"
import { dataContext } from "../context/dataContext"

import { ScrollView, Text, TextComponent, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ToDo() {

    const { data, setData} = useContext(dataContext)

    const text = [
        "un",
        "eux",
        "euxy",
        "euxt",
        "euxr",
        "euxe",
        "euxz",
        "euxa",
        "euxs",
        "euxx",
        "e",
        "eu",
    ]


    function calcul(category) {
        
        return Math.floor((Object.values(data[category]).filter(elm => elm.checked == true).length / data[category].length) * 100)

    }
    
    return (
        
        <View style={{ height: 550 }}>

        <ScrollView contentContainerStyle={styles.scrollView}> 
        
        {Object.keys(data).map((elm, index) => (
            <TouchableOpacity key={`${elm}-${index}`} style={styles.buttonContainer}>
                 <View style={styles.topButton}>
                    <Text style={styles.topText}>{elm}</Text>
                    <TouchableOpacity style={styles.topIcon}><Icon name="dots-horizontal" size={23} color="#BDBDBD" /></TouchableOpacity>
                </View>
                <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, {width: calcul(elm) + "%" }]}></View>
                    <Text style={styles.progressBarLevel}>{ calcul(elm) }%</Text>
                </View>
            </TouchableOpacity>
        ))}

        </ScrollView>

        </View>

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
        height: 70,
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
        height: 5,
        borderRadius: 5,
        backgroundColor: "#9C6BCD"
    },
    test: {
        fontSize: 100
    },
    testdeux: {
        // height:  ( 200 / 100),
        width: '100%',
        borderWidth: 2,
        borderColor: "red",
        flex: 1
    }
}