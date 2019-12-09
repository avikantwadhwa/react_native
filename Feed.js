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
    
    


