import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loading from "./src/views/Loading"
import Home from "./src/views/HomeScreen"
import GetStarting from "./src/views/GetStarting"


const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Loading}>
        <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="GetStarting" component={GetStarting} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
