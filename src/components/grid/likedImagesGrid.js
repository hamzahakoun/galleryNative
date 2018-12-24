import React, { Component } from 'react' ;
import { View , StyleSheet,Text } from 'react-native' ;
import { connect } from 'react-redux' ;
import { getData } from '../../store/actions/imagesActions' ;
import GridLoading from './gridLoading' ;
import ImagesGrid from './imagesGrid'  ;

class LikedImagesGrid extends Component {

  state = {
    data : this.props.liked ,

  }

  componentDidMount = () => {
    if (!this.state.data) {
      this.props.getData('images?liked=1','LIKED') ;
    }
  }

  static getDerivedStateFromProps = (nextProps,prevState) => {
    return { data : nextProps.liked}
  }


  render = () => {
    if (this.state.data) {

      return <ImagesGrid data = {this.state.data} />
    } else {
      return <GridLoading />
    }
  }
}
//<Text>Liked Images</Text>
const mapStoreToProps = (state) => {
  return {
    liked : state.images.liked
  }
}


const mapDispatchToProps  = (dispatch) => {
  return {
    getData : (endpoint,type) => dispatch(getData(endpoint,type)) ,
  }
}

export default connect(mapStoreToProps,mapDispatchToProps)(LikedImagesGrid) ;
