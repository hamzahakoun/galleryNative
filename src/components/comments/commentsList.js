import React from 'react' ;
import { View ,StyleSheet , Text,TextInput,TouchableOpacity } from 'react-native' ;
import CommentsListItem  from './commentsListItem' ;

const CommentsList = ({data}) => {
  return (
    <View style = {styles.container}>
      {
        data.length > 0 &&
        data.map(item => <CommentsListItem key = {item.id} data = {item} />)
      }
      {
        data.length === 0 && <Text>No Comments Yet</Text>
      }
      <TextInput placeholder = 'Comment' style = {styles.commentInput}/>
      <TouchableOpacity style = {styles.commentButton}>
        <Text style = {styles.commentButtonText}>Comment</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1 ,
  },
  noCommentsText : {
    padding : 50 ,
    fontWeight : 'bold' ,
  },
  commentInput : {
    borderRadius : 6 ,
    borderWidth : 1 ,
    borderColor : "#ccc" ,
    padding : 10 ,
    flex : 1 ,
  },
  commentButton : {
    borderRadius : 6,
    backgroundColor : "#C62828" ,
    padding : 10 ,
    flex : 1 ,
    alignItems : 'center' ,
    justifyContent : "center",
    marginTop : 5,
  },
  commentButtonText : {
    color :"#fff" ,
    fontWeight : 'bold' ,
  }
})


export default CommentsList;
