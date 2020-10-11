import React from 'react'
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
//import firebaseConfig from './firebaseConfig'



var firebaseConfig = {
apiKey: 'AIzaSyC0MfRBvmCa7ZjDhn6lh633mgW4HPcpEmQ',
  authDomain: 'demonstracao-firebase-ap-ea625.firebaseapp.com',
    databaseURL: 'https://demonstracao-firebase-ap-ea625.firebaseio.com',
      projectId: 'demonstracao-firebase-ap-ea625',
        storageBucket: 'demonstracao-firebase-ap-ea625.appspot.com',
          messagingSenderId: '56689347197',
            appId: '1:56689347197:web:0490731f6916bd88c23f14'

          }




  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

  }

  // Initialize Firebase


const Firebase = {
  // auth
  loginWithEmail: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },
  signupWithEmail: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  },
  signOut: () => {
    return firebase.auth().signOut()
  },
  checkUserAuth: user => {
    return firebase.auth().onAuthStateChanged(user)
  },

  // firestore
  createNewUser: userData => {
    return firebase
      .firestore()
      .collection('users')
      .doc(`${userData.uid}`)
      .set(userData)
  }
}

export default Firebase
