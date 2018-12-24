import React , { Component } from 'react' ;
import { connect } from 'react-redux' ;
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,} from 'react-native';

import { login } from '../../store/actions/authActions' ;


class LoginForm extends Component {

  state = { username : 'hamza', password : 'hamza123' }

  handleChange = (value,key) => this.setState({[key] : value })

  render = () => {

    return (
        <View style = {styles.container}>

          <View style = {styles.formContainer}>
          <TextInput
             placeholderTextColor = '#fff'
             placeholder = 'Username'
             style = {styles.input}
             returnKeyType = 'next'
             keyboardType = 'email-address'
             autoCapitilize = 'none'
             autoCorrect = {false}
             onSubmitEditing = {()=> this.passwordInput.focus()}
             onChangeText = {(value) => this.handleChange(value,'username') }
             value = {this.state.username}
             />
           <TextInput
             secureTextEntry = {true}
             placeholderTextColor = '#fff'
             placeholder = 'Password'
             style = {styles.input}
             returnKeyType = 'go'
             ref = {(input)=> this.passwordInput = input}
             onChangeText = {(value) => this.handleChange(value,'password') }
             value = {this.state.password}
             />

           <TouchableOpacity style = {styles.button} onPress = {() => this.props.login(this.state,this.props.navigation)}>
             <Text style = {styles.buttonText}>Login</Text>
           </TouchableOpacity>
          </View>
        </View>
    )

  }
}


const styles = StyleSheet.create({
  container : {
    flex : 1 ,
  },
  formContainer : {
    flex : 1 ,
  },
  input : {
    height : 50 ,
    padding : 10 ,
    backgroundColor : 'rgba(255,255,255,0.5)',
    marginBottom : 10 ,
    borderRadius : 6 ,
  },
  button : {
    height : 50 ,
    padding : 10 ,
    backgroundColor : '#C62828' ,
    borderRadius : 6 ,
    flex :  1,
    alignItems : 'center' ,
    justifyContent : 'center' ,
  },
  buttonText : {
    color :"#fff" ,
    fontWeight : 'bold' ,
  }


})


const mapStoreToProps = (state) => {
  return {
    isAuthorized : state.auth.isAuthorized ,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login : (creds,navigation) => dispatch(login(creds,navigation)) ,
  }
}

export default connect(mapStoreToProps,mapDispatchToProps)(LoginForm) ;
