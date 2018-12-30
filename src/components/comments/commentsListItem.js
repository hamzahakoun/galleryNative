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
    flexDirection : 'row' ,
    alignItems:'center' ,
    padding : 30,
    backgroundColor : "#f1f2f6",
    margin : 5 ,
    borderRadius : 6 ,


  },
  avatar : {
    flex : 2 ,
    alignItems : 'center' ,
    justifyContent :'center' ,

  },
  comment : {
    flex : 5 ,
    alignItems : 'flex-end' ,
    
  },
  commentContent : {
    fontWeight : 'bold' ,
  }
})


export default CommentsListItem;
