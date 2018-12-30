import React, { Component } from 'react' ;
import { View, StyleSheet,Text,TouchableOpacity } from 'react-native' ;
import Icon from 'react-native-vector-icons/FontAwesome' ;
import { logout } from '../store/actions/authActions' ;
import { connect } from 'react-redux' ;
import { updateData as updateTags } from '../store/actions/tagsActions' ;
import { updateData as updateImgs } from '../store/actions/imagesActions' ;
import { updateData as updateRoutes } from '../store/actions/routeActions' ;

class UserScreen extends Component {


 logout = () => {
    this.props.logout(this.props.rootNavigator) ;
    this.props.updateImgs("REMOVE_ALL",null) ;
    this.props.updateTags("REMOVE_ALL",null) ;
    this.props.updateRoutes("REMOVE_ALL",null) ;

 }

 render = () => {
   return (
     <View style = {styles.container}>
      <View style = {styles.headerBlock}>
        <TouchableOpacity onPress = {this.logout}>
            <Icon name = 'sign-out' style = {{color :"#fff",fontSize : 30}}/>
        </TouchableOpacity>

      </View>
      <View style = {styles.body}></View>
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
    flex : 2 ,
    padding : 50,
  },
  body : {
    flex : 2 ,
  }
})

const mapStateToProps = (state) => {
    return {
      rootNavigator : state.route.rootNavigator ,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      logout : (navigation) => dispatch(logout(navigation)),
      updateTags : (type,data) => dispatch(updateTags(type,data)),
      updateImgs : (type,data) => dispatch(updateImgs(type,data)),
      updateRoutes : (type,data) => dispatch(updateRoutes(type,data)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UserScreen) ;
