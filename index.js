import React, { Component, setState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Input from './Input';
import Button from './Button';

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  wrapper: {
    padding: 14,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
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

export default class LoginScreen extends React.Component {

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
  .createUserWithEmailAndPassword(email, password)
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
      <View style={style.wrapper}>
        <Text style={style.header}>Niterói Gás</Text>
        <View>
          <Input placeholder={'Email'} />
          <Input placeholder={'Senha'} secureTextEntry />
        </View>
        <View style={style.forgotContainer}>
          <TouchableOpacity>
            <Text style={style.btnTextForgot}>Esqueceu a Senha ?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={style.btnLogin}
        value={this.state.email}
        onChangeText={value => this.onChangeHandler('email',value)}
        >
          <Text style={[style.btnTextForgot, {color: 'white'}]}>Entrar</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', padding: 20}}>or</Text>
        <View style={style.ggBtn}>
          <Button
            title="Google"
            icon={require('../../assets/googleIcon.png')}
          />
          <Button
            title="Facebook"
            icon={require('../../assets/fbIcon.png')}
            color={'#4a6ea8'}
            textColor="#fff"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text>Ainda não é um membro,</Text>
          <TouchableOpacity >
            <Text style={[style.btnTextForgot, {color: 'red'}]}
            >Cadastro</Text>
          </TouchableOpacity>
        </View>
      </View>




      <View>
          { this.renderMessage() }
          </View>
    </SafeAreaView>
  );
};

}

export  class index extends React.Component{
  


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

          
          
          
      </SafeAreaView>
      )
  }
}
