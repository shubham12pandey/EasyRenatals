import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Splash from '../screens/Splash'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Setting from '../screens/Setting'
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab=createBottomTabNavigator()


const Stack=createStackNavigator()

const stackNavigator=()=>{
    return(
  <  Stack.Navigator  headerMode='none'>  
    <Stack.Screen name='Splash' component={Splash}/>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='SignUp' component={SignUp}/>
    
     </Stack.Navigator>)
}

const AppNavigation=()=>{
    return(
    <NavigationContainer>
        <Tab.Navigator screenOptions={({navigation,route})=>({
            tabBarIcon:()=>{
                let IconName
                if (route.name==='Home'){
                  IconName='home'
                }
                else if(route.name==='Profile'){
                    IconName='user-circle'
                } else if(route.name==='Setting'){
                    IconName='cog'
                }
    
                return(
                    
                    <Icon
                    name={IconName}
                    color='black'
                    size={40}
                    />
                )
            }
        }
   
        )
           }
        >
 
    <Tab.Screen name='Home' component={Home}/>
    <Tab.Screen name='Profile' component={Profile}/>
    <Tab.Screen name='Setting' component={Setting}/>
    
    

</Tab.Navigator>

        </NavigationContainer>)

    }


export default AppNavigation