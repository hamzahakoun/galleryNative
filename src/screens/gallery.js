import React , { Component } from 'react' ;
import { View , StyleSheet, Text } from 'react-native' ;
import { createMaterialTopTabNavigator,createAppContainer } from 'react-navigation' ;
import { ImagesGrid} from '../components/grid' ;


const screens = {
  'All' : (props) => <ImagesGrid type = 'ALL' endpoint = 'images' {...props}/>,
  'Liked' : (props) => <ImagesGrid type = 'LIKED' endpoint = 'images?liked=1'{...props}/>,
}


const tabOptions = {
  lazy: true,
  tabBarOptions : {
    tabStyle : {
      backgroundColor : '#C62828' ,
    },
    indicatorStyle : {
      color : "yellow",
    }

  }


}

const TabNavigator = createMaterialTopTabNavigator(screens,tabOptions) ;


class GalleryScreen extends Component {


  render = () => {

    const AppContainer = createAppContainer(TabNavigator) ;
    return (
      <View style =  {styles.container}>
        <AppContainer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1 ,
  }
})

export default GalleryScreen ;
