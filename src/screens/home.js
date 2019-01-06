import React, { Component } from 'react' ;
import { View, StyleSheet,Text,StatusBar } from 'react-native' ;
import { createBottomTabNavigator ,createAppContainer} from 'react-navigation' ;
import UserScreen from './user';
import GalleryScreen from './gallery' ;
import TagsScreen from './tags' ;
import { setNavigator } from '../store/actions/routeActions' ;
import { connect } from 'react-redux' ;
import Icon from 'react-native-vector-icons/FontAwesome' ;

const screens  = {
  'Tags' : {
    screen : TagsScreen ,
    navigationOptions : {tabBarIcon : ({tintColor}) => <Icon name = 'tag' style = {{color : tintColor,fontSize : 25}}/>},
  } ,
  'Gallery' : {
    screen : GalleryScreen ,
    navigationOptions : {tabBarIcon : ({tintColor}) => <Icon name = 'home' style = {{color : tintColor,fontSize : 25}}/>},

  },
  "User" :{
    screen : UserScreen,
    navigationOptions : {tabBarIcon : ({tintColor}) => <Icon name = 'user' style = {{color : tintColor,fontSize : 25}}/>},
  }
} ;

const tabsOptions = {
  initialRouteName : 'Gallery' ,
  tabBarOptions : {
    showLabel : false,
    activeTintColor : '#C62828' ,
  }
}


const TabNavigator = createBottomTabNavigator(screens,tabsOptions) ;


class HomeScreen extends Component {

  componentDidMount = () => {
    this.props.setNavigator(this.props.navigation,'ROOT') ;
  }


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




const mapDispatchToProps  = (dispatch) => {
  return {
    setNavigator : (nav,type) => dispatch(setNavigator(nav,type)) ,
  }
}



export default connect(null,mapDispatchToProps)(HomeScreen) ;
