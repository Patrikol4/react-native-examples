import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TouchableOpacity,Button,Alert, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  const handlePress = () => console.log('Voce pressionou');
  return (
    <SafeAreaView style={styles.container}>
      <Text>Boa-tarde</Text>
      <Button
        title="Clique aqui"
        onPress={() => 
          Alert.alert("Aviso um", "Tem certeza ?", [
            {text: "Sim", onPress: () => console.log("Sim" ) },
            {text: "Nao", onPress: () => console.log("Nao") }
          ])
        }
      />
      
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
