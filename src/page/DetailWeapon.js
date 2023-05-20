import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Back from 'react-native-vector-icons/dist/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {BASE_URL} from '../model/uri';
import axios from 'axios';

const DetailWeapon = ({navigation, route}) => {
  const [data, setData] = useState(null);
  var detailWeapon = route.params;

  useEffect(() => {
    console.log('daetail', detailWeapon);
    if (route.params) {
      axios
        .get(`${BASE_URL}/weapons/${detailWeapon}`, {
          headers: {
            'Content-Type': 'aplication/json',
          },
        })
        .then(response => {
          console.log('get data wep', response);
          setData(response.data);
          // setNation(data.nation);
        });
    }
  }, []);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#52586b', '#5d6375', '#696c82']}
        style={{height: '7%', alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{height: '100%', width: '12%', justifyContent: 'center'}}>
          <View
            style={{
              height: '70%',
              // width: '8%',
              backgroundColor: '#505469',
              borderRadius: 20,
              borderColor: '#7e8497',
              borderWidth: 3,
              alignItems: 'center',
              marginLeft: 15,
              justifyContent: 'center',
            }}>
            <Back name="back" size={20} color="#e9e7d5" />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            color: '#e9e7d5',
            fontSize: 18,
            fontWeight: 'bold',
            width: '80%',
            textAlign: 'center',
          }}>
          Detail Weapon
        </Text>
      </LinearGradient>

      <LinearGradient
        colors={['#8e839c', '#91849b', '#a891a2']}
        style={{height: '100%'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}>
          <View style={{width: '100%', height: 300}}>
            <Image
              source={{
                uri: `${BASE_URL}/weapons/${detailWeapon}/icon`,
              }}
              style={{height: 300, resizeMode: 'contain'}}
            />
          </View>
          {/* <Text>{data?.nation?.toLowerCase()}</Text> */}
          <View style={{paddingHorizontal: 15}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{color: '#4c444b', fontWeight: 'bold', fontSize: 26}}>
                {data?.name}
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={{marginLeft: 10}}>
                <Text style={{color: '#4c444b', fontWeight: 'bold'}}>
                  Name Passive:
                </Text>
                <Text style={{color: '#4c444b'}}>{data?.passiveName}</Text>
                <Text
                  style={{color: '#4c444b', fontWeight: 'bold', marginTop: 10}}>
                  Description Passive:
                </Text>
                <Text style={{color: '#4c444b'}}>{data?.passiveDesc}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default DetailWeapon;
