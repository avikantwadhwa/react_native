import React, { Component } from 'react'
import { View,Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {AppLoading } from "expo";
import * as Font from 'expo-font'
export default class CardImageExample extends Component {

    
    constructor(props) {
        super(props);
        this.state = { loading: true };
      }
    
    
      async componentWillMount() {

        
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
          });
    
         


