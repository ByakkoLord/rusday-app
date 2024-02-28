import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

interface Props {
    visibility: string;

}

export default function CharacterEditor(props: Props) {
    if (props.visibility === 'none') {
        return null;
    }

    return (
        <View style={{ width: '100%', height: '100%', position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
            
        <View style={styles.container}>
            <Image
                style={{ width: 450, height: 400}}
                source={require(`../assets/characters/FuXuanSt.png`)}
            />

            
        </View>

            <ScrollView style={styles.dialogBox}>
                <Text style={styles.chName}>Fu Xuan</Text>
                <View style={{ width: '100%' , height: 2, backgroundColor: 'rgba(179, 122, 0, 0.5)', marginTop: 10 }}></View>
                <Text style={styles.textCh}>
                    Olá meu caro desbravador, eu sou Fu Xuan, a profetisa de Xianzhou, a que devo a sua visita?
                </Text>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 350,
        borderRadius: 300,
        backgroundColor: 'rgba(0, 0, 0, 0.79)',
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 30,
        color: 'white',
    },
    dialogBox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 250,
        backgroundColor: 'rgba(0, 0, 0, 0.43)',
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 30,
        color: 'white',
    },
    chName: {
        fontSize: 30,
        color: 'rgba(299, 122, 0, 1)',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    textCh: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
    }
});