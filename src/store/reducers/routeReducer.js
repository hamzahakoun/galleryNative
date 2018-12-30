const initState = {
  rootNavigator : null,
}

const routeReducer = (state = initState,action) => {

  switch(action.type) {
    case "ROOT" :
      return {...state,rootNavigator : action.data} ;
      
    case "REMOVE_ALL" :
      return {rootNavigator : null} ;


    default :
      return state ;
  }

}

export default routeReducer ;
