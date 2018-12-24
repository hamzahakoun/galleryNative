const initState = {
  rootNavigator : null,
  DrawerNavigator :null, 
}

const routeReducer = (state = initState,action) => {

  switch(action.type) {
    case "ROOT" :
      return {...state,rootNavigator : action.data} ;

    case "DRAWER" :
      return {...state,DrawerNavigator : action.data} ;

    default :
      return state ;
  }

}

export default routeReducer ;
