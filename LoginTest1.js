import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import firebase from '@firebase/app'
import auth from '@firebase/auth'



export default class LoginPage extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  componentDidMount() {
     if (firebase.apps.length === 0) { 

      var firebaseConfig = {
      apiKey: "AIzaSyC0MfRBvmCa7ZjDhn6lh633mgW4HPcpEmQ",
      authDomain: "demonstracao-firebase-ap-ea625.firebaseapp.com",
      databaseURL: "https://demonstracao-firebase-ap-ea625.firebaseio.com",
      projectId: "demonstracao-firebase-ap-ea625",
      storageBucket: "demonstracao-firebase-ap-ea625.appspot.com",
      messagingSenderId: "56689347197",
      appId: "1:56689347197:web:0490731f6916bd88c23f14"
    }};

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase
    .auth()
    .signInWithEmailAndPassword('teste@teste.com', '123456')
    .then(user => {
      console.log('Usuario autenticado', user)
    })
    .catch(error => {
      console.log('usuario nao encontrado', error)
    })

  } 

  onChangeHandler(field, value){
    this.setState({
      [field]: value
    });

  }

  tryLogin() {
    console.log(this.state);
  }




  render() {
    return (
      <View>
        
          <Text>Login NiteroiGas</Text>
          <TextInput
          placeholder="E-mail de usuario"
          value={this.state.email}
          onChangeText={value => this.onChangeEmail(value)}/>
          <TextInput
          placeholder="Senha do usuario"
          secureTextEntry
          value={this.state.password}
          onChangeText={value => this.onChangePassword(value) }/>
      </View>
      )
  }
}
