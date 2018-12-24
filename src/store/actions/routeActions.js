const setNavigator = (nav,type) => {
  return (dispatch,setState) => {
    dispatch({type ,data : nav})
  }
}

export {
  setNavigator ,
}
