import React from 'react' ;
import { View ,StyleSheet } from 'react-native' ;
import { ActionBarItem } from '../utils' ;


const ActiveBar = ({actions}) => {
  return (
    <View style = {styles.container}>
      {
        actions.map((item,i) => <ActionBarItem key = {i} iconName = {item.iconName} color = {item.color}/>)
      }
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    flexDirection : 'row',
    justifyContent : 'space-around',
    paddingVertical : 10,
  }
})

export default ActiveBar ;
