import React , { Component } from 'react' ;
import { View , StyleSheet, Text,Animated } from 'react-native' ;
import Icon from 'react-native-vector-icons/FontAwesome' ;
import {BoxShadow} from 'react-native-shadow'

const shadowOpt = {
    width:100,
    height:100,
    color:"#000",
    border:2,
    radius:3,
    opacity:0.2,
    x:0,
    y:3,
    style:{marginVertical:5}
}


class ActionBarItem extends Component {

  state = {scale : new Animated.Value(1) }

  scaleUp = () => {
    Animated.timing(this.state.scale,{
      toValue : 1.5 ,
      duration : 100
    }).start(() => this.scaleDown()) ;
  }

  scaleDown = () => {
    Animated.timing(this.state.scale,{
      toValue : 1 ,
      duration : 100
    }).start() ;
  }

  componentDidMount = () => {
    this.scaleUp() ;
  }

  render = () => {
    const color = this.props.color ? this.props.color : '#444' ;
    return (

        <Animated.View style = {[styles.container,{transform : [{scale : this.state.scale}]}]}>
          <Icon name = {this.props.iconName} size = {25} color = {color}/>
        </Animated.View>

    )

  }

}

const styles = StyleSheet.create({
  container : {
    borderRadius : 6 ,
    padding :10 ,
    width : 60 ,
    height : 60 ,
    alignItems : 'center',
    justifyContent : 'center'  ,
    flex : 1,
  }
})

export default ActionBarItem
