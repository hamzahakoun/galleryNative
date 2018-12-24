import React , { Component } from 'react' ;
import { View , Text, StyleSheet,ScrollView } from 'react-native' ;
import ImagesGridItem from './imagesGridItem' ;

const ImagesGrid  = ({data}) => {

  return (
    <ScrollView>

      <View style = {styles.container}>
        {
          data.map(item =>  {
            return (
              <View key = {item.id} style = {styles.girdItemContainer}>
                <ImagesGridItem item = {item} />
              </View>
            )
          })
        }
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container : {
    flex :  1 ,
    flexDirection : "row" ,
    flexWrap : 'wrap' ,
    justifyContent : 'space-around' ,
    paddingHorizontal : 5 ,
    paddingTop : 5 ,

  },
  girdItemContainer : {
    height : 150 ,
    width : 170 ,
    borderRadius : 10 ,
    overflow : 'hidden',
    marginBottom : 5 ,
  }
})



export default ImagesGrid ;
