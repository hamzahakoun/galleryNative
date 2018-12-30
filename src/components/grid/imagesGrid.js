import React , { Component } from 'react' ;
import { View , Text, StyleSheet,ScrollView } from 'react-native' ;
import ImagesGridItem from './imagesGridItem' ;
import { getData } from '../../store/actions/imagesActions' ;
import GridLoading from './gridLoading' ;
import { connect } from 'react-redux' ;

class ImagesGrid  extends Component {

  state = {
    data : this.props[this.props.type.toLowerCase()] ,
    type : this.props.type ,
  }

  componentDidMount = () => {
    if (!this.state.data) {
      this.props.getData(this.props.endpoint,this.props.type) ;
    }
  }

  static getDerivedStateFromProps = (nextProps,prevState) => {
    return {
      type : nextProps.type,
      data : nextProps[nextProps.type.toLowerCase()]}
    }



  render = () => {

    if (this.state.data) {
      return (
        <ScrollView>

          <View style = {styles.container}>
            {
              this.state.data.map(item =>  {
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
    } else {
      return <GridLoading />
    }
  }

}

const mapStoreToProps = (state) => {
  return {
    all : state.images.all ,
    related : state.images.related ,
    liked : state.images.liked,
  }
}


const mapDispatchToProps  = (dispatch) => {
  return {
    getData : (endpoint,type) => dispatch(getData(endpoint,type)) ,
  }
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



export default connect(mapStoreToProps,mapDispatchToProps)(ImagesGrid) ;
