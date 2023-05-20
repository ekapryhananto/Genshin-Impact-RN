import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../page/Character';
import BottomNav from './BottomNav';
import DetailCharacter from '../page/DetailCharacter';
import DetailWeapon from '../page/DetailWeapon';
import DetailEnemie from '../page/DetailEnemie';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Character"
          component={BottomNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail Character"
          component={DetailCharacter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Weapon"
          component={DetailCharacter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail Weapon"
          component={DetailWeapon}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Boss"
          component={DetailCharacter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail Enemie"
          component={DetailEnemie}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
