import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StackRoutes from './NavigationRoutes';

import {Image, StyleSheet, View} from 'react-native';

import Register from '../screens/Register';
import Playlist from '../screens/Playlist';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        // Para remover o nome no header
        headerShown: false,
        // Para esconder a Tab bar quando for digitar algum texto
        tabBarHideOnKeyboard: true,
        //Para remover o nome na TabBar e deixar só o ícone
        tabBarShowLabel: false,
        //Para mudar a cor quando estiver ativa
        tabBarActiveTintColor: '#121212',
        tabBarStyle: {
          backgroundColor: '#177ABD',
          borderTopWidth: 0,
          elevation: 0, // Removemos a sombra do TabNavigator
          position: 'absolute', // Definimos a posição como absoluta para permitir a sobreposição
          bottom: 0,
          left: 0,
          right: 0,
          height: 72,
        },
      }}>
      <Tab.Screen
        name="Playlist"
        component={Playlist}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: focused ? 60 : 50,
                height: focused ? 60 : 50,
                padding: 20,
                borderRadius: 50,
                backgroundColor: focused ? '#0D4970' : '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: focused ? 26 : 13,
              }}>
              <Image
                source={require('../assets/img/playlist.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#fff' : '#1D9BF0',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="HomeTab"
        component={StackRoutes}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: focused ? 60 : 50,
                height: focused ? 60 : 50,
                padding: 20,
                borderRadius: 50,
                backgroundColor: focused ? '#0D4970' : '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: focused ? 26 : 13,
              }}>
              <Image
                source={require('../assets/img/house.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#fff' : '#1D9BF0',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: focused ? 60 : 50,
                height: focused ? 60 : 50,
                padding: 20,
                borderRadius: 50,
                backgroundColor: focused ? '#0D4970' : '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: focused ? 26 : 13,
              }}>
              <Image
                source={require('../assets/img/add.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#fff' : '#1D9BF0',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  button: {},
});
