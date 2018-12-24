import React, { Component } from 'react' ;
import { View ,StyleSheet,StatusBar,Image,Text,Animated } from 'react-native' ;
import { LoginForm } from '../components/auth' ;
import { connect } from 'react-redux' ;

class LoginScreen extends Component {


  _logoBlockVisibility = new Animated.Value(0) ;

  changeLogoBlockVisibility = () => {
    Animated.timing(this._logoBlockVisibility,{
      toValue : 1 ,
    }).start() ;
  }


  componentDidMount = () => {
    this.changeLogoBlockVisibility() ;
  }

  render = () => {
    return (
      <View style = {styles.container}>
        <StatusBar backgroundColor = '#e74c3c' />
        <Animated.View style = { [ styles.logoBlock,{opacity : this._logoBlockVisibility} ] }>
          <Image style = {styles.logo} source = {require('../../assets/imgs/angular.png')} />
          <Text style = {[styles.footerText,{marginTop : 20}]}> Gallery App made with react native </Text>
        </Animated.View>

        <View style = {styles.formBlock}>
            <LoginForm {...this.props}/>
        </View>

        <View style = {styles.footer}>
          <Text style = {styles.footerText}>Please Login to view your account </Text>
        </View>

      </View>

    )
  }
}


const styles = StyleSheet.create({
    container : {
      backgroundColor : "#e74c3c" ,
      flex : 1 ,
    },
    logoBlock : {
      flex : 5,
      alignItems : 'center' ,
      justifyContent : 'center' ,
    },
    logo : {
      height : 120 ,
      width : 120 ,
    },
    formBlock: {
      flex : 2 ,
      paddingHorizontal : 20  ,
    },
    footer : {
      flex : 1 ,
      alignItems : 'center' ,
      justifyContent : 'center' ,
    },
    footerText : {
      color : "#fff",
      fontWeight : 'bold',

    }
})



export default LoginScreen ;
