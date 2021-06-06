import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import AppNavigation from './src/navigation'

// import Login from "./src/screens/Login"
// import SignUp from './src/screens/SignUp'
// import Task from'./src/screens/Task'
// import Task2 from './src/screens/Task2'
// import Task3 from'./src/screens/Task3'
// import Splash from'./src/screens/Splash'
export default class App extends Component {
  render() {
    return (
       <View style={{flex:1}}>
    
     
      {/* <SignUp/> */}
{/* <Task/> */}
{/* <Task2/> */}
{/* <Task3/> */}
{/* <Splash/> */}
<AppNavigation/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
