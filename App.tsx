import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import CharacterEditor from './components/CharacterEditor';
import {Button, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import * as Notifications from 'expo-notifications';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
})

export default function App() {
  
  const [hudVisible, setHudVisible] = useState(false)
  const [r0, setR0] = useState(30)
  const [rot0, setRot0] = useState('0deg')
  
  const handleHud = () => {
    setHudVisible(prevHudVisible => {
      if (prevHudVisible) {
        setRot0('0deg')
        setR0(30)
      } else {
        setRot0('45deg')
        setR0(100)
      }
      return !prevHudVisible;
    })
  }
  

  const handleCallNotification = async () => {
    const { status } = await Notifications.getPermissionsAsync();

      console.log('Notification permissions', status);
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'My first local notification',
          body: 'This is the body of the first notification',
          data: { data: 'goes here' },
        },
        trigger: {
          seconds: 1,
        },
      });
    }

    return (
      <View style={styles.container}>
        <Image
                style={{ width: '100%', height: '100%'}}
                source={require('./assets/backgrounds/Xianzhou1.jpg')}
    />
        <CharacterEditor visibility={'flex'} />
        <TouchableOpacity style={[styles.button, { bottom: 20, right: 30, zIndex: 100, transform: [{ rotate: rot0 }]  }]} onPress={handleHud}>
          <FontAwesomeIcon icon={faPlus} style={{color: 'white'}} size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { bottom: 20, right: r0  }]} >
          <FontAwesomeIcon icon={faPencil} style={{color: 'white'}} size={30} />
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 55,
    height: 55,
    backgroundColor: "red",
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    
  }
});
