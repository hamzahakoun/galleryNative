import React from 'react' ;
import { View } from 'react-native' ;

const Redirect = ({component , navigation}) => {
  navigation.navigate(component) ;
  return <View></View>
}

export default Redirect ; 
