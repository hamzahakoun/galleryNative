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


const removeData = (type) => {
  return (dispatch,prevState) => {
    dispatch({type , data : null})
  }
}


const updateData = (type,data) => {
  return (dispatch,prevState) => {
    dispatch({type , data })
  }
}

export {
  getData ,
  removeData,
  updateData,
}
