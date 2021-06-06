import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class Task2 extends Component {
    constructor()
    {
        super()
        this.state={
            color:0
        }
    }

    changeColor=( )=>{
        let randomNo=Math.ceil((Math.random()*100000)+10000)
        this.setState({color: this.state.color+randomNo})
        // alert(this.state.color)
    }
    render() {
        return (
            <View  style={{flex:1,backgroundColor:`#${this.state.color}`}} >
              <View style={{justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity 
                onPress={this.changeColor}>
                    <Text  style ={{backgroundColor:'white',fontSize:25,marginVertical:155}} >color change</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
