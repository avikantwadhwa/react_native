import * as React from 'react';
import { Button, Image, View } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import ImagePicker from 'react-native-image-crop-picker';
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
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        >Pick</Button>
        
          </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   });
    console.log("Avi")
    try
    {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
    }
    catch(err)
    {
      console.log(err.message)
    }
    // if (!result.cancelled) {
    //   this.setState({ image: result.uri });
    // }
  };
}