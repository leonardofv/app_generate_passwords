import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

export function ModalPassword({password, handleClose}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>

                <Text style={styles.title}>Senha Gerada</Text>

                <Pressable style={styles.innerPassword}>
                    <Text style={styles.text}>{password}</Text> {/* senha gerada no app */}
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        backgroundColor: '#fff',
        width: '85%',
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 14,
    },
    innerPassword: {
        backgroundColor: '#0e0e0e',
        width: '100%',
        padding: 14,
        borderRadius: 8,

    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',

    },
    buttonArea: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        paddingTop: 10,
        paddingBottom: 10,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 10,

    },
    buttonSave: {
        backgroundColor: '#392de9',
        borderRadius: 8,
    },
    buttonSaveText: {
        color: '#fff',
        fontWeight: 'bold',
        
    },
    buttonText: {
        fontWeight: 'bold',
    },
})