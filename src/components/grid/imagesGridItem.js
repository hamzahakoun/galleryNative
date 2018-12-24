import React from 'react' ;
import { View,StyleSheet,Image,TouchableOpacity } from 'react-native' ;



const ImagesGridItem = ({item}) => {
  return (
    <TouchableOpacity style = {styles.container}>
      <Image source = {{uri : item.url}} style = {styles.img}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    position: 'relative'
  },
  img : {
    height : null,
    width : null,
    position :"absolute" ,
    top : 0 ,
    bottom : 0 ,
    right : 0 ,
    left : 0 ,
  }
})

export default ImagesGridItem ;
