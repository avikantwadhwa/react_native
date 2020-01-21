//This is an example of Card View// 

import React from 'react';
//import react in our code. 

import { Text, View, StyleSheet, ImageEditor,Image,Button } from 'react-native';
//import all the components we are going to use.
const image=require('./assets/a.jpg')
import { Card ,Icon} from 'react-native-elements';
//import Card

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card title="Local Modules"
        image={image}>
        {/*react-native-elements Card*/}
          <Text style={styles.paragraph}>
            This is a card from the react
          </Text>
          <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
        </Card>
        
        
            
      
      </View>
    );
  }
}


