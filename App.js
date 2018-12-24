import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { LoginScreen,HomeScreen } from './src/screens' ;
import { createStackNavigator, createAppContainer } from 'react-navigation' ;
import { PrivateRoute } from './src/components/utils' ;
import { request } from './src/utils/http';
import { update } from './src/store/actions/authActions' ;
import { getItem } from './src/utils/storage' ;
import { connect } from 'react-redux' ;

const screens = {
  "Home"  : {
    screen : (props) => <PrivateRoute  component = {HomeScreen} {...props} /> ,
    navigationOptions : {header : null}

  } ,
  "Login"  : {
    screen : LoginScreen ,
    navigationOptions : {header : null}
  } ,
}



const AppStackNavigator = createStackNavigator(screens) ;

class App extends Component<Props> {

  verifyToken = (token) => {
    request('verify-token/',{token}).then(resp => {
      this.props.update('UPDATE_AUTHORIZATION',true)
      this.setState({ status : resp.status })
    })
  }

  componentDidMount = () => {
    getItem('token').then(token => {
      if (token) {
        this.verifyToken(token) ;
      } else {
        this.setState({status : 400 })
      }
    })
  }

  state = { status : null };

  render = () =>  {

    const AppContainer = createAppContainer(AppStackNavigator) ;

      if (this.state.status) {
        return (
          <View style = {{flex : 1}}>
            <AppContainer />
          </View>
        )
      } else {
        return <Text>Loading </Text>
      }


  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    update : (type,data) => dispatch(update(type,data))
  }
}
export default connect(null,mapDispatchToProps)(App) ;
