import React, { Component } from 'react' ;
import { View , StyleSheet } from 'react-native' ;
import { connect } from 'react-redux' ;
import { getData } from '../../store/actions/imagesActions' ;
import GridLoading from './gridLoading' ;
import ImagesGrid from './imagesGrid'  ;

class AllImagesGrid extends Component {

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
    return {type : nextProps[nextProps.type.toLowerCase()], data : nextProps[nextProps.type.toLowerCase()]}
  }


  render = () => {
    if (this.state.data) {
      return <ImagesGrid data = {this.state.data} />
    } else {
      return <GridLoading />
    }
  }
}

const mapStoreToProps = (state) => {
  return {
    all : state.images.all ,
    related : state.images.related ,
  }
}


const mapDispatchToProps  = (dispatch) => {
  return {
    getData : (endpoint,type) => dispatch(getData(endpoint,type)) ,
  }
}

export default connect(mapStoreToProps,mapDispatchToProps)(AllImagesGrid) ;
