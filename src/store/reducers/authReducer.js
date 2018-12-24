const initState = { isAuthorized : null } ;

const authReducer = (state = initState,action) => {
  switch(action.type) {
    case "LOGIN" :
      return { isAuthorized : true }

    case "UPDATE_AUTHORIZATION" :
      return { isAuthorized : action.data }

    default :
      return state ;
  }
  return state ;
}

export default authReducer ;
