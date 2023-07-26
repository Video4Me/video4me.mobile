import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Pages
import Home from '../screens/home';
import Register from '../screens/register';
import Playlist from '../screens/playlist';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
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
