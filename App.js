import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        source={require('./src/assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>20 caracteres</Text>

      <View style={styles.area}>
          <Slider
            styles={{height: 80}}
            minimunValue={6}
            maximumValue={20}
            maximunTrackTintColor="#ff0000"
            minimunTrackTintColor="#000"
            thumbTintColor='#392de9'
          />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
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
      padding: 10,
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