import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Usuario() {
    return (
        <View style={styles.background}>
            <Text>Usuário</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    }
})