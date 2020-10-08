import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView,View, StyleSheet, Text, TextInput, Button, ActivityIndicator, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
      isLoading: false,
      message: ''
    }
  }

  onChangeEmail(email) {
    this.setState({
      email
    })
  }

  onChangePassword(password) {
    this.setState({
      password
    })
  }

  componentDidMount() {

    // Initialize Firebase

    


    
  };




  onChangeHandler(field, value){
    this.setState({
      [field]: value
    });

  }

  tryLogin() {
    this.setState({isLoading: true, message: ''})
    const { email, password } = this.state;


      auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
      this.setState({ message: 'Sucesso'})
      console.log('Logado');
      })
      .catch(error => {
        this.setState({ message: this.getMessageByErrorCode(error.code) })
       
      })
      .then(() => this.setState({ isLoading: false }))
    }

    getMessageByErrorCode(errorCode) {
      switch (errorCode) {
        case "auth/wrong-password":
          return 'Senha Incorreta'
          // code...
          break;

      case "auth/user-not-found":
        return 'Usuario nao encontrado'
        break;
        
        default:
          return 'Erro desconhecido'
          
      }

    }
  

    renderButton(){
      if(this.state.isLoading)
        return (
        
        <Text>Carregando..</Text>);


      return (
        <Button style={style.btnLogin}
          title="Login"
          onPress={() => this.tryLogin()} />
      );

    }

    renderMessage(){
    const { message } = this.state;
    if(!message)
      return null

    return (
      <View>
        <Text>{message}</Text>
      </View>
      )

    }

    trySignUp(){
      this.setState({isLoading: true, message: ''})
      const { email, password } = this.state;

      auth()
  .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
      
    }

    renderBtnSign(){
      if(this.state.isLoading)
        return (
        
        <Text>Carregando..</Text>);


      return (
        <Button style={style.btnLogin}
          title="Criar Conta"
          onPress={() => this.trySignUp()} />
      );


    }


  render() {
    return (
      <SafeAreaView style={style.container}>
        <View>
          <Text style={{textAlign: 'center'}}>Faça Login para continuar</Text>
          <TextInput
          placeholder="E-mail de usuario"
          value={this.state.email}
          onChangeText={value => this.onChangeHandler('email',value)}/>
          <TextInput
          placeholder="Senha do usuario"
          secureTextEntry
          value={this.state.password}
          onChangeText={value => this.onChangeHandler('password',value) }/>
          </View>
       
          <View>
        <TouchableOpacity>
          <Text style={style.btnTextForgot}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
          </View>
          <TouchableOpacity>{ this.renderButton() }</TouchableOpacity> 
          <Text style={{ textAlign: 'center' }}>ou</Text>
          <TouchableOpacity>
          {this.renderBtnSign()}
          </TouchableOpacity>

          <View>
          { this.renderMessage() }
          </View>
          
          
      </SafeAreaView>
      )
  }
}


const style = StyleSheet.create({
  container: {
    flex: 3,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  wrapper: {
    padding: 14,
    justifyContent: 'center',
    backgroundColor: '#fff',
    
  },
  background: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    padding: '25%',
    marginHorizontal: 10,
    marginBottom: 5,
    marginLeft: 95,
    marginRight: 95,
    resizeMode: 'contain',
    
    
  
  },
  btnTextForgot: {
    fontWeight: 'bold',
           
  },
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 20,
  },
  btnLogin: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ggBtn: {
    flexDirection: 'row',
  },
});
