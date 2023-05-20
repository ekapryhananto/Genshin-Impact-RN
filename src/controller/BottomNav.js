import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Character from '../page/Character';
import Weapon from '../page/Weapon';
import Boss from '../page/Boss';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#ede4d9',
      }}>
      {state.routes.map((route, index, focused) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const LabelIcon = {
          Character: require('../assets/character.png'),
          Weapon: require('../assets/weapon.png'),
          Boss: require('../assets/boss.png'),
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center', marginVertical: 10}}>
            {/* <Icon
              name={LabelIcon[label]}
              size={22}
              color={isFocused ? COLORS.primary : 'silver'}
            /> */}
            <Image
              source={LabelIcon[label]}
              style={{
                height: 30,
                width: 30,
                tintColor: isFocused ? 'black' : 'silver',
              }}
            />
            <Text
              style={{
                color: isFocused ? 'black' : 'silver',
                fontWeight: 'bold',
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomNav = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Character" component={Character} />
      <Tab.Screen name="Weapon" component={Weapon} />
      <Tab.Screen name="Boss" component={Boss} />
    </Tab.Navigator>
  );
};

export default BottomNav;
