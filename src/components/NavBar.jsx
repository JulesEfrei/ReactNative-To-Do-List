import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const userImg = require("../../assets/user.png")

export default function NavBar() {

    return (

        <View style={styles.container}>

            <Image
                style={styles.userImage}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                }}
            />

            <View style={styles.iconsContainer}>
                <Text style={styles.iconUn}><Icon name="bell" size={23} color="#BDBDBD" /></Text>
                <Text style={styles.icon}><Icon name="dots-horizontal" size={23} color="#BDBDBD" /></Text>
            </View>

        </View>

    )

}

const styles = {
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
    },
    userImage: {
        width: 40,
        height: 40
    },
    iconsContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    iconUn: {
        marginRight: 20
    }
}