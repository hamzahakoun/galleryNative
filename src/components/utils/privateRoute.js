import React from 'react' ;
import Redirect from './redirect' ;
import { connect } from 'react-redux' ;


const PrivateRoute = (props) => {

  if ( props.isAuthorized !== null ) {
    const Component = props.component ;
    return <Component {...props} />
  } else {
    return <Redirect navigation = {props.navigation} component = "Login" />
  }
}


const mapStoreToProps = (state) => {
  return {
    isAuthorized : state.auth.isAuthorized ,
  }
}


export default connect(mapStoreToProps,null)(PrivateRoute) ;
