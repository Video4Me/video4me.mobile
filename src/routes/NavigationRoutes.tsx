import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Pages
import Home from '../screens/Home';
import Register from '../screens/Register';
import Playlist from '../screens/Playlist';

const Stack = createNativeStackNavigator();

export default function NavigationRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Playlist"
        component={Playlist}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
