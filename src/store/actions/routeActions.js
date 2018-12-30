const setNavigator = (nav,type) => {
  return (dispatch,setState) => {
    dispatch({type ,data : nav})
  }
}

const updateData = (type,data) => {
  return (dispatch,prevState) => {
    dispatch({type , data })
  }
}


export {
  setNavigator ,
  updateData,
}
