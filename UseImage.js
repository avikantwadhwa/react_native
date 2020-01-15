import * as React from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Dropdown } from 'react-native-material-dropdown';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
    category:[{
      value: 'Hospital',
    }, {
      value: 'Fire',
    }, {
      value: 'Road',
    }]
  };

  render() {
    
  };
}