import React from "react"
import { View, Text, StyleSheet, Pressable } from 'react-native'

export function PasswordItem({data, removePassword}) {
    return (
        <Pressable style={styles.container} onLongPress={removePassword} >
            <Text style={styles.password}>{data}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0e0e0e',
        padding: 14,
        width: '100%',
        marginBottom: 14,
    },
    password: {
        color: '#fff',
    },
})