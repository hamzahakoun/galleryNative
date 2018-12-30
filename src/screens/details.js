import React, { Component } from 'react' ;
import { View, StyleSheet,Text,Image,Dimensions,ScrollView } from 'react-native' ;
import { ImagesGrid } from '../components/grid' ;
import { connect } from 'react-redux' ;
import { getRequest } from '../utils/http' ;
import { updateData } from '../store/actions/imagesActions' ;
import { Card,Button } from 'native-base' ;
import { TagsList } from '../components/details' ;
import { CommentsList } from '../components/comments' ;

const { width , height } = Dimensions.get('window') ;

class DetailsScreen extends Component {

   state = {data : this.props.navigation.getParam('data')} ;

   static getDerivedStateFromProps = (nextProps,prevState) => {
      return {data : nextProps.navigation.getParam('data')} ;
   }

   componentDidUpdate = () => {
      if (!this.props.related) {
        let tagsString = 'images?tags=' ;
        this.state.data.tags.map(item => tagsString += `${item.content},`) ;
        getRequest(tagsString).then(resp => {
          if (resp.status === 200) {
            this.props.updateData("RELATED",resp.data) ;
          }
        })
      }
   }


   render = () => {
     let tagsString = 'images?tags=' ;
     const ratio =  width / this.state.data.width ;
     const newHeight = this.state.data.height * ratio ;
     this.state.data.tags.map(item => tagsString += `${item.content},`) ;

     return (
       <View style = {styles.container}>
         <ScrollView>

           <Card style = {styles.card}>


             <View style = {[styles.imageBlock,{width : width, height: newHeight}]}>
               <Image
                 source = {{uri : this.state.data.url}}
                 style = {{width : width , height : newHeight}}
                 />
             </View>

              <View style = {styles.tags}>
                <TagsList data = {this.state.data.tags} />
              </View>
           </Card>

            <Text style = {styles.title}>Comments </Text>
           <View style = {styles.comments}>
             <Card style = {[styles.card,styles.commentsCard]}>
                <CommentsList data = {this.state.data.comments} />
             </Card>
           </View>


            <Text style = {styles.title}>Related Images </Text>
            <ImagesGrid type = 'RELATED' endpoint = {tagsString} />

         </ScrollView>
       </View>

     )

   }

}


const styles = StyleSheet.create({
  container : {
    flex : 1 ,

  },
  imageBlock : {
    flex : 1 ,
  },
  title : {
    color :"#444" ,
    fontSize : 20 ,
    padding : 20 ,
  },
  card : {
    flex : 1 ,
  },
  tags : {
    paddingHorizontal : 5 ,
    paddingVertical : 10 ,
    flex : 1 ,

  },
  comments : {
    paddingHorizontal : 20 ,
  } ,
  commentsCard : {
      padding : 10 ,
  }


})

const mapStoreToProps = (state) => {
  return {
    related : state.images.related ,
  }
}


const mapDispatchToProps  = (dispatch) => {
  return {
    updateData : (type,data) => dispatch(updateData(type,data)) ,
  }
}



export default connect(mapStoreToProps,mapDispatchToProps)(DetailsScreen) ;
