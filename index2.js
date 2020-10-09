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






const LoginScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.wrapper}>
         <ImageBackground  source={todayImage} style={style.background}>
         </ImageBackground>
        <View>
          <Input placeholder={'Email'} />
          <Input placeholder={'Senha'} secureTextEntry />
        </View>
        <View style={style.forgotContainer}>
          <TouchableOpacity>
            <Text style={style.btnTextForgot}>Esqueceu a Senha ?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={style.btnLogin}>
          <Text style={[style.btnTextForgot, {color: 'white'}]}>Entrar</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', padding: 20}}>OU</Text>
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
          <Text>Ainda não é um membro  </Text>
          <TouchableOpacity>
            <Text style={[style.btnTextForgot, {color: 'red'}]}>Cadastro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
