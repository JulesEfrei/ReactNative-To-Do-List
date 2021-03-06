import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DataProvider from "./src/context/DataProvider"

import Loading from "./src/views/Loading"
import Home from "./src/views/HomeScreen"
import GetStarting from "./src/views/GetStarting"
import CreateTaskName from "./src/views/task/CreateTaskName"
import CreateTaskDate from "./src/views/task/CreateTaskDate"



const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <DataProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Loading}>
        <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="GetStarting" component={GetStarting} options={{ headerShown: false }} />
        <Stack.Screen name="CreateTask/Name" options={{ headerShown: false }}>
          {(props) => <CreateTaskName {...props} type="Name" /> }
        </Stack.Screen>
        <Stack.Screen name="CreateTask/Description" options={{ headerShown: false }}>
          {(props) => <CreateTaskName {...props} type="Description" /> }
        </Stack.Screen>
        <Stack.Screen name="CreateTask/Date" component={CreateTaskDate} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </DataProvider>
  );
}

/*

  2 solution pour la création de tâches :

   1 => Le "plus" sur la Home page permet de créer une nouvelle tâche (-> Sous forme d'étape).
        Dans cette création, on assigne une catégorie à la tâche et donc, on créer une nouvelle catégorie si necéssaire ici

   2 => Le "plus" sur la Home page permet de créer une nouvelle catégorie. Puis, on créer un autre boutton pour créer une nouvelle tâche
        dans la catégorie

*/