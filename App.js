import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  // programaçao fica aqui
  const texto ='ola mundo';
  const [numero,setNumero]=useState(0);
  function incrementar(){
    let aux= numero;
    aux=aux+1
    setNumero(aux);
  }
  function decrementar(){
    let aux= numero;
    aux=aux-1
    setNumero(aux);
    if(aux < 0){
      aux =0;

    }
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>texto2</Text>
      <Text style={styles.textoVerde}>{texto}</Text>
      <Text style = {{fontSize: 50}}>{numero}</Text>
     
      <TouchableOpacity onPress={incrementar}>
        <Text>Aumentar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decrementar}>
        <Text>Reduzir</Text>
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
  textoVerde:{
    backgroundColor: 'verde'

  }
});
