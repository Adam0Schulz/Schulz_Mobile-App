import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from 'screens/Explore';
//import Explore from '@screens/Explore';

export type StackParams = {
  explore: {},
  detail: {}
}

const Stack = createNativeStackNavigator<StackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='explore'
      >
        {/* <Stack.Screen
          name='explore'
          component={Explore}
        /> */}
        <Stack.Screen
          name='detail'
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
