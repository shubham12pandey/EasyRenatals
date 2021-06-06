import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'

export default class Task extends Component {
    constructor()
    {
        super()
        
        this.state={
            values:0
        }
    }
    call=()=>{
        this.setState({values:this.state.values+1})
    }
    decrease=()=>{
        this.setState({values:this.state.values-1})
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
               <Text style={{fontSize:100,justifyContent:'center',alignItems:'center'}}>{this.state.values}</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <View style={{marginHorizontal:45}}>
               <TouchableOpacity 

               onPress={this.call}
                ><Text style={{color:'red',fontSize:25}} >increment</Text></TouchableOpacity>

               </View>
               <View>
                   <TouchableOpacity 
                   onPress={this.decrease}><Text style={{fontSize:25}}>Decrements</Text></TouchableOpacity>
               </View>
               </View>
            </View>
           
            
        )
    }
}

const styles = StyleSheet.create({})
