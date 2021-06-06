import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

export default class Splash extends Component {
componentDidMount() {
    setTimeout(()=>{
        this.props.navigation.navigate('Login')




    },2000)
}


  render() {
    return (
      <View style={{flex: 1,backgroundColor:'white',}}>
          <View style={{justifyContent:'center',alignItems:'center',marginVertical:200,elevation:20}}>
        <Image style={{ width:300,height:300, }} source={require('../assets/image/logo.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
