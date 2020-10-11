import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


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



function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={style.btnTextForgot}>Bem-vindo</Text>
      <Text style={style.btnTextForgot}>Veja as opções disponíveis abaixo</Text>
    </View>
    <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}>
         
        <TouchableOpacity style={style.btnLogin}
        onPress={() => navigation.navigate('Usuarios')}
          >
        <Text style={[style.btnTextForgot, {color: 'white'}]}>Usuários</Text>
          </TouchableOpacity>
          </View>
          <View style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <TouchableOpacity style={style.btnLogin}
          onPress={() => navigation.navigate('Rotas')}
          >
          <Text style={[style.btnTextForgot, {color: 'white'}]}>Rotas</Text>

          </TouchableOpacity>
        </View>


      <View style={{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
      }}>
        <TouchableOpacity style={style.btnLogin}
          onPress={() => navigation.navigate('Pedidos')}
        >

          <Text style={[style.btnTextForgot, { color: 'white' }]}>Pedidos </Text>

        </TouchableOpacity>
      </View>



        <View style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <TouchableOpacity style={style.btnLogin}
          onPress={() => navigation.navigate('Sobre')}
          >
          
          <Text style={[style.btnTextForgot, {color: 'white'}]}>Sobre </Text>

          </TouchableOpacity>
          </View>

        


    </SafeAreaView>
  
  );
}

function DetailScreen (){
  return (
    <SafeAreaView style={style.container}>
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Veja mais sobre o nosso projeto e a nossa equipe</Text>
    </View>
    <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
         
          <TouchableOpacity>
        <Text style={[style.btnTextForgot, {color: 'red'}]}>Termos de uso</Text>
          </TouchableOpacity>
          </View>
          <View style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity>
          <Text style={[style.btnTextForgot, {color: 'red'}]}>Licenças </Text>
          </TouchableOpacity>
          </View>

          <View style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity>
          <Text style={[style.btnTextForgot, {color: 'red'}]}>Nosso site </Text>
          </TouchableOpacity>
          </View>

          <View style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity>
          <Text style={[style.btnTextForgot, {color: 'black'}]}>2020 - Todos os direitos reservados </Text>
          </TouchableOpacity>
          </View>

          


    </SafeAreaView>
  
  );
}

function UserScreen() {
  return (
    <SafeAreaView style={style.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tenha total controle sobre o fluxo de usuários.</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>

        <TouchableOpacity>
          <Text style={[style.btnTextForgot, { color: 'red' }]}>Todos os usuários</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
        <TouchableOpacity>
          <Text style={[style.btnTextForgot, { color: 'red' }]}>Criar Novo Usuário </Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
        <TouchableOpacity>
          <Text style={[style.btnTextForgot, { color: 'red' }]}>Deletar Usuários </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}

function PedidoScreen() {
  return (
    <SafeAreaView style={style.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tenha total controle sobre o fluxo de pedidos.</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>

        <TouchableOpacity>
          <Text style={[style.btnTextForgot, { color: 'red' }]}>Listar Pedidos</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
        <TouchableOpacity>
          <Text style={[style.btnTextForgot, { color: 'red' }]}>Pedidos Pendentes</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
        <TouchableOpacity>
          <Text style={[style.btnTextForgot, { color: 'red' }]}> Pedidos Cancelados</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
        <TouchableOpacity>
          <Text style={[style.btnTextForgot, { color: 'red' }]}> Pedidos em atraso</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>

  );
}

function RouteScreen() {

  return (
    <SafeAreaView style={style.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tenha total controle sobre o fluxo de rotas.</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>

        <TouchableOpacity>
          <Text style={[style.btnTextForgot, { color: 'red' }]}>Listar Rotas</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
        <TouchableOpacity>
          <Text style={[style.btnTextForgot, { color: 'red' }]}>Adicionar Rota</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
        <TouchableOpacity>
          <Text style={[style.btnTextForgot, { color: 'red' }]}> Remover Rota</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
        <TouchableOpacity>
          <Text style={[style.btnTextForgot, { color: 'red' }]}> Rotas de Risco</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>

  );  

}



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Painel Administrativo" component={HomeScreen} />
        <Stack.Screen name="Sobre" component={DetailScreen} />
        <Stack.Screen name="Usuarios" component={UserScreen}/>
        <Stack.Screen name="Pedidos" component={PedidoScreen}/>
        <Stack.Screen name="Rotas" component={RouteScreen}/>
      </Stack.Navigator>      
      
    </NavigationContainer>
  );
}
