import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import Slider from '@react-native-community/slider';
import { ModalPassword } from '../../components/modal';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';


export function Home() {

  const [size, setSize] = useState(6);
  const [passwordValue, setPasswordValue] = useState(''); //guardar senha gerada
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword() {

    let password = '';

    for(let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>

      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
          <Slider
            style={{height: 40}}
            minimumValue={6}
            maximumValue={20}
            maximumTrackTintColor='#ff0000'
            minimumTrackTintColor='#000'
            thumbTintColor='#392de9'
            value={size}
            onValueChange={(value) => setSize(Math.round(value))}
          />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      {/* modal visible vai ser true quando gerarmos uma senha */}
      <Modal visible={modalVisible} animationType='fade' transparent={true}> 
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false) }/>
        {/* passando a senha gerada para o modal */} 
      </Modal>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f3f3ff',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo: {
      marginBottom: 40,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    area: {
      width: '80%',
      backgroundColor: '#fff',
      padding: 12,
      borderRadius: 8,
      marginTop: 14,
    },
    button: {
      backgroundColor: '#392de9',
      padding: 15,
      width: '60%',
      marginTop: 20,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 15,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
});