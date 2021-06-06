import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

export default class Task3 extends Component {
    constructor()
    {
        super()
        this.state={
            color:''
        }
    }
    
    
    render() {
        return (
            <View  style={{backgroundColor:`${this.state.color}`,flex:1}}>
                <TextInput
                placeholder='color'
                onChangeText={(text)=>{
                    text===''?this.setState({color:'yellow'}):this.setState({color:text})
                   
               }}/>
            </View>
        )
    }
    }

    
const styles = StyleSheet.create({})
