import React , { Component } from 'react' ;
import { View , StyleSheet, Text } from 'react-native' ;
import { createMaterialTopTabNavigator,createAppContainer } from 'react-navigation' ;
import { AllImagesGrid,LikedImagesGrid } from '../components/grid' ;


const screens = {
  'All' : (props) => <AllImagesGrid type = 'ALL' endpoint = 'images' {...props}/>,
  'Liked' : (props) => <LikedImagesGrid {...props}/>,
}


const tabOptions = {
  tabBarOptions : {
    tabStyle : {
      backgroundColor : '#B53471' ,
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
