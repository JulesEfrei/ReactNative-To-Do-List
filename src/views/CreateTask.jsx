import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Name from "./task/Name"
import Date from "./task/Date"

const StackTask = createNativeStackNavigator();

export default function CreateTask() {


    return (
    <NavigationContainer independent={true}>
      <StackTask.Navigator initialRouteName={Name}>
        <StackTask.Screen name="Name" component={Name} options={{ headerShown: false }} />
        <StackTask.Screen name="Date" component={Date} options={{ headerShown: false }} />
      </StackTask.Navigator>
    </NavigationContainer>
    )

}