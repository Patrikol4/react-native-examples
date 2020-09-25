import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Alert, SafeAreaView, TouchableOpacity } from 'react-native'


export default class LoginScreen extends React.Component {
  
  state={
    email: "",
    password: ""
  }


  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.logo}>Niteroi Gas</Text>
        <Text style={styles.subTitle}>Faça Login para continuar</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({ email: text })}
        />

      

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerBtn}>
        <Text style={styles.loginText}>Criar Conta</Text>
      </TouchableOpacity>



      </View>
    

      
      



    )
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 45,
    color: "#fb5b5a",
    marginBottom: 40
  },

  subTitle: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#fb5b5a",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  registerBtn:{
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  }


});

