import React from 'react' ;
import { ScrollView  ,Text,StyleSheet  }  from 'react-native' ;
import {Button} from 'native-base' ;


const TagsList = ({data}) => {
  return (
    <ScrollView horizontal = {true}>
      {
        data.map(tag => {
          return (
            <Button style = {styles.tag} key = {tag.id}>
              <Text style = {styles.tagText}>{tag.content}</Text>
            </Button>
          )
        })
      }
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  tag : {
    backgroundColor : '#C62828' ,
    margin : 5 ,
    padding : 10 ,
    borderRadius : 6 , 
  },
  tagText : {
    color :"#fff" ,
  }
})

export default TagsList ;
