import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image, ImageBackground
} from 'react-native';
import Input from './Input';
import Button from './Button';
import todayImage from '../../assets/logo.jpg'
import auth from '@react-native-firebase/auth'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';


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






export class LoginScreen extends React.Component {
  // Metodo construtor
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
      isLoading: false,
      message: ''
    }
  }
  // metodo onChangeEmail
  onChangeEmail(email) {
    this.setState({
      email
    })
  }
  // metodo   onChangePass
  onChangePassword(password) {
    this.setState({
      password
    })
  }

  // componentDidMount (caso precise no futuro)

  componentDidMount() {

    // Initialize Firebase

  };

  // onChangeHandler

  onChangeHandler(field, value){
    this.setState({
      [field]: value
    });

  }

  // trylogin

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

    // getMessageByErrorCode

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

    // renderButton (botao de login)

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

    // renderMessage

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
    // trySignUp

    trySignUp(){
      this.setState({isLoading: true, message: ''})
      const { email, password } = this.state;

      auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('Conta de usuario criada com sucesso!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('Esse email ja esta sendo utilizado!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('Esse endereco de email e invalido!');
    }

    console.error(error);
  });
      
    }



    // RenderBtnSign (renderizacao do botao de criar conta)
    renderBtnSign(){
      if(this.state.isLoading)
        return (
        
        <Text>Carregando..</Text>);


      return (
        <Button
          title="Criar Conta"
          onPress={() => this.trySignUp()} />
      );
    }
  
    // Processo de login com o google
    signIn = async () => {

      GoogleSignin.configure(

      );

      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        this.setState({ userInfo });
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          console.log('O usuario cancelou o login via google')
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          console.log('erro ao processar fluxo de login')
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          console.log('servicos do google play nao estao disponiveis ou estao desatualizados')
          // play services not available or outdated
        } else {
          console.log('erro desconhecido.')
          // some other error happened
        }
      }
    };

    // processo de logout com google

    signOut = async () => {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        this.setState({ user: null }); // Remember to remove the user from your app's state as well
      } catch (error) {
        console.error(error);
      }
    };




  
  render(){
  return (
    <SafeAreaView style={style.container}>
      <View style={style.wrapper}>
         <ImageBackground  source={todayImage} style={style.background}>
         </ImageBackground>
        <View>
          <Input placeholder={'Email'} 
          value={this.state.email}
          onChangeText={value => this.onChangeHandler('email',value)}
          />
          <Input placeholder={'Senha'} secureTextEntry 
          value={this.state.password}
          onChangeText={value => this.onChangeHandler('password',value) }
          />
        </View>
        <View style={style.forgotContainer}>
          <TouchableOpacity>
            <Text style={style.btnTextForgot}>Esqueceu a Senha ?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={style.btnLogin}>
  <Text>{this.renderButton()}</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', padding: 20}}>OU</Text>
        <View style={style.ggBtn}>
          
        <GoogleSigninButton
            style={{ height: 50, width: 230 }}
            size={GoogleSigninButton.Size.Standard}
            icon={require('../../assets/googleIcon.png')}
            color={GoogleSigninButton.Color.Dark}
            onPress={this._signIn}
            disabled={this.state.isSigninInProgress} />
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
          <Text>Ainda não é um membro ? </Text>
          <TouchableOpacity>
        <Text style={[style.btnTextForgot, {color: 'red'}]}>{this.renderBtnSign()}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignContent: 'center', textAlign: 'center'}}>{this.renderMessage()}</View>
      </View>


      <View>
        
      </View>
    </SafeAreaView>
  );
};}

export default LoginScreen;
