import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
})

export default function App() {
  const handleCallNotification = async () => {
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      
        return;
      }
      console.log('Notification permissions', status);
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'My first local notification',
          body: 'This is the body of the first local notification',
          data: { data: 'goes here' },
        },
        trigger: {
          seconds: 5,
        },
      });
    }
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <TouchableOpacity style={styles.button} onPress={handleCallNotification}>
          <Text>Click Aqui</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    color: 'black',
    padding: 10,
  }
});
