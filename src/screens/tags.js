import React, { Component } from 'react' ;
import { connect } from 'react-redux' ;
import { getRequest } from '../utils/http' ;
import { getData,updateData } from '../store/actions/rootActions' ;
import { Card,Button } from 'native-base' ;
import Icon from 'react-native-vector-icons/FontAwesome' ;
import { TagCardLoading,TagsCard } from '../components/tags' ;
import { Fabs } from '../components/utils' ;
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Animated,
  Dimensions
} from 'react-native' ;



const { width , height } = Dimensions.get('window') ;
const MAX_HEADER_HEIGHT = Math.floor(height / 2) ;
const MIN_HEADER_HEIGHT = 50 ;
const demo = [1,2,3,4,5,6,7,8,9,10] ;



class TagsScreen extends Component {

  state = {
    scrollY : new Animated.Value(0),
    tags : this.props.tags ,
    readyData : null ,
    checkedTags : [],
    active : true ,

  }

  componentDidMount = () => {
    if (!this.state.tags) {
      this.props.getData('images/tags?exists=1','TAGS') ;
    }
  }

  checkAll = () => this.setState({checkedTags : this.state.tags}) ;

  removeAll = () => this.setState({checkedTags : []}) ;

  search = () => {
    if (this.state.checkedTags) {
      this.props.updateData('SEARCHED_TAGS',this.state.checkedTags) ;
      this.props.navigation.navigate('Gallery') ;
    }
  }


  toggleCheck = (item) => {

    const index = this.state.checkedTags.indexOf(item) ;
    const checkedTags = this.state.checkedTags ;
    if (index === -1) {
      checkedTags.push(item) ;
    } else {
      checkedTags.splice(index,1) ;
    }
    this.setState({checkedTags}) ;
  }


  static getDerivedStateFromProps = (nextProps,prevState) => {
    return nextProps ;
  }

  componentDidUpdate = () => {
    if (this.state.tags && !this.state.readyData) {
      const readyData = this.prepareData(this.state.tags) ;
      this.setState({ readyData }) ;
    }
  }

  prepareData = (data) => {
    const readyData = {} ;
    data.map(item => {
      const char = item.content[0].toLowerCase() ;
      if (readyData[char]) {
        readyData[char].push(item) ;

      } else {
        readyData[char] = [item] ;

      }
    })
    return readyData ;
  }

  render = () => {


    const fabs = [
      {buttonColor : "#801336",title : 'Search',action : this.search ,icon: "search",iconColor : '#fff'} ,
      {buttonColor : "#582841",title : 'Remove All',action : this.removeAll ,icon: "times",iconColor : '#fff'} ,
      {buttonColor : "#CC2A49",title : 'Check All',action : this.checkAll ,icon: "check-square",iconColor : '#fff'} ,
    ]

     const headerHeight = this.state.scrollY.interpolate({
       inputRange : [0,180,181] ,
       outputRange : [MAX_HEADER_HEIGHT,MIN_HEADER_HEIGHT,MIN_HEADER_HEIGHT] ,
     })


     const headerIconScale = this.state.scrollY.interpolate({
       inputRange : [0,180,181] ,
       outputRange : [1,0.5,0.5] ,
     })

     const headerIconOpccity = this.state.scrollY.interpolate({
       inputRange : [0,180] ,
       outputRange : [1,0] ,
     })


     const headerTextScaleY = this.state.scrollY.interpolate({
       inputRange : [0,180,181] ,
       outputRange : [-185,MIN_HEADER_HEIGHT / 35,MIN_HEADER_HEIGHT / 35 ] ,
     })

     const bodyPaddingTop  = this.state.scrollY.interpolate({
       inputRange : [0,180,181] ,
       outputRange : [MAX_HEADER_HEIGHT + 10,MIN_HEADER_HEIGHT + 10,MIN_HEADER_HEIGHT + 10 ] ,
     })

     return (
       <View style = {styles.container}>
        <Animated.ScrollView style = {[styles.body,{paddingTop : bodyPaddingTop}]}
          scrollEventThrottle = {16}
          onScroll = {
            Animated.event(
              [
                {
                  nativeEvent : {contentOffset : { y : this.state.scrollY} }
                }
              ],
              {
                useNativeDrive : true ,
              }
            )
          }
        >

          {
            this.state.readyData &&
            Object.keys(this.state.readyData).map((char) => {
              return (
                <TagsCard
                  key = {char}
                  char={char}
                  data = {this.state.readyData[char]}
                  checkedTags = { this.state.checkedTags }
                  toggleCheck = {this.toggleCheck}
                  />
              )
            })

          }
          {
            !this.state.readyData &&
            demo.map(item => {
              return (
                <View style = {styles.tagCardLoadingContainer} key = {item}>

                  <TagCardLoading  />

                </View>
              )
            })
          }
        </Animated.ScrollView>

        <Animated.View
          style = {
            [
              styles.headerBlock ,
              {height : headerHeight},
            ]
          }
        >

          <Animated.View style = {styles.headerIconContainer}>

            <Animated.Text style = {[styles.headerText,{transform : [{translateY : headerTextScaleY}]}]}>Tags</Animated.Text>
            <Animated.View style = {{transform : [{scale :headerIconScale}],opacity : headerIconOpccity}}>
              <View style = {styles.headerIconWrapper}>
                <Icon name='tag' style={styles.headerIcon} />
              </View>

            </Animated.View>

          </Animated.View>
        </Animated.View>

        <Fabs fabs = {fabs} />

       </View>
     )
   }

}


const styles = StyleSheet.create({
  container : {
    flex : 1 ,
  },
  headerBlock : {
    backgroundColor : '#C62828' ,
    position : "absolute" ,
    top : 0 ,
    width :"100%" ,
    height: MAX_HEADER_HEIGHT,
    flex : 1 ,
  },
  headerIcon : {
    color : "#C62828" ,
    fontSize : 100 ,
  },
  headerIconContainer : {
    flex :  1 ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
  },
  headerText: {
    color : "#fff" ,
    fontWeight : 'bold' ,
    position : 'absolute' ,
    fontSize : 20 ,
    textAlign : 'center' ,
  },
  body : {
    paddingHorizontal : 20 ,
    paddingBottom : 50,
  },
  tagCardLoadingContainer : {
    marginBottom : 10 ,
  },
  headerIconWrapper : {
    borderRadius : 6 ,
    padding : 20 ,
    backgroundColor : "#rgba(255,255,255,0.9)",
  },
  actionButtonIcon : {
    color : "#fff",
  }

})

const mapStoreToProps = (state) => {
  return {
    tags : state.tags.tags ,
    searchedTags : state.tags.searchedTags ,
  }
}


const mapDispatchToProps  = (dispatch) => {
  return {
    getData : (type,data) => dispatch(getData(type,data)) ,
    updateData : (type,data) => dispatch(updateData(type,data)) ,
  }
}



export default connect(mapStoreToProps,mapDispatchToProps)(TagsScreen) ;
