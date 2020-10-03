import React, { Component, setState } from 'react'
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  ActivityIndicator 
} from 'react-native'
import firebase from '@firebase/app'
import auth from '@firebase/auth'



export default class LoginPage extends React.Component {

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

    


    var firebaseConfig = {
      apiKey: "AIzaSyC0MfRBvmCa7ZjDhn6lh633mgW4HPcpEmQ",
      authDomain: "demonstracao-firebase-ap-ea625.firebaseapp.com",
      databaseURL: "https://demonstracao-firebase-ap-ea625.firebaseio.com",
      projectId: "demonstracao-firebase-ap-ea625",
      storageBucket: "demonstracao-firebase-ap-ea625.appspot.com",
      messagingSenderId: "56689347197",
      appId: "1:56689347197:web:0490731f6916bd88c23f14"
    }

      if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
    }
  };




  onChangeHandler(field, value){
    this.setState({
      [field]: value
    });

  }

  tryLogin() {
    this.setState({isLoading: true, message: ''})
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
      this.setState({ message: 'Sucesso'})
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
        return <ActivityIndicator/>


      return (
        <Button
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


  render() {
    return (
      <View>
        
          <Text>Login NiteroiGas</Text>
          <TextInput
          placeholder="E-mail de usuario"
          value={this.state.email}
          onChangeText={value => this.onChangeHandler('email',value)}/>
          <TextInput
          placeholder="Senha do usuario"
          secureTextEntry
          value={this.state.password}
          onChangeText={value => this.onChangeHandler('password',value) }/>

          { this.renderButton() } 
          { this.renderMessage() }

          <Text style={{ textAlign: 'center' }}>ou</Text>

          <Button title="Criar Conta"/>

          
      </View>
      )
  }
}
