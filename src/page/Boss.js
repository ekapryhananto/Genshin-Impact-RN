import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BASE_URL} from '../model/uri';
import axios from 'axios';

const Boss = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    axios
      .get(`${BASE_URL}/enemies`, {
        headers: {
          'Content-Type': 'aplication/json',
        },
      })
      .then(response => {
        console.log('res get data game', response);
        setData(response.data);
        console.log(data);
      })
      .catch(error => {
        console.log('error det data', error);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#cccccc'}}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail Enemie', item)}>
            <View
              style={{
                backgroundColor: '#ede4d9',
                flexDirection: 'row',
                padding: 20,
                marginVertical: 5,
                borderRadius: 20,
                marginHorizontal: 22,
                borderColor: '#d0bd93',
                borderWidth: 2,
                alignItems: 'center',
              }}>
              <Image
                source={{uri: `${BASE_URL}/enemies/${item}/icon`}}
                style={{height: 50, width: 50}}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 18,
                  marginLeft: 10,
                }}>
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Boss;
