import React, { Component } from 'react' ;
import { View, StyleSheet,Text,StatusBar } from 'react-native' ;
import { createBottomTabNavigator ,createAppContainer} from 'react-navigation' ;
import UserScreen from './user';
import GalleryScreen from './gallery' ;


const screens  = {
  'Gallery' : GalleryScreen,
  "User" :UserScreen ,
} ;



const TabNavigator = createBottomTabNavigator(screens) ;


class HomeScreen extends Component {

 render = () => {
   const AppContainer = createAppContainer(TabNavigator)
   return (
     <View style = {styles.container}>
      <StatusBar backgroundColor = '#C62828'/>
      <AppContainer/>
     </View>
   )

 }

}


const styles = StyleSheet.create({
  container : {
    flex : 1 ,
  }
})


export default HomeScreen ;
