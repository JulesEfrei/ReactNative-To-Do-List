import { Text, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react"

export default function Loading() {

  const [getStarting, setGetStarting] = useState(false)
  const navigation = useNavigation();

  useEffect(() => {

        (async () => {

            console.log("First" + await AsyncStorage.getItem('started'))

            if(await AsyncStorage.getItem('started')) {

                setGetStarting(true)
                navigation.push("Home")
                console.log("State after condition" + getStarting)
                


            } else {

                await AsyncStorage.setItem('started', JSON.stringify(getStarting))

            }
        })()


    }, [])

    return (

        <SafeAreaView>
        

            <Text>Loading</Text>
        

        </SafeAreaView>

    )

}