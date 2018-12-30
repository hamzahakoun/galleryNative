import React from 'react' ;
import { View , Text, StyleSheet } from 'react-native' ;


const Avatar = ({username}) => {
    return (
      <View style = {styles.container}>

        <View style = {styles.avatar}>

        </View>

        <View style = {styles.username}>
          <Text> {username} </Text>
        </View>

      </View>

    )
}

const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    flexDirection : 'row' ,
    alignItems : 'center' ,


  },

  avatarText : {
    color : "#fff",
    flex :  1 ,
    alignItems : 'center' ,
    justifyContent : 'center' ,
    height : 30 ,
    width : 30 ,
    borderRadius : 25 ,
  },

  avatar : {
    backgroundColor : "#444" ,
    height : 30 ,
    width : 30 ,
    borderRadius : 25 ,
  },

}) ;


export default Avatar ;
