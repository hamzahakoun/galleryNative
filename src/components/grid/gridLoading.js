import React from 'react' ;
import { View,StyleSheet } from 'react-native' ;
import GridLoadingItem from './gridLoadingItem'

const GridLoading = (props) => {

  return (
    <View style = {styles.container}>

      <View style = {styles.gridItemContainer}>
        <GridLoadingItem />
      </View>

      <View style = {styles.gridItemContainer}>
        <GridLoadingItem />
      </View>

      <View style = {styles.gridItemContainer}>
        <GridLoadingItem />
      </View>

      <View style = {styles.gridItemContainer}>
        <GridLoadingItem />
      </View>

      <View style = {styles.gridItemContainer}>
        <GridLoadingItem />
      </View>

      <View style = {styles.gridItemContainer}>
        <GridLoadingItem />
      </View>

      <View style = {styles.gridItemContainer}>
        <GridLoadingItem />
      </View>

      <View style = {styles.gridItemContainer}>
        <GridLoadingItem />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    flexDirection : 'row' ,
    justifyContent : 'space-around' ,
    flexWrap : 'wrap' ,
    paddingTop : 5 ,
    paddingHorizontal : 5 ,
  },
  gridItemContainer : {
    width : 170 ,
    height : 150 ,
    marginBottom : 5 ,
  }
})

export default GridLoading ;
