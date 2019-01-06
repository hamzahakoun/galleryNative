import React from 'react' ;
import { View ,StyleSheet , Text } from 'react-native' ;
import { Avatar } from '../utils' ;

const CommentsListItem = ({data}) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.avatar}>
        <Avatar username = {data.commentor.username} />
      </View>
      <View style = {styles.comment}>
        <Text style = {styles.commentContent}>{data.content}</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    padding : 30,
    backgroundColor : "#f1f2f6",
    margin : 5 ,
    borderRadius : 6 ,


  },
  avatar : {
    //marginTop : 5 ,
    flex : 2 ,
    //alignItems : 'center' ,
    justifyContent :'center' ,

  },
  comment : {
    flex : 5 ,
    paddingVertical : 5 ,
    paddingLeft : 30 ,
    //alignItems : 'flex' ,

  },
  commentContent : {
    fontWeight : 'bold' ,
  }
})


export default CommentsListItem;
