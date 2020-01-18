import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import observableStore from './Usingmob'
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import ImagePickerExample from './UseImage'
import CameraExample from './UseCamera'
import UseCamerMod from './UseCamerMod'
import { Dropdown } from 'react-native-material-dropdown';
import Feed1 from './Feed1'
import * as firebase from "firebase";

@observer
class App extends Component {

  state = {
    image: null,
    category:[{
      value: ' ',
    }, {
      value: ' ',
    }, {
      value: '' ,
    }]
  };
  
  componentDidMount()
  {
    const firebaseConfig = {
      apiKey: " ",
      authDomain: " ",
      databaseURL: " ",
      projectId: " ",
      storageBucket: "",
      messagingSenderId: "",
      appId: " "
    };
  
    firebase.initializeApp(firebaseConfig)
  }

  _handleclick()
  {
    observableStore.listmethod(1);
    console.log(observableStore.list)
  }

  async  _handlesignup()
  {

    try{

          await firebase.auth()
              .createUserWithEmailAndPassword(email, pass);
  
          alert("Account created");
  
          // Navigate to the Home page, the user is auto logged in
  
      } catch (error) {
        alert(error.toString())
      }
  
  
}


  _handlelogin()
  {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    });
  }
  
  
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
    
  },
});

export default App
