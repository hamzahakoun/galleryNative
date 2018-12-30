const initState = { all : null,searched : null,related : null, liked : null } ;

const imagesReducer = (state = initState,action) => {
  switch(action.type) {
    case "ALL" :
      return { ...state,all : action.data }

    case "LIKED" :
      return { ...state , liked : action.data}

    case "SEARCHED" :
      return { ...state, searched : action.data }

    case "RELATED" :
      return { ...state, related : action.data }

    case "REMOVE_RELATED" :
      return { ...state, related : null }

    case "REMOVE_ALL" :
      return { all : null,liked : null,searched :null,related : null }

    default :
      return state ;
  }
  return state ;
}

export default imagesReducer ;
