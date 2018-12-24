import React, { Component } from 'react' ;
import { View, StyleSheet,Text } from 'react-native' ;




class UserScreen extends Component {


 render = () => {
   return (
     <View style = {styles.container}>
      <View style = {styles.headerBlock}></View>
      <View style = {styles.body}></View>
     </View>
   )

 }

}


const styles = StyleSheet.create({
  container : {
    flex : 1 ,
  },
  headerBlock : {
    backgroundColor : '#C62828' ,
    flex : 2 ,
  },
  body : {
    flex : 2 , 
  }
})


export default UserScreen ;
