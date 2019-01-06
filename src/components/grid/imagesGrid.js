import React , { Component } from 'react' ;
import { View , Text, StyleSheet,ScrollView } from 'react-native' ;
import ImagesGridItem from './imagesGridItem' ;
import { getData } from '../../store/actions/imagesActions' ;
import GridLoading from './gridLoading' ;
import { connect } from 'react-redux' ;

class ImagesGrid  extends Component {

  state = {
    data : this.props[this.props.type.toLowerCase()] ,
    type : this.props.type , // all , realated , searched, liked
    endpoint : this.props.endpoint ,
  }

  componentDidMount = () => {
    if (!this.state.data) {
      this.props.getData(this.state.endpoint,this.state.type) ;
    }
  }

  static getDerivedStateFromProps = (nextProps,prevState) => {
    return {
      type : nextProps.type,
      data : nextProps[nextProps.type.toLowerCase()] ,
      endpoint : nextProps.endpoint ,
    }
  }

  componentDidUpdate = (prevProps,prevState) => {

    if (prevState.type !== 'SEARCHED' && this.props.searched) {
      this.setState({type : "SEARCHED"}) ;
    }
    if (this.state.type === 'SEARCHED') {
      console.log('done ')
    }


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
    searched : state.images.searched ,
    searchedTags  :state.tags.searchedTags ,
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
