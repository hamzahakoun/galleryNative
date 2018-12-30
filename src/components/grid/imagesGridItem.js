import React from 'react' ;
import { View,StyleSheet,Image,TouchableOpacity } from 'react-native' ;
import { connect } from 'react-redux' ;
import { removeData } from '../../store/actions/imagesActions' ;


const ImagesGridItem = ({item,rootNavigator,removeData}) => {
  return (
    <TouchableOpacity style = {styles.container} onPress = {() => {
        removeData('REMOVE_RELATED') ;
        rootNavigator.navigate('Details',{data : item}) ;
      }}>
      <Image source = {{uri : item.thumbnail}} style = {styles.img}/>
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeData : (type) => dispatch(removeData(type)) ,
  }
}


const mapStoreToProps = (state) => {
  return {
    rootNavigator : state.route.rootNavigator ,
  }
}



export default connect(mapStoreToProps,mapDispatchToProps)(ImagesGridItem) ;
