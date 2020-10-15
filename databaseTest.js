import React, { Component } from 'react';
import {View, Text, SafeAreaView, TextInput, View, Image} from 'react-native';
import firebase from '@firebase/app';
import auth from '@firebase/auth';
import database from '@firebase/database';


export class databaseTest extends React.Component

writeUserData(email,fname,lname){
  firebase.database().ref('users/').push({
    
    email,
    nome,
  }).then((data)=>{
    console.tron.log('data ' , data)
  }).catch((error)=>{
    console.tron.log('error ' , error)
  })
}

// Lendo do Bando de Dados
readUserData() {
  firebase
    .database()
    .ref('Users/')
    .on('value', function (snapshot) {
      console.tron.log(snapshot.val())
    });
}

