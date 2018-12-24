import React ,{ Component }  from 'react' ;
import { View , Animated ,StyleSheet } from 'react-native' ;


class GridLoadingItem extends Component {

  _backgroundColor = new Animated.Value(0) ;

  changeBackground = () => {
    Animated.timing(this._backgroundColor,{
      toValue : 100 ,
      duration : 1000 ,
    }).start(() => this.reverseBackground()) ;
  }

  reverseBackground = () => {
    Animated.timing(this._backgroundColor,{
      toValue : 0 ,
      duration : 1000 ,
    }).start(() => this.changeBackground()) ;
  }


  componentDidMount = () => {
    this.changeBackground() ;
  }

  render = () => {

    const backgroundColor = this._backgroundColor.interpolate({
      inputRange : [0,100],
      outputRange : ["#f1f2f6","#dfe4ea"],
    })
    return (
      <Animated.View style = {[styles.container,{backgroundColor : backgroundColor}]}>

      </Animated.View>
    )
  }
}


const styles = {
  container : {
    backgroundColor : "#ccc",
    borderRadius : 10,
    flex : 1 ,
  }
}

export default GridLoadingItem ;
