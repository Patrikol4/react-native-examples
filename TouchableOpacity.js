import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  const handlePress = () => console.log('Voce pressionou');
  return (
    <SafeAreaView style={styles.container}>
      <Text>Boa-tarde</Text>
      <TouchableOpacity onPress={() => console.log('Voce apertou a imagem')}>
      <Image 
        blurRadius={2}
        fadeDuration={1000}
        source={{
        width: 200,
        height: 300,        
        uri: "https://picsum.photos/200/300"}}/>
      </TouchableOpacity>
      
      
    </SafeAreaView>
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
