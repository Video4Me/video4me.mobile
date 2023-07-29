import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StackRoutes from './stackRoutes';

import {Image, StyleSheet, View} from 'react-native';

import Register from '../screens/register';
import Playlist from '../screens/playlist';

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
                width: 50,
                height: 50,
                padding: 20,
                borderRadius: 50,
                backgroundColor: focused ? '#0D4970' : '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={
                  focused
                    ? require('../assets/img/playlist.png')
                    : require('../assets/img/playlist.png')
                }
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
                width: 50,
                height: 50,
                padding: 20,
                borderRadius: 50,
                backgroundColor: focused ? '#0D4970' : '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={
                  focused
                    ? require('../assets/img/house.png')
                    : require('../assets/img/house.png')
                }
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
                width: 50,
                height: 50,
                padding: 20,
                borderRadius: 50,
                backgroundColor: focused ? '#0D4970' : '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={
                  focused
                    ? require('../assets/img/add.png')
                    : require('../assets/img/add.png')
                }
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
