import { getRequest } from '../../utils/http' ;

const getData = (endpoint,type) => {
  return (dispatch,setState) => {
    getRequest(endpoint).then(resp => {
      if (resp.status === 200) {
        dispatch({type, data : resp.data})
      }
    })
  }
}

export {
  getData ,
}
