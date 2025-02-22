import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import useStorage from '../../hooks/useStorage';
import { PasswordItem } from './components/passwordItem';

export function Passwords() {
    const [listPasswords, setListPasswords] = useState([]);
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem('@pass');
            setListPasswords(passwords);
        }
        if (focused) {
            loadPasswords();
        }
    }, [focused]);

    async function deletePassword(item) {
        const passwords = await removeItem('@pass', item);
        setListPasswords(passwords);
    }

    return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor={'#392de9'}
                    barStyle={'light-content'}
                />
                <View style={styles.header}>
                    <Text style={styles.title}>Minhas Senhas</Text>
                </View>
                <View style={styles.content}>
                    <FlatList 
                        style={{ flex: 1, paddingTop: 14 }}
                        data={listPasswords}
                        keyExtractor={(item) => String(item)}
                        renderItem={({ item }) => <PasswordItem data={item} removePassword={() => deletePassword(item)} />}
                    />
                </View>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#392de9',
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
    },
});