import { Text, Button, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import NavBar from "../components/NavBar"

export default function HomeScreen() {

    const navigation = useNavigation();

    async function clearStorage() {

        await AsyncStorage.setItem('started', JSON.stringify(true))
        navigation.push("GetStarting")

    }

    return (
        
        <>
        {/* <Button title="Clear Storage" onPress={clearStorage} /> */}


        <SafeAreaView>
        
            <NavBar />

        </SafeAreaView>

        </>

    )

}