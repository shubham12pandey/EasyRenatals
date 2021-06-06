import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput,TouchableOpacity,Image } from 'react-native'
import CheckBox from 'react-native-check-box'
export default class SignUp extends Component {
    constructor(){
        super()
        this.state={
            email:'',
            Password:''
        }
    }
  
change=()=>{
     color:'blue'
}

    
    onSignIn=()=>{
       
        alert(`email=${this.state.email} & Password=${this.state.Password }`)
   }
    render() {
        return (
            <View style={{flex:1 ,backgroundColor:'white'}}>
            <View style={{flexDirection:'row',marginHorizontal:35,marginVertical:65,marginBottom:30}}>
                <Text style={{fontSize:22,fontWeight:'bold',opacity: .8,}}>Sign Up</Text>
            </View>
            <View>
                <TextInput style={{borderWidth:1,marginHorizontal:'10%',paddingHorizontal:'5%',borderRadius:12}}  
                placeholder='UserName '
                value={this.state.Email}
                onChangeText={(text)=>{
                    this.setState({email:text})
                }}
                />
            </View>
            <View>
                <TextInput style={{borderWidth:1,marginHorizontal:'10%',paddingHorizontal:'5%',borderRadius:12,marginVertical:20}}  
                placeholder=' Email'
                value={this.state.Email}
                onChangeText={(text)=>{
                    this.setState({email:text})
                }}
                />
            </View>
            <View>
          <TextInput value={this.state.Password}
        onChangeText={(text)=>{
            this.setState({Password:text})
        }
       }
       
            secureTextEntry
          
          style={{borderWidth:1,marginVertical:'5%',marginHorizontal:'10%',paddingHorizontal:'5%',borderRadius:12,marginVertical:5}}  
                placeholder='New PassWord'

                
                />
          </View>
            
          <View>
          <TextInput value={this.state.Password}
        onChangeText={(text)=>{
            this.setState({Password:text})
        }
       }
       
            secureTextEntry
          
          style={{borderWidth:1,marginVertical:'5%',marginHorizontal:'10%',paddingHorizontal:'5%',borderRadius:12,marginVertical:16}}  
                placeholder='Confirm PassWord'

                
                />
          </View>
          <View style={{flexDirection:'row'}}>
              <View >
                        
              <CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    leftText={"CheckBox"}
/>
              </View>
              <View ><Text style={{opacity:.9}}>By singing up you accepts the<Text style={{color:'blue'}} onPress={this.change}> Term and service</Text > and<Text style={{color:'blue'}} onPress={this.change}> privacy policy </Text> </Text>

              </View>
          </View>
          
           <View style={{marginVertical:15,marginHorizontal:35,}}>

               {/* <Button 
             style={{borderRadius:12}} title=" Sign In"/> */}
             <TouchableOpacity
                 onPress={this.onSignIn}
              style={{backgroundColor:'#007EA7',padding:20,borderRadius:8,marginVertical:'5%'}}>
                <Text style={{fontSize:18,color:'white',textAlign:'center'}}>Sign In</Text>
             </TouchableOpacity>
           </View>
           
          
       </View>
        )
    }
}

const styles = StyleSheet.create({})
