import React, { Component } from 'react';
import {View, Button, Text} from 'react-native';

export default class Entrar extends Component {
    render() {
    return (
    <View style={{backgroundColor: '#292929', width: '100%', width: 350, borderRadius: 15, padding: 20}}>
    <Text style={{color: '#fff', fontSize: 28, textAlign: 'center', marginBottom: 10}}>Informações sobre o aplicativo</Text>
    <Text style={{fontSize: 15, color: '#fff', textAlign: 'center', marginBottom: 15}}>Lorem Ipsum</Text>
    <Button title="Sair" onPress={this.props.fechar}></Button>
    </View>
    )
  }
}
