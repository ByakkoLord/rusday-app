import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function characterEditor() {
    return (
        <View style={styles.container}>
            <Text>Character Editor</Text>
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
});