import React from 'react' ;
import { View ,StyleSheet , Text } from 'react-native' ;
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

    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    alignItems : 'center' ,
    justifyContent : 'center' ,
  },
  noCommentsText : {
    padding : 50 ,
    fontWeight : 'bold' , 
  }
})


export default CommentsList;
