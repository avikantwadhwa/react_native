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

 