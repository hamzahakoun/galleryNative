import { request } from '../../utils/http' ;
import { setItem } from '../../utils/storage' ;

const login = (creds,navigation) => {
  return (dispatch,prevState) => {
    request('api-token-auth/',creds)
    .then(resp => {
      if (resp.data.token) {
        setItem("token",resp.data.token) ;
        dispatch({type : 'LOGIN'})
        navigation.navigate('Home') ;
      }
    })

  }
}

const update = (type,data) => {
  return (dispatch,prevState) => {
    dispatch({ type , data }) ;
  }
}


export {
  login ,
  update ,
}
