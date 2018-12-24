const initState = { all : null,searched : null,related : null, liked : null } ;

const imagesReducer = (state = initState,action) => {
  switch(action.type) {
    case "ALL" :
      return { all : action.data }

    case "LIKED" :
      console.log(action.type) ; 
      console.log(action.data) ;
      return { liked : action.data }

    case "SEARCHED" :
      return { searched : action.data }

    case "related" :
      return { RELATED : action.data }

    default :
      return state ;
  }
  return state ;
}

export default imagesReducer ;
