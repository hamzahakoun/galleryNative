import React , { Component } from 'react' ;
import { Animated , StyleSheet,View } from 'react-native' ;

export default class TagCardLoading extends Component {

  state = {
    color : new Animated.Value(0) ,
  }


  changeColor = () => {
    Animated.timing(this.state.color,{
      toValue : 100 ,
      duration : 1000 ,
    }).start(() => this.reverseColor()) ;
  }

  reverseColor = () => {
    Animated.timing(this.state.color,{
      toValue : 0 ,
      duration : 1000 ,
    }).start(() => this.changeColor()) ;
  }


  componentDidMount = () => {
    this.changeColor() ;
  }

  render = () => {
    const headerBackgroundColor = this.state.color.interpolate({
      inputRange : [0,100],
      outputRange : ['#ced6e0','#a4b0be'] ,
    })
    const itemBackgroundColor = this.state.color.interpolate({
      inputRange : [0,100],
      outputRange : ['#dfe4ea','#ced6e0'] ,
    })

    return (
      <Animated.View style = {styles.container}>

        <View style = {styles.title}>
          <Animated.View style = {[styles.titleText,{backgroundColor :headerBackgroundColor }]}></Animated.View>
        </View>

        <View style = {styles.body}>
          <Animated.View style = {[styles.item,{backgroundColor : itemBackgroundColor}]}></Animated.View>
          <Animated.View style = {[styles.item,{backgroundColor : itemBackgroundColor}]}></Animated.View>
          <Animated.View style = {[styles.item,{backgroundColor : itemBackgroundColor}]}></Animated.View>
        </View>

      </Animated.View>
    )
  }
}


const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    borderRadius : 6 ,
    height : 300 ,
    overflow: "hidden",
    padding : 10 ,
    justifyContent : 'space-between' ,
    backgroundColor : '#f1f2f6',

  },
  title : {
    flex : 1 ,

  } ,
  body : {
    flex : 3 ,
  },
  item : {
    backgroundColor : "#dfe4ea" ,
    borderRadius : 6 ,
    flex:  1 ,
    margin : 5 ,

  },
  titleText : {
    backgroundColor : "#ced6e0" ,
    borderRadius : 6 ,
    flex : 1 ,
  }

})
