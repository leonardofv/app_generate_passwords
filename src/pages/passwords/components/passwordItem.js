import React, { useState } from "react";
import { Text, StyleSheet, Pressable, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export function PasswordItem({data, removePassword}) {

    const [isVisible, setIsVisible] = useState(false);

    function visibility() {
        setIsVisible(!isVisible);
    }

    return (
        <Pressable style={styles.container}>
            <Text style={styles.text}>{isVisible ? data : '**********'}</Text>
            <View style={styles.icons}>
                <Ionicons name={isVisible ? 'eye-off' : 'eye'} size={24} color={'#fff'} onPress={visibility} />
                <Ionicons name='trash' size={24} color={'#fff'} onPress={removePassword} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0e0e0e',
        padding: 14,
        width: '100%',
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: '#fff',
    },
    icons: {
        flexDirection: 'row',
        width: 80,
        justifyContent: 'space-between',
    },
})