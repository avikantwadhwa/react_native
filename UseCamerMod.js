import React, {Component} from 'react'
import { Text, View, Button,Image ,ScrollView} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
export default class UseCamerMod extends Component {

    state={
        image:null
    }

    _handleimage=async ()=>{

    const image=await ImagePicker.launchCameraAsync()
        
    this.setState({
        image:image.uri
    })
    console.log(this.state.image)
    }
    render() {
        let { image } = this.state;
        return (
            <ScrollView>
                <Text> textInComponent </Text>
                <Image source={{ uri: image }}/>
                
                <Button title="Camera" onPress={()=>this._handleimage()}></Button>
                
            </ScrollView>
        )
    }
}
